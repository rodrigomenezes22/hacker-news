import './App.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_API_URL } from './utils/constants';
import { SEARCH_QUERY } from './utils/constants';
import { DATE_SEARCH } from './utils/constants';
import { FRONT_PAGE } from './utils/constants';
import { isCompositeComponent } from 'react-dom/test-utils';
import Menu from './Components/Menu';

import NewsItem from './Components/NewsItem';

function App() {

const [ searchTerm , setSearchTerm ] = useState('cars');

const [ news , setNews ] = useState([]);

const [ isLoading , setIsLoading ] = useState(false);

useEffect(() => {
  setIsLoading(true);

  axios
  .get(BASE_API_URL + SEARCH_QUERY + FRONT_PAGE)
  .then(res => {
     return setNews(res.data.hits)
     setIsLoading(false);
  })
  .catch((error) => {
      console.log(error)
  })

}, []);



const handleSearch = () => {
  setIsLoading(true);

  axios
  .get(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
  .then(res => {

     return setNews(res.data.hits, ...news)
     setIsLoading(false);
  })
  .catch((error) => {
      console.log(error)
  })
}

const homeLogo = () => {
  setSearchTerm('front_page');
  handleSearch();
}


const pastNews = () => {
  setIsLoading(true);

  axios
  .get(`http://hn.algolia.com/api/v1/search_by_date?tags=story`)
  .then(res => {

     return setNews(res.data.hits, ...news)
     setIsLoading(false);
  })
  .catch((error) => {
      console.log(error)
  })
}

const commentsGet = () => {
  setIsLoading(true);

  axios
  .get(`http://hn.algolia.com/api/v1/search?query=bar&tags=comment`)
  .then(res => {

     return setNews(res.data.hits, ...news)
     setIsLoading(false);
  })
  .catch((error) => {
      console.log(error)
  })
}

const jobGet = () => {
  setSearchTerm('job');
  handleSearch();
}

const showGet = () => {
  setSearchTerm('show');
  handleSearch();
}

const handleSubmit = (event) => {
  event.preventDefault();
  setSearchTerm(event.target.search.value);
  handleSearch();
  event.target.search.value = '';

};





  return (
    <div className="App">
        <Menu homeLogo={homeLogo} pastNews={pastNews} commentsGet={commentsGet} jobGet={jobGet} showGet={showGet} handleSubmit={handleSubmit} />


        {
          news.map(article=>(
            <div>
            <NewsItem id={article.points} title={article.title}  username={article.author} url={article.url} time={article.created_at_i} comments={ article.num_comments } />
            </div>
            )
          )
        }
      </div>
  )

}

export default App;
