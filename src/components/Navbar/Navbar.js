import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';

class Navbar extends Component {
  render (){
    return (
      
        <div className='header-bar flex flex-row'>
          <div className='header-logo flex-auto'>
            _NS
          </div>
          <nav className='nav-menu flex-auto'>
            <ul className='flex flex-row'>
            {MenuItems.map((item,index) => {
            return (
              <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
            )
          })}
            </ul>
          </nav>
        </div>
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