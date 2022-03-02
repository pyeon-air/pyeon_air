import React from 'react'
import Cookies from 'universal-cookie';
import { getCookie } from './Cookie';
import { useNavigate } from 'react-router';
import './Logout.css';
const cookies = new Cookies();


const Logout = (props) => {
    
    const onClickLogout =()=>{
        // getCookie('refresh_token')
        cookies.remove('refresh_token')
        history('/login')
      }
      
  const history = useNavigate();

  return (
    <>
    <div className='logout' onClick={onClickLogout}>
    <h1>로그아웃</h1>
    </div>
 
    </>
    )
}

export default Logout;
