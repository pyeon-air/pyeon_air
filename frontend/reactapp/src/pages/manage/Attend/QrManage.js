import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import {getCookie} from '../../../components/Cookie';
import { useNavigate } from 'react-router';

//layout form & css
import Loader from '../../../components/Loader';
import Header from '../../../components/header/Header';
import Sidebar from '../../../components/gnb/Sidebar';
import '../../Mypage.css'

//page form & css
import './QrManage.css';

// import Accordianwrap from '../components/gnb/Accordianwrap'



const Mypage = () => {
    const [loading, setLoading] = useState(false)
    const history = useNavigate();
    const [cookies ,setCookies] = useState(getCookie("refresh_token"))
    const [activeKey, setActiveKey] = useState('1');
    const [openKeys, setOpenKeys] = useState(['3', '4']);
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(true)
        },1000)
        //  if(cookies){
        //     history('/mypage')
        // }else{
        //     history('/Login')
        
        // }
    },[cookies])
    return (
       
        <div className='mypage'>    
            <div className='aside'>
            <div className="nav-wrapper">
            <Sidebar />
</div>
            </div>
            <div className='content'>
                <Header />
            <div>
                <div className='container'>
                <div className='box'>
                    <div className=''>
                        <h3>
                            구분
                        </h3>
                        <div className='check_inout'>
                            <div>
                                <input type="radio" id="checkIn" name='radio-group'></input>
                                <label for="checkIn">입실</label>
                            </div>
                            <div>
                                <input type="radio" id="checkOut"name='radio-group'></input>
                                <label for="checkOut">퇴실</label>
                            </div>
                        </div>
                        <div className='calendar_wrap'>
                            <span>
                                반복
                            </span>
                            <div>
                            <img src='/images/calendar.png' className="calendar_img"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>노출시간</span>
                        <div>
                            <input type="time"></input>
                        </div>
                        <span>~</span>
                        <div>
                            <input type="time"></input>
                        </div>
                    </div>
                    <div>
                        <img></img>
                        <span>입실 08:30 ~ 09:10</span>
                        <div>
                            <input placeholder='QR코드와 함께 표시될 문구를 입력하세요.'></input>
                        </div>
                        <div>
                            <button></button>   
                            <button></button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    
        </div>
      
    );
};

export default Mypage;