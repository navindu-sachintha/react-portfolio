import React, {Component} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render (){
    return (
      
        <div className='header-bar flex flex-row'>
            <div className='header-logo flex-auto'>
                <Link to="/" as={Link}>_NS</Link>
            </div>

          <nav className='nav-menu flex-auto'>
            <ul className='flex flex-row'>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
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