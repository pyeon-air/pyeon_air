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
import './AcademicAchieve.css';

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
        
        $('.academicAchieve').eq(0).show();
        $('.academicAchieveClose').eq(0).hide();

        $('.accordionClose').on('click',function(){
            $('.academicAchieve').eq( $('.accordionClose').index(this) ).hide();
            $('.academicAchieveClose').eq( $('.accordionClose').index(this) ).show();
            // console.log( 'accordionClose : ' + $('.accordionClose').index(this) );
        });

        $('.accordionOpen').on('click',function(){
            $('.academicAchieve').hide();
            $('.academicAchieve').eq( $('.accordionOpen').index(this) ).show();
            $('.academicAchieveClose').show();
            $('.academicAchieveClose').eq( $('.accordionOpen').index(this) ).hide();
            // console.log( 'accordionOpen : ' + $('.accordionOpen').index(this) );
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
                <div className="academicAchieve_wrap">
                    <div>  
                        <div className="academicAchieveClose">
                            <div className="academicAchieveClose_list_header_top debug">
                                <div>1일</div>
                                <div>
                                    <span>파이썬 클래스, 객체 지향</span>
                                    <span>2022.03.01~2022.03.31</span>
                                </div>
                                <div className="pointer accordionOpen">+</div>
                            </div>
                        </div>

                        <div className="academicAchieve debug">
                            <div className="academicAchieve_list_header_top debug">
                                <div>1일</div>
                                <div>
                                    <span>파이썬 함수와 반복문</span>
                                    <span>2022.03.01~2022.03.31</span>
                                </div>
                                <div className="pointer accordionClose">X</div>
                            </div>
                            <div className="academicAchieve_list_header debug">
                                <table className="academicAchieve_table_header">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead className="academicAchieve_table_h">
                                        <tr>
                                            <th>
                                                <span>수강생 코드<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>수강생 명<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>학습시간<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>진도율<span>↑</span><span>↓</span></span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="academicAchieve_list_body debug">
                                <table className="academicAchieve_table_body">
                                    <colgroup>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                    </colgroup>
                                    <tbody className="academicAchieve_table_b">
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                            <div className="academicAchieve_total_text debug">
                                <span>총계</span>
                            </div>
                            <div className="academicAchieve_total_cnt debug">
                                <span>100</span>
                            </div>
                        </div>
                        
                        
                                                    
                        <div className="academicAchieveClose">
                            <div className="academicAchieveClose_list_header_top debug">
                                <div>2일</div>
                                <div>
                                    <span>파이썬 클래스, 객체 지향</span>
                                    <span>2022.03.01~2022.03.31</span>
                                </div>
                                <div className="pointer accordionOpen">+</div>
                            </div>
                        </div>
                        
                        <div className="academicAchieve debug">
                            <div className="academicAchieve_list_header_top debug">
                                <div>2일</div>
                                <div>
                                    <span>파이썬 클래스, 객체 지향</span>
                                    <span>2022.03.01~2022.03.31</span>
                                </div>
                                <div className="pointer accordionClose">X</div>
                            </div>
                            <div className="academicAchieve_list_header debug">
                                <table className="academicAchieve_table_header">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead className="academicAchieve_table_h">
                                        <tr>
                                            <th>
                                                <span>수강생 코드<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>수강생 명<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>학습시간<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>진도율<span>↑</span><span>↓</span></span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="academicAchieve_list_body debug">
                                <table className="academicAchieve_table_body">
                                    <colgroup>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                    </colgroup>
                                    <tbody className="academicAchieve_table_b">
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                            <div className="academicAchieve_total_text debug">
                                <span>총계</span>
                            </div>
                            <div className="academicAchieve_total_cnt debug">
                                <span>100</span>
                            </div>
                        </div>


                                                    
                        <div className="academicAchieveClose">
                            <div className="academicAchieveClose_list_header_top debug">
                                <div>3일</div>
                                <div>
                                    <span>파이썬 클래스, 객체 지향</span>
                                    <span>2022.03.01~2022.03.31</span>
                                </div>
                                <div className="pointer accordionOpen">+</div>
                            </div>
                        </div>
                        
                        <div className="academicAchieve debug">
                            <div className="academicAchieve_list_header_top debug">
                                <div>3일</div>
                                <div>
                                    <span>파이썬 클래스, 객체지향</span>
                                    <span>2022.03.01~2022.03.31</span>
                                </div>
                                <div className="pointer accordionClose">X</div>
                            </div>
                            <div className="academicAchieve_list_header debug">
                                <table className="academicAchieve_table_header">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead className="academicAchieve_table_h">
                                        <tr>
                                            <th>
                                                <span>수강생 코드<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>수강생 명<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>학습시간<span>↑</span><span>↓</span></span>
                                            </th>
                                            <th>
                                                <span>진도율<span>↑</span><span>↓</span></span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="academicAchieve_list_body debug">
                                <table className="academicAchieve_table_body">
                                    <colgroup>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                        <col width="25%"/>
                                    </colgroup>
                                    <tbody className="academicAchieve_table_b">
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr>
                                            <td>YD0325</td>
                                            <td>이주연</td>
                                            <td>2022.03.25</td>
                                            <td>50%</td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                            <div className="academicAchieve_total_text debug">
                                <span>총계</span>
                            </div>
                            <div className="academicAchieve_total_cnt debug">
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