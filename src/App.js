import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import NewsItem from './Components/NewsItem';

function App() {
const [news,setNews] = useState([])
useEffect(()=>{
fetch("https://hn.algolia.com/api/v1/search?query=react").then(response => response.json())
      .then(data => {
        setNews(data.hits);
      })

    },[]) 

  return (
    <div className="App">
      <NewsItem></NewsItem>
    </div>
  );
  }

export default App;
