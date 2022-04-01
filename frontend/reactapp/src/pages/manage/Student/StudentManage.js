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
        // 팝업 css 초기화
        // $('.popupBackgroundWrap').hide();
        $('.studentInsertPopup').hide();

        // 팝업 출력
            
        $('.studentManage_title > span:nth-child(7) > button').on('click',function(){
            $('.popupBackgroundWrap').show();
            $('.studentInsertPopup').show();
        });
        $('.studentManage_title > span:nth-child(7) > button').on('click',function(){
            $('.popupBackgroundWrap').show();
            $('.studentDetailPopup').show();
        });

        // 팝업 숨김
        $('.studentInsertHeader > div:nth-child(2) > img').on('click',function(){
            $('.popupBackgroundWrap').hide();
            $('.studentInsertPopup').hide();
        });
        $('.studentInsertBody > div:nth-child(5) > button').on('click',function(){
            $('.popupBackgroundWrap').hide();
            $('.studentInsertPopup').hide();
        });
        $('.popupBackgroundWrap').on('click',function(){
            $('.popupBackgroundWrap').hide();
            $('.studentInsertPopup').hide();
        });
        
    });

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
                        <div className="studentManage ">
                            <div className="studentManage_title">
                                <span>총원</span>
                                <span>100</span>
                                <span>수료</span>
                                <span>98</span>
                                <span>퇴교</span>
                                <span>2</span>
                                <span><button className="pointer">입교생 추가</button></span>
                                
                            </div>
                            <div className="studentManage_list_header ">
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
                            <div className="studentManage_list_body ">
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
            <div className="popupBackgroundWrap"></div>
            <div className="studentInsertPopup">
                <div className="studentInsertHeader">
                    <div>입교생 추가</div>
                    <div><img className="pointer" src="/images/common/button_close.png" /></div>
                </div>
                <div className="studentInsertBody">
                    <div>개별 추가</div>
                    <div>
                        <div>
                            <label>수강생명/ 기수</label>
                            <input type="text" placeholder='이주연'/>
                            <label>생년월일</label>
                            <input type="text" placeholder='220401'/>
                        </div>
                        <div>
                            <label>주소</label>
                            <input type="text" placeholder='서울특별시 금천구 디지털로9길'/>
                        </div>
                    </div>
                    <div>Excel 일괄 추가</div>
                    <div>
                        <img className="pointer" src="/images/common/button_close.png" />
                        파일을 여기로 드래그 해주세요.
                    </div>
                    <div><button className="pointer">추가</button></div>
                </div>
            </div>
            <div className="studentDetailPopup">
                <div className="studentDetailHeader">
                    <div>입교생 관리카드 (상세)</div>
                    <div><img className="pointer" src="/images/common/button_close.png" /></div>
                </div>
                <div className="studentDetailBody">
                    <div>수강생코드 : YD001</div>
                    <div className="studentDetailInfo">
                        <table>
                            <colgroup>
                                <col width="15%"/>
                                <col width="35%"/>
                                <col width="15%"/>
                                <col width="35%"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="4">학력사항</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td className="notSort" colspan="3">□ 대학원(석사)</td>
                                </tr>
                                <tr>
                                    <td>학교명</td>
                                    <td></td>
                                    <td>재학기간</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>전공명</td>
                                    <td className="notSort" colspan="3">□ 주 전공명</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="studentDetailTbl">
                        <table>
                            <colgroup>
                                <col width="15%"/>
                                <col width="35%"/>
                                <col width="15%"/>
                                <col width="35%"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="4">학력사항</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>최종학력</td>
                                    <td className="notSort" colspan="3">□ 대학원(석사) □ 대학교(4년제) □ 대학(2,3년제) □ 고등학교</td>
                                </tr>
                                <tr>
                                    <td>학교명</td>
                                    <td></td>
                                    <td>재학기간</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>전공명</td>
                                    <td className="notSort" colspan="3">□ 주 전공명 __________ □ 복수 전공명 __________<br></br>
                                        □ 부 전공명 __________ □ 기타 __________ □ 해당없음
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table>
                            <colgroup>
                                <col width="50%"/>
                                <col width="15%"/>
                                <col width="15%"/>
                                <col width="10%"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="4">경력사항</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>기간</td>
                                    <td>근무처</td>
                                    <td>부서명</td>
                                    <td>직위</td>
                                </tr>
                                <tr>
                                    <td>2021년 3월 ~ 2021년 5월(0년 3개월)</td>
                                    <td>산학협력단</td>
                                    <td>기획</td>
                                    <td>인턴</td>
                                </tr>
                                <tr>
                                    <td>2021년 3월 ~ 2021년 5월(0년 3개월)</td>
                                    <td>산학협력단</td>
                                    <td>기획</td>
                                    <td>인턴</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <table>
                            <colgroup>
                                <col width="50%"/>
                                <col width="15%"/>
                                <col width="15%"/>
                                <col width="10%"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="4">경험사항</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>기간</td>
                                    <td>주관</td>
                                    <td colspan="2">내용</td>
                                </tr>
                                <tr>
                                    <td>2021년 3월 ~ 2021년 5월(0년 3개월)</td>
                                    <td>산학협력단</td>
                                    <td colspan="2">기획</td>
                                </tr>
                                <tr>
                                    <td>2021년 3월 ~ 2021년 5월(0년 3개월)</td>
                                    <td>산학협력단</td>
                                    <td colspan="2">기획</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <table>
                            <colgroup>
                                <col width="15%"/>
                                <col width="15%"/>
                                <col width="35%"/>
                                <col width="35%"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="4">기타 자격요건</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="4">기타<br></br>자격요건</td>
                                    <td rowspan="2">어학<br></br>(외국어)</td>
                                    <td className="notSort" colspan="2">□ 회화(상,중,하) □ 독해(상,중,하) □ 작문(상,중,하)</td>
                                </tr>
                                <tr>
                                    <td className="notSort" colspan="2">시험명 + 점수 (기재 : TOEIC 700, OPIC IH)</td>
                                </tr>
                                <tr>
                                    <td className="notSort" colspan="3">관련 자격증(자격증명(급수) : 컴퓨터활용능력(1급)</td>
                                </tr>
                                <tr>
                                    <td className="notSort" colspan="3">관련 자격증(자격증명(급수) : 컴퓨터활용능력(1급)</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <table>
                            <colgroup>
                                <col width="15%"/>
                                <col width="20%"/>
                                <col width="30%"/>
                                <col width="35%"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="4">구직 희망사항</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>희망분야</td>
                                    <td className="notSort" colspan="3">
                                        □ 엔터 □ 금융(핀테크) □ 플랫폼 □ 바이오(의료IT) □ 기타
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="2">근무가능<br></br>지역정보</td>
                                    <td>지역<br></br>(중복체크)</td>
                                    <td className="notSort" colspan="2">
                                        □ 서울 □ 서울 □ 서울 □ 서울 □ 서울<br></br> 
                                        □ 서울 □ 서울 □ 서울 □ 서울 □ 서울<br></br> 
                                        □ 서울 □ 서울 □ 서울<br></br> 
                                    </td>
                                </tr>
                                <tr>
                                    <td>출퇴근</td>
                                    <td className="notSort" colspan="2">
                                        □ 도보 20분 이내 □ 대중교통, 자차 1시간 이내<br></br>
                                        □ 대중교통, 자차 1시간 30분 이내 □ 거리무관
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>희망연봉</td>
                                    <td colspan="3">4000만원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        :  <Loader type="spin" color="RGB 값" /> )
    );
};

export default Mypage;