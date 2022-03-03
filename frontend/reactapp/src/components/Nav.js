import React from 'react'
import { Link } from 'react-router-dom';
import { getCookie } from './Cookie';

import './Nav.css';
import { useNavigate } from 'react-router';


const Nav = () => {
  const history = useNavigate();


  return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            {/* <Link to="/login">Login</Link>  */}
          </li>
          <li>
            {/* 임의로 로그아웃 구현 */}
          </li>
        </ul>
      </div>
    )
}

export default Nav;
