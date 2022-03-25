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
import './StudentConsult.css';

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
                <div className="studentConsult_wrap">
                    <div>
                        <div className="studentConsult debug">
                            <div className="studentConsult_search debug">
                                <div className="studentConsult_search_radio debug">
                                    <div>
                                        <span>진행상황</span><span>구분</span>
                                    </div>
                                    <div>
                                        <input id="radio1" name="radio1" type="radio" value="" checked/>
                                        <label for="radio1">진행중</label>
                                        <input id="radio2" name="radio1" type="radio" value=""/>
                                        <label for="radio2">완료</label>
                                        <input id="radio3" name="radio2" type="radio" value="" checked/>
                                        <label for="radio3">유선</label>
                                        <input id="radio4" name="radio2" type="radio" value=""/>
                                        <label for="radio4">인터넷 상담</label>
                                    </div>
                                </div>
                                <div className="studentConsult_search_student debug">
                                    <span>기간</span>
                                    <select>
                                        <option>1월</option>
                                        <option>2월</option>
                                        <option>3월</option>
                                        <option>4월</option>
                                        <option>5월</option>
                                        <option>6월</option>
                                        <option>7월</option>
                                        <option>8월</option>
                                        <option>9월</option>
                                        <option>10월</option>
                                        <option>11월</option>
                                        <option>12월</option>
                                    </select>
                                    <span>상담 유형</span>
                                    <select>
                                        <option>학습</option>
                                        <option>진로</option>
                                        <option>문의</option>
                                    </select>
                                    <span>수강생 명</span>
                                    <input type="text" />
                                    <button className="pointer">조회</button>
                                </div>
                            </div>
                            <div className="studentConsult_list_header debug">
                                <table className="studentConsult_table_header">
                                    <colgroup>
                                        <col width="10%"/>
                                        <col width="19%"/>
                                        <col width="19%"/>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead className="studentConsult_table_h">
                                        <tr>
                                            <th>
                                                <span>상담 유형</span>
                                            </th>
                                            <th>
                                                <span>수강생 코드<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>수강생 명<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>구분</span>
                                            </th>
                                            <th>
                                                <span>상담일시</span>
                                            </th>
                                            <th>
                                                <span>내역</span>
                                            </th>
                                            <th>
                                                <span>진행상황</span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="studentConsult_list_body debug">
                                <table className="studentConsult_table_body">
                                    <colgroup>
                                        <col width="12%"/>
                                        <col width="15%"/>
                                        <col width="25%"/>
                                        <col />
                                        <col width="10%"/>
                                    </colgroup>
                                    <tbody className="studentConsult_table_b">
                                        <tr>
                                            <td>학습</td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td>인터넷상담</td>
                                            <td>2022.03.25</td>
                                            <td>상담내역</td>
                                            <td>완료</td>
                                        </tr>
                                        <tr>
                                            <td>진로</td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td>유선</td>
                                            <td>2022.03.25</td>
                                            <td>상담내역</td>
                                            <td>진행중</td>
                                        </tr>
                                        <tr>
                                            <td>문의</td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td>인터넷상담</td>
                                            <td>2022.03.25</td>
                                            <td>상담내역</td>
                                            <td>진행중</td>
                                        </tr>
                                        <tr>
                                            <td>학습</td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td>인터넷상담</td>
                                            <td>2022.03.25</td>
                                            <td>상담내역</td>
                                            <td>완료</td>
                                        </tr>
                                        <tr>
                                            <td>학습</td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td>인터넷상담</td>
                                            <td>2022.03.25</td>
                                            <td>상담내역</td>
                                            <td>완료</td>
                                        </tr>
                                        <tr>
                                            <td>학습</td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td>인터넷상담</td>
                                            <td>2022.03.25</td>
                                            <td>상담내역</td>
                                            <td>완료</td>
                                        </tr>
                                        <tr>
                                            <td>학습</td>
                                            <td>Y0322</td>
                                            <td>이주연</td>
                                            <td>인터넷상담</td>
                                            <td>2022.03.25</td>
                                            <td>상담내역</td>
                                            <td>완료</td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                            <div className="studentConsult_total_text debug">
                                <span>총계</span>
                            </div>
                            <div className="studentConsult_total_cnt debug">
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