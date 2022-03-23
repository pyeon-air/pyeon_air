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
import './CompleteProcess.css';

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

        // 체크박스 전체 선택/해제
        $('#attendState_monthly_check_all').on('click',function(){
            if( $(this).prop('checked') )
                $('.attendState_monthly_check').prop('checked',true);
            else
                $('.attendState_monthly_check').prop('checked',false);
        });
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
                        <div className="completeProcess debug">
                            <div className="completeProcess_list_header debug">
                                <table className="completeProcess_table_header">
                                    <colgroup>
                                        <col width="5%"/>
                                        <col width="25%"/>
                                        <col width="20%"/>
                                        <col />
                                        <col width="10%"/>
                                    </colgroup>
                                    <thead className="completeProcess_table_h">
                                        <tr>
                                            <th>
                                                <input id="attendState_monthly_check_all" name="attendState_monthly_check" type="checkbox"/>
                                            </th>
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
                            <div className="completeProcess_list_body debug">
                                <table className="completeProcess_table_body">
                                    <colgroup>
                                        <col width="12%"/>
                                        <col width="15%"/>
                                        <col width="25%"/>
                                        <col />
                                        <col width="10%"/>
                                    </colgroup>
                                    <tbody className="completeProcess_table_b">
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer wait">수료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer wait">수료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                        <tr>
                                            <td><input className="attendState_monthly_check" type="checkbox"/></td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td></td>
                                            <td><button className="pointer done">완료</button></td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                            
                            <div className="completeProcess_footer">
                                <span>총계 /</span>
                                <span>100</span>
                                <span><button className="pointer">일괄수료</button></span>
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