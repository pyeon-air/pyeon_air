import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import {getCookie} from '../components/Cookie';
import { useNavigate } from 'react-router';
import './Home.css';
import Loader from '../components/Loader';

const Mypage = () => {
    const [loading, setLoading] = useState(false)
    const history = useNavigate();
    const [cookies ,setCookies] = useState(getCookie("refresh_token"))
 useEffect(() =>{
    setTimeout(()=>{
        setLoading(true)
      },1000)
     if(cookies){
        console.log("로그인성공")

    }else{
        history('/login')
    }
 },[cookies])
    return (
        (loading ? <>
            <div className='header'>
           <h1>Mypage</h1>
       </div>
       <h2>환영합니다.</h2>
        </> :  <Loader type="spin" color="RGB 값" /> )
       
    );
};

export default Mypage;