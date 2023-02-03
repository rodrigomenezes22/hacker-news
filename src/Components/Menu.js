import React, { useState } from 'react'
import '../css/menu.css'

function Menu({ homeLogo, pastNews, commentsGet, jobGet, showGet, searchTerms, handleSubmit }) {


  const [ searchActive, setSearchActive ] = useState(false);

  const handleSearchActive = () => {
    searchActive ? setSearchActive(false) : setSearchActive(true);
  }


  return (
    <div>
        <header>
          <div className='container'>
            <div className='logo' onClick={homeLogo}>
                <div className='image'>Y</div>
                <div className='name'>HACKER NEWS</div>
            </div>
            <nav>
              <ul>
                <li><a>

                  { searchActive ? 
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="search" />
                    <button type='submit'>Search</button>
                  </form> 
                  : 
                  <span onClick={handleSearchActive} class="material-symbols-outlined">
                  search
                  </span>
                  }
                  </a>
                </li>
                <li><a onClick={pastNews}>new</a></li>
                <li><a onClick={commentsGet}>comments</a></li>
                <li><a onClick={showGet}>show</a></li>
                <li><a onClick={jobGet}>jobs</a></li>
                <li><a>submit</a></li>
                <li>              
                  <div className='login'>
                  <span class="material-symbols-outlined">
                    person_pin
                    </span>
                    login
                  </div>
                </li>
              </ul>


            </nav>
          </div>
        </header>
    </div>
  )
}

export default Menu
