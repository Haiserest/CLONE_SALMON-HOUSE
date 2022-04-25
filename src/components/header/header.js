import './header.css';
import React from 'react'

function AppHeader(){
    return (

        <div className="header-container">
          <div className='nav-header'>

            <div className='logo-header'>
              <img className='logo-web' src='/images/webui.png' />
            </div>
        
            <ul className='nav-menu'>
              <li className='nav-items'>
                <a className='h-items' href='/'><b>HOME</b></a>
              </li>
              <li className='nav-items'>
                <a className='h-items' href='/about'><b>ABOUT</b></a>
              </li>
              <li className='nav-items'>
                <a className='h-items' href='/works'><b>WORKS</b></a>
              </li>
              <li className='nav-items'>
                <a className='h-items' href='/behind'><b>BEHIND</b></a>
              </li>
              <li className='nav-items'>
                <a className='h-items' href='/clients'><b>CLIENTS</b></a>
              </li>
              <li className='nav-items'>
                <a className='h-items' href='/contact'><b>CONTACT</b></a>
              </li>
            </ul>

          </div>
      </div>

    );
}

export default AppHeader;