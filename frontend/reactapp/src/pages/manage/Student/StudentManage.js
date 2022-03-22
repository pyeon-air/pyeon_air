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
import './StudentManage.css';

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
                        <div className="studentManage debug">
                            <div className="studentManage_title">
                                <span>총원</span>
                                <span>100</span>
                                <span>수료</span>
                                <span>98</span>
                                <span>퇴교</span>
                                <span>2</span>
                                <span><button className="pointer">입교생 추가</button></span>
                                
                            </div>
                            <div className="studentManage_list_header debug">
                                <table className="studentManage_table_header">
                                    <colgroup>
                                        <col width="25%"/>
                                        <col width="20%"/>
                                        <col />
                                        <col width="10%"/>
                                    </colgroup>
                                    <thead className="studentManage_table_h">
                                        <tr>
                                            <th>
                                                <span>수강생 코드<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>수강생 명<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                
                                            </th>
                                            <th>
                                                관리카드
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="studentManage_list_body debug">
                                <table className="studentManage_table_body">
                                    <colgroup>
                                        <col width="25%"/>
                                        <col width="20%"/>
                                        <col />
                                        <col width="10%"/>
                                    </colgroup>
                                    <tbody className="studentManage_table_b">
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                        <tr>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer">확인</button></td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
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