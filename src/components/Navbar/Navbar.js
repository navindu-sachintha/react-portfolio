import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';

class Navbar extends Component {
  render (){
    return (
      <header className='web-header'>
        <div className='web-header-bar'>
          <h1>Navindu</h1>

          <nav className='header-nav'>
            <ul className='nav-list'>
              {MenuItems.map((items,index) => {
                return (
                  <li key={index}><a className={items.cName} href={items.url}>{items.title}</a></li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
      /*<nav className="NavbarItems">
        <div className="navbar-logo">
          <h1>Navindu</h1>
        </div>
        <ul className='nav-menu'>
          {MenuItems.map((item,index) => {
            return (
              <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
            )
          })}
        </ul>
      </nav>*/
    );
  }
};

export default Navbar;