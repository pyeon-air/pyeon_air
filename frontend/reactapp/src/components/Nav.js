import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';



const Nav = () => {
  return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/login">Login</Link> 
          </li>
        </ul>
      </div>
    )
}

export default Nav;
