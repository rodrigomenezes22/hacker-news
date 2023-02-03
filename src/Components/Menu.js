import React, { useState } from 'react'
import '../css/menu.css'

function Menu({ homeLogo, pastNews, commentsGet, jobGet, showGet, searchTerms, handleSubmit, setSearchTerm }) {


  const [ searchActive, setSearchActive ] = useState(false);

  const handleSearchActive = () => {
    searchActive ? setSearchActive(false) : setSearchActive(true);
  }

  const handleMouseEnter = (e) => {
    e.target.firstElementChild.classList.add('active');
    console.log('over')
  }

  const handleMouseOut = (e) => {
    e.target.firstElementChild.classList.remove('active');
    console.log('out')
  }


  return (
    <div>
        <header>
          <div className='container'>
            <div className='logo' onClick={homeLogo}>
                <div className='image'>Y</div>
                <div className='name'>HACKER NEWS</div>
            </div>
            <span class="material-symbols-outlined hamburger">
              menu
            </span>

            <nav>
              <ul>
                <li><a>

                  { searchActive ? 
                  <div className='search_wrapper'>
                  <span onClick={handleSearchActive} class="material-symbols-rounded icon-clickable">
                  cancel
                  </span>
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="search" onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type='submit'>Search</button>
                  </form> 
                  </div>
                  : 
                  <span onClick={handleSearchActive} class="material-symbols-rounded icon-clickable">
                  search
                  </span>
                  }
                  </a>
                </li>
                <li>
                  <a href='#' onClick={pastNews} onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}>new  <div className='hover-item'></div></a>
                 
                </li>
                <li><a href='#' onClick={commentsGet} onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}>comments <div className='hover-item'></div></a></li>
                <li><a href='#' onClick={showGet} onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}>show <div className='hover-item'></div></a></li>
                <li><a href='#' onClick={jobGet} onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}>jobs <div className='hover-item'></div></a></li>
                <li><a href='#' onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}>submit <div className='hover-item'></div></a></li>
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
