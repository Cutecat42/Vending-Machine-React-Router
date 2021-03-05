import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="MyNavBarClass">
          <NavLink exact to="/" className='navBarLink'>
            Home 
          </NavLink>
          <NavLink exact to="/hotcheetos" className='navBarLink'>
            Hot Cheetos 
          </NavLink>
          <NavLink exact to="/pepsi" className='navBarLink'>
            Pepsi 
          </NavLink>
          <NavLink exact to="/trailmix" className='navBarLink'>
            Trail Mix 
          </NavLink>
        </nav>
      );
}

export default NavBar;