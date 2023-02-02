import React from 'react'
import '../css/menu.css'

function Menu() {
  return (
    <div>
        <header>
          <div className='container'>
            <div className='logo'>
                <div className='image'>Y</div>
                <div className='name'>HACKER NEWS</div>
            </div>
            <nav>
              <ul>
                <li><a>Search Icon</a></li>
                <li><a>new</a></li>
                <li><a>past</a></li>
                <li><a>comments</a></li>
                <li><a>show</a></li>
                <li><a>jobs</a></li>
                <li><a>submit</a></li>
                <li>              
                  <div className='login'>
                    Login
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
