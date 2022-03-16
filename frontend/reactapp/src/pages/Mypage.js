import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import {getCookie} from '../components/Cookie';
import { useNavigate } from 'react-router';
// import './Home.css';
import Loader from '../components/Loader';
import Header from '../components/header/Header';
import './Mypage.css'
import Sidebar from '../components/gnb/Sidebar';
// import Accordianwrap from '../components/gnb/Accordianwrap'
const Mypage = () => {
    const [loading, setLoading] = useState(false)
    const history = useNavigate();
    const [cookies ,setCookies] = useState(getCookie("token"))
    const [activeKey, setActiveKey] = useState('1');
    const [openKeys, setOpenKeys] = useState(['3', '4']);
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
            <div className='aside'>
            <div className="nav-wrapper">
            <Sidebar />
</div>
            </div>
            <div className='content'>
                <Header />
             <div>

             </div>
            </div>
    
        </div>
        :  <Loader type="spin" color="RGB 값" /> )
    );
};

export default Mypage;