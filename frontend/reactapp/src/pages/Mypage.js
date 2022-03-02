import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import {getCookie} from '../components/Cookie';
import { useNavigate } from 'react-router';
import './Home.css';
import Loader from '../components/Loader';
import Header from '../components/Header';
import './Mypage.css'

const Mypage = () => {
    const [loading, setLoading] = useState(false)
    const history = useNavigate();
    const [cookies ,setCookies] = useState(getCookie("refresh_token"))
 useEffect(() =>{
    setTimeout(()=>{
        setLoading(true)
      },1000)
     if(cookies){
        history('/mypage')
    }else{
        history('/Login')
    
    }
 },[cookies])
    return (
    

        (loading ? 
        <div className='mypage'>
             <Header />
        </div>
        :  <Loader type="spin" color="RGB 값" /> )
    );
};

export default Mypage;