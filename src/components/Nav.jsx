import React from 'react'
import './../App.css'

function Nav() {
  return (
    <>
        <nav>
            <img src="/images/brand_logo.png" alt="logo" width={78}/>
            <ul>
              <li href='#'>Menu</li>
              <li href='#'>Location</li>
              <li href='#'>About</li>
              <li href='#'>Contact</li>
            </ul>
            <button id='login'>Login</button>
        </nav>
    </>
  )
}

export default Nav
