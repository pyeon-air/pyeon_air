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
import './AttendState.css';

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
        
        // 출석확인 탭 클릭 시 변경
        $('[class^="attendState_tab_"').on('click', function(){
            
            $('[class^="attendState_tab_"').css('background-color','#29c39f');
            $(this).css('background-color','white');
            
            $('.attendState_daily').hide();
            $('.attendState_monthly').hide();
            
            if( $(this).attr('class').indexOf('daily') > -1 ) $('.attendState_daily').show();
            else if( $(this).attr('class').indexOf('monthly') > -1 ) $('.attendState_monthly').show();
            
        });

        // 셀렉트박스 클릭 시, 상단 테스트 변경
        $('.attendState_monthly_select').on('change', function(){
            $('.attendState_monthly_title span:nth-child(1)').text($(this).val());
        });

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
                        <div className="attendState_tab debug">
                            <div className="attendState_tab_daily pointer debug">일별 출석 확인</div>
                            <div className="attendState_tab_monthly pointer debug">월별 출석 확인</div>
                            <div className="attendState_tab_yearly pointer debug">연별 출석 확인</div>
                        </div>
                        <div className="attendState_daily debug">
                            <div className="attendState_daily_search debug">
                                <div className="attendState_daily_search_period debug">
                                    <span>기간</span>
                                    <input type="date"/>
                                </div>
                                <div className="attendState_daily_search_student debug">
                                    <span>수강생 코드</span>
                                    <input type="text" />
                                    <span>수강생 명</span>
                                    <input type="text" />
                                    <button className="pointer">조회</button>
                                </div>
                            </div>
                            <div className="attendState_daily_list debug">
                                <div className="attendState_daily_list_header debug">
                                    <span>수강생 코드<span>↑</span><span>↓</span></span>
                                    <span>수강생 명<span>↑</span><span>↓</span></span>
                                    <span>공가<span>↑</span><span>↓</span></span>
                                    <span>외출<span>↑</span><span>↓</span></span>
                                    <span>지각<span>↑</span><span>↓</span></span>
                                    <span>결석<span>↑</span><span>↓</span></span>
                                    <span>수료율</span>
                                </div>
                                <div className="attendState_daily_list_cntnt debug">
                                    <div className="attendState_daily_list_cntnt_item debug">
                                        <span>코드</span>
                                        <span>수강생</span>
                                        <span>1</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="attendState_daily_list_cntnt_item debug">
                                        <span>코드</span>
                                        <span>수강생</span>
                                        <span>1</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="attendState_daily_list_cntnt_item debug">
                                        <span>코드</span>
                                        <span>수강생</span>
                                        <span>1</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="attendState_daily_list_cntnt_item debug">
                                        <span>코드</span>
                                        <span>수강생</span>
                                        <span>1</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="attendState_daily_list_cntnt_item debug">
                                        <span>코드</span>
                                        <span>수강생</span>
                                        <span>1</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="attendState_daily_list_cntnt_item debug">
                                        <span>코드</span>
                                        <span>수강생</span>
                                        <span>1</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="attendState_daily_btn debug">
                                <button className="pointer">Excel</button>
                            </div>
                        </div>
                        <div className="attendState_monthly debug">
                            <div className="attendState_monthly_title">
                                <span>2월</span><span> 출석현황</span>
                            </div>
                            <div className="attendState_monthly_search debug">
                                <div className="attendState_monthly_search_period debug">
                                    <span>기간 :</span>
                                    <select className="attendState_monthly_select">
                                        <option>1월</option>
                                        <option selected>2월</option>
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
                                    <span>구분 :</span>
                                    <input id="radio1" name="radio" type="radio" value="" checked/>
                                    <label for="radio1">공가</label>
                                    <input id="radio2" name="radio" type="radio" value=""/>
                                    <label for="radio2">외출</label>
                                    <input id="radio3" name="radio" type="radio" value=""/>
                                    <label for="radio3">지각</label>
                                    <input id="radio4" name="radio" type="radio" value=""/>
                                    <label for="radio4">결석</label>
                                    <button className="pointer">조회</button>
                                </div>
                            </div>
                            <div className="attendState_monthly_list debug">
                                <div className="attendState_monthly_list_header debug">
                                    <span><input id="attendState_monthly_check_all" name="attendState_monthly_check" type="checkbox"/></span>
                                    <span>일시<span>↑</span><span>↓</span></span>
                                    <span>사유<span>↑</span><span>↓</span></span>
                                    <span>수강생명<span>↑</span><span>↓</span></span>
                                    <span>첨부파일<span>↑</span><span>↓</span></span>
                                    <span>출석처리</span>
                                </div>
                                <div className="attendState_monthly_list_cntnt debug">
                                    <div className="attendState_monthly_list_cntnt_item debug">
                                        <span><input className="attendState_monthly_check" type="checkbox"/></span>
                                        <span>2022.03.22</span>
                                        <span>늦잠</span>
                                        <span>이주연</span>
                                        <span>사유서.pdf</span>
                                        <button className="pointer">출석</button>
                                    </div>
                                    <div className="attendState_monthly_list_cntnt_item debug">
                                        <span><input className="attendState_monthly_check" type="checkbox"/></span>
                                        <span>2022.03.22</span>
                                        <span>늦잠</span>
                                        <span>이주연</span>
                                        <span>사유서.pdf</span>
                                        <button className="pointer">출석</button>
                                    </div>
                                    <div className="attendState_monthly_list_cntnt_item debug">
                                        <span><input className="attendState_monthly_check" type="checkbox"/></span>
                                        <span>2022.03.22</span>
                                        <span>늦잠</span>
                                        <span>이주연</span>
                                        <span>사유서.pdf</span>
                                        <button className="pointer">출석</button>
                                    </div>
                                    <div className="attendState_monthly_list_cntnt_item debug">
                                        <span><input className="attendState_monthly_check" type="checkbox"/></span>
                                        <span>2022.03.22</span>
                                        <span>늦잠</span>
                                        <span>이주연</span>
                                        <span>사유서.pdf</span>
                                        <button className="pointer">출석</button>
                                    </div>
                                    <div className="attendState_monthly_list_cntnt_item debug">
                                        <span><input className="attendState_monthly_check" type="checkbox"/></span>
                                        <span>2022.03.22</span>
                                        <span>늦잠</span>
                                        <span>이주연</span>
                                        <span>사유서.pdf</span>
                                        <button className="pointer">출석</button>
                                    </div>
                                    <div className="attendState_monthly_list_cntnt_item debug">
                                        <span><input className="attendState_monthly_check" type="checkbox"/></span>
                                        <span>2022.03.22</span>
                                        <span>늦잠</span>
                                        <span>이주연</span>
                                        <span>사유서.pdf</span>
                                        <button className="pointer">출석</button>
                                    </div>
                                </div>
                            </div>
                            <div className="attendState_monthly_total debug">
                                <span>총계 /</span><span>100</span>
                            </div>
                            <div className="attendState_monthly_btn debug">
                                <button className="pointer">반려</button>
                                <button className="pointer">확정</button>
                            </div>
                        </div>
                        <div className="attendState_yearly debug">
                            {/* 필요 시 작업 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :  <Loader type="spin" color="RGB 값" /> )
    );
};

export default Mypage;