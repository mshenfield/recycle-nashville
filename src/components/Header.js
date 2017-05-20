import React from 'react'

import './Header.css'

import logo from './logo.svg'

export default () => (
  <div className='Header gutter-small-margin'>
    <a href="">
      <div className='Header__logo'>
        <img src={logo} className='Header__logo-icon' alt='logo'/>
        <div>
          <h1>RECYCLE NASHVILLE</h1>
          <h2>Helping Music City Residents Go Green</h2>
        </div>
      </div>
    </a>
    <nav className='Header__nav'>
      <a className='Header__nav-link' href="what-can-i-recycle"><h2>What Can I Recycle?</h2></a>
      <a className='Header__nav-link' href="about"><h2>About</h2></a>
    </nav>
  </div>
)
