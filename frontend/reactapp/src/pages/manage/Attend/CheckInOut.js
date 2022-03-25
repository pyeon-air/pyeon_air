import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import {getCookie} from '../../../components/Cookie';
import { useNavigate } from 'react-router';
import $, { isFunction } from "jquery"

//layout form & css
import Loader from '../../../components/Loader';
import Header from '../../../components/header/Header';
import Sidebar from '../../../components/gnb/Sidebar';
import '../../Mypage.css'

//page form & css
import './CheckInOut.css';

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
    // })

    useEffect(() =>{

    })

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
                <div className="attendState_wrap">
                    <div>
                        <div className="checkInOut debug">
                            <div className="checkInOut_title">
                                <span>23</span>
                                <span>/</span>
                                <span>100</span>
                                <span>입실완료</span>
                            </div>
                            <div className="checkInOut_search debug">
                                <div className="checkInOut_search_radio debug">
                                    <div>
                                        <span>구분</span><span>상태</span>
                                    </div>
                                    <div>
                                        <input id="radio1" name="radio1" type="radio" value="" checked/>
                                        <label for="radio1">입실</label>
                                        <input id="radio2" name="radio1" type="radio" value=""/>
                                        <label for="radio2">퇴실</label>
                                        <input id="radio3" name="radio2" type="radio" value="" checked/>
                                        <label for="radio3">완료</label>
                                        <input id="radio4" name="radio2" type="radio" value=""/>
                                        <label for="radio4">미완료</label>
                                    </div>
                                </div>
                                <div className="checkInOut_search_student debug">
                                    <span>수강생 코드</span>
                                    <input type="text" />
                                    <span>수강생 명</span>
                                    <input type="text" />
                                    <button className="pointer">조회</button>
                                </div>
                            </div>
                            <div className="checkInOut_list debug">
                                <div className="checkInOut_list_header debug">
                                    <span>수강생 코드<span>↑</span><span>↓</span></span>
                                    <span>수강생 명</span>
                                    <span>상태<span>↑</span><span>↓</span></span>
                                    <span>시간<span>↑</span><span>↓</span></span>
                                    <span>알림</span>
                                </div>
                                <div className="checkInOut_list_cntnt debug">
                                    <div className="checkInOut_list_cntnt_item debug">
                                        <span>Y0322</span>
                                        <span>이주연</span>
                                        <span>-</span>
                                        <span>-</span>
                                        <span><button className="pointer">알림</button></span>
                                    </div>
                                    <div className="checkInOut_list_cntnt_item debug">
                                        <span>Y0322</span>
                                        <span>이주연</span>
                                        <span>-</span>
                                        <span>-</span>
                                        <span><button className="pointer">알림</button></span>
                                    </div>
                                    <div className="checkInOut_list_cntnt_item debug">
                                        <span>Y0322</span>
                                        <span>이주연</span>
                                        <span>-</span>
                                        <span>-</span>
                                        <span><button className="pointer">알림</button></span>
                                    </div>
                                    <div className="checkInOut_list_cntnt_item debug">
                                        <span>Y0322</span>
                                        <span>이주연</span>
                                        <span>-</span>
                                        <span>-</span>
                                        <span><button className="pointer grayColor">알림</button></span>
                                    </div>
                                    <div className="checkInOut_list_cntnt_item debug">
                                        <span>Y0322</span>
                                        <span>이주연</span>
                                        <span>-</span>
                                        <span>-</span>
                                        <span><button className="pointer grayColor">알림</button></span>
                                    </div>
                                    <div className="checkInOut_list_cntnt_item debug">
                                        <span>Y0322</span>
                                        <span>이주연</span>
                                        <span>-</span>
                                        <span>-</span>
                                        <span><button className="pointer grayColor">알림</button></span>
                                    </div>
                                </div>
                            </div>
                            <div className="checkInOut_total_text debug">
                                <span>총계</span>
                            </div>
                            <div className="checkInOut_total_cnt debug">
                                <span>100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :  <Loader type="spin" color="RGB 값" /> )
    );
};

export default Mypage;