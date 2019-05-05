import React from 'react';
import './Navbar.scss';
import { NavLink} from 'react-router-dom';


function Navbar() {
  return (
    <div className="Navbar">
           <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;