import React from 'react';
import Logo from '../../images/planet-earth.svg';
import searchImg from '../../images/search.svg';
import cart from '../../images/buy.svg';
import menu from '../../images/menu.svg';
import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className="container header__container">
        <button className='menu'>
          <img src={menu} alt="menu" />
        </button>
        <ul className="header__nav">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
        </ul>   
          <a href="#">
            <img width='56' height='56' src={Logo} alt="Logo" />   
          </a>
        <div className='header__search-register-wrapper'>
          <div className="search">
              <img src={searchImg} alt="Search" />
          </div>
          <div className='cart'>
              <img src={cart} alt="shopping cart" />
          </div>
          <button className='register-button'>
            Register now
          </button>
        </div>
      </div>
    </header>
  )
}
