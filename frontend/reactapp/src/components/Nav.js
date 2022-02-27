import React from 'react'
import { Link } from 'react-router-dom';
import { getCookie } from './Cookie';
import Cookies from 'universal-cookie';
import './Nav.css';
import { useNavigate } from 'react-router';


const Nav = () => {
  const history = useNavigate();
  const cookies = new Cookies();
  const onClickLogout =()=>{
    // getCookie('refresh_token')
    cookies.remove('refresh_token')
    history('/login')
  }
  return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/login">Login</Link> 
          </li>
          <li>
            {/* 임의로 로그아웃 구현 */}
            <button onClick={onClickLogout} className='logout'>Logout</button> 
          </li>
        </ul>
      </div>
    )
}

export default Nav;
