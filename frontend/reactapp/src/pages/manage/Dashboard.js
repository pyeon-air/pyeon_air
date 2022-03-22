import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import {getCookie} from '../../components/Cookie';
import { useNavigate } from 'react-router';

//layout form & css
import Loader from '../../components/Loader';
    import Header from '../../components/header/Header';
import Sidebar from '../../components/gnb/Sidebar';
import '../Mypage.css'

//page form & css
import './Dashboard.css';

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
        (loading ? 
        <div className='mypage'>    
            <div className='aside'>
                <div className="nav-wrapper">
                <Sidebar />
                </div>
            </div>
            <div className='content'>
                <div className="dashboard_wrap debug">
                    <Header />
                    <div className="dashboard_card debug">
                        <div className="dashboard_card_1 debug">
                            <div className="dashboard_card_1_area1">
                                <span>2022.03.21</span>
                                <span>과정명 : </span>
                                <span>파이썬 기초</span>
                                <span>
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox"><span></span></label>
                                </span>
                            </div>
                            <div className="dashboard_card_1_area2">
                                <span>
                                    <span>23</span>
                                    <span> / 100</span>
                                </span>
                                <br></br>
                                <span>입실완료</span>
                            </div>
                            <div className="dashboard_card_1_area3">
                                <div>
                                    <a>미입실인원 확인</a>
                                    <a>→</a>
                                </div>
                                <div>
                                    <a>QR 관리</a>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard_card_2 debug">
                            <div className="dashboard_card_2_area1">
                                <span>과정명 : </span>
                                <span>파이썬 기초</span>
                            </div>
                        </div>
                        <div className="dashboard_card_3 debug">
                            <div className="dashboard_card_3_area1">
                                <span>진행중인상담</span>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="dashboard_card_4 debug">
                            <div className="dashboard_card_4_area1">
                                <div className="dashboard_card_4_area1_title">
                                    <span>강의명 : </span>
                                    <span>파이썬 기초</span>
                                </div>

                                <div className="dashboard_card_4_area1_data">
                                    <span>강의자료</span>
                                    <div></div>
                                    <div>
                                        <span>파이썬과 함수, 반복문.pdf</span>
                                        <span>강의자료.pdf</span>
                                    </div>
                                </div>

                                <div className="dashboard_card_4_area1_report">
                                    <span>과제</span>
                                    <div></div>
                                    <div>
                                        <span>과제1.pdf</span>
                                        <span>과제2.pdf</span>
                                    </div>
                                </div>
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