import React from 'react'
import styled,{css} from 'styled-components';
import '../../font.css'
import {useEffect, useState} from 'react';
import $, { isFunction } from "jquery"

const HeaderWrap = styled.div`
background-color: #ffffff;
border-radius: 40px;
max-width: 1200px;
height: 80px;
box-shadow: 0px 5px 4.75px 0.25px rgba(0, 0, 0, 0.05);
margin: 0 auto;
`;
const HeaderTitle = styled.h1`
font-size:30px;
font-family: 'Noto Sans KR', 'sans-serif';
`;
const HeaderContainer = styled.div`
display:flex;
padding:0 30px;
justify-content: space-between;
line-height:80px;
`;
const HeaderIcon = styled.ul`
display:flex;

`;
const IconLI = styled.li`
margin-right:10px;
cursor: pointer;
line-height:100px;
`;
const CircleCnt = styled.div`
    background-color: orange;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    left: 25px;
    color: white;
    font-size: 13px;
    height: 15px;
    width: 15px;
    line-height: 10px;
    padding: 2px 4.5px;
`;

const AlarmLayerPopupArea = styled.div`
    z-index: 1;
    background-color: white;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 300px;
    height: 250px;
    float: right;
    margin-right: 40px;
    margin-top: 90px;
`;
const AlarmLayerPopupHeader = styled.div`
    background-color: orange;
    padding:0px 20px;
    height:40px;
    div{
        display: flex;
        justify-content: space-between;
        float: left;
    }
    div > span {
        color:white;
        margin: 12px 0 0 5px;
    }
    img{
        float:right;
        padding-top: 10px;
    }
`;
const AlarmLayerPopupBody = styled.div`
    background-color: white;
    height:250px;
    overflow-y:auto;
`;
const AlarmLayerPopupDelete = styled.div`
    background-color: white;
    display:flex;
    justify-content: flex-end;
    height:20px;
    font-size:12px;
    margin: 15px 15px 0 0;
`;
const AlarmLayerPopupItem = styled.div`
    background-color: #eeeeee;
    border-radius:10px;
    margin:10px;
    margin-left:50px;
    display:flex;
    justify-content: space-between;
    height:50px;
    width:220px;
    padding:10px;
    div:nth-child(1){
    }
    div:nth-child(1) > .alarmCheckline{
        width: 1px;
        height: 60px;
        border: 1px lightgray dashed;
        margin-left: 0.12rem;
        margin-top: 5px;
    }
    div:nth-child(1) > .alarmCheckline.last{
        border: none;
    }
    div:nth-child(2){
        display:block;
        font-size:13px;
    }
    div:nth-child(3){
        border: 1px solid #e0e0e0;
        width:2px;
        margin-left:5px;
    }
    div:nth-child(4){
        font-size: 13px;
        width: 150px;
        height: 30px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div:nth-child(5){
        line-height:30px;
        img{
            width:10px;
            filter: opacity(0.5) drop-shadow(0 0 0 #444444);
        }
    }
`;

const AlarmCheck = styled.div`
    background-color: gray;
    border-radius: 50%;
    position: absolute;
    top: 25px;
    left: -25px;
    color: white;
    font-size: 13px;
    height: 5px;
    width: 5px;
    // line-height: 10px;
    // padding: 2px 4.5px;
`;

const AlarmWait = styled.div`
    background-color: orange;
    border-radius: 50%;
    position: absolute;
    top: 25px;
    left: -25px;
    color: white;
    font-size: 13px;
    height: 5px;
    width: 5px;
    // line-height: 10px;
    // padding: 2px 4.5px;
`;


const ProfileLayerPopupArea = styled.div`
    z-index: 1;
    background-color: white;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 240px;
    float: right;
    margin-right: 40px;
    margin-top: 90px;
`;
const ProfileLayerPopupHeader = styled.div`
    background-color: gray;
    padding:0px 20px;
    height:100px;
    img.buttonClose{
        float:right;
        padding-top: 10px;
    }
    div{
        display:flex;
        float: left;
    }
    div > img.profileInnerProfile {
        float:left;
        padding-top: 8px;
    }
    div > span {
        color:white;
        margin: 9px 0 0 5px;
    }
    div.profileInnerRocket {
        background-color:#f0f0f0;
        border-radius:50%;
        width:100px;
        height:100px;
        position:absolute;
        top: 50px;
        left: 70px;
        z-index:1;
    }
    img.profileInnerRocketImg {
        width: 70%;
        height: 50%;
        position: relative;
        top: 25px;
        left: 15px;
    }
    div.profileInnerRocket > .profileInnerRocketEdit {
        border: 1px solid orange;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        position: relative;
        top: 80px;
        left: 10px;
        z-index: 1;
    }
    div.profileInnerRocket > .profileInnerRocketEdit > .profileInnerRocketEditBtn {
        width:13px;
        height:11px;
        position:absolute;
        margin:3px;
        z-index:1;
    }
`;
const ProfileLayerPopupBody = styled.div`
    background-color: white;
    height:70px;
    div.profileStudentName{
        font-weight:bold;
        margin-top:60px;
        margin-bottom:10px;
    }
    div.profileStudentCode{
        margin-top:0px;
        display:flex;
        justify-content: center;
    }
    div.profileStudentCode > div:nth-child(1){
        margin-right:10px;
    }
`;
    

const Header = (props) => {
    
    // const [pathname, setPathname] = useState();

    // 운영진 좌측메뉴 URL링크 설정
    var url = window.location.pathname;
    var menuText;
    
    if( url.indexOf('dashboard') > -1 ) menuText = "대시보드";
    else if( url.indexOf('qrManage') > -1 ) menuText = "QR관리";
    else if( url.indexOf('checkInOut') > -1 ) menuText = "입퇴실인원 현황";
    else if( url.indexOf('attendState') > -1 ) menuText = "출석확인";
    else if( url.indexOf('studentManage') > -1 ) menuText = "입교생 관리카드";
    else if( url.indexOf('academicAchieve') > -1 ) menuText = "학습성취도";
    else if( url.indexOf('completeProcess') > -1 ) menuText = "수료처리";
    else if( url.indexOf('studentConsult') > -1 ) menuText = "수강생 상담";
    else if( url.indexOf('liveLecture') > -1 ) menuText = "실시간 강의";
    else if( url.indexOf('recordLecture') > -1 ) menuText = "녹화 강의";
    else if( url.indexOf('createLecture') > -1 ) menuText = "강의 개설";
    else if( url.indexOf('lectureData') > -1 ) menuText = "강의자료";
    else if( url.indexOf('report') > -1 ) menuText = "과제";
    
    useEffect(()=>{
        // 상단 페이지 대제목 출력
        $("#menuText").text( menuText );

        // 팝업 초기화
        $('.alarmLayerPopupArea').hide();
        $('.profileLayerPopupArea').hide();

        // 알림이미지 클릭 시 레이어팝업 활성
        $("#header_alarm, #header_alarmCnt").on('click',function(){
            $('.profileLayerPopupArea').hide();
            $('.alarmLayerPopupArea').show();
        });
        // 알림이미지 클릭 시 레이어팝업 비활성
        $('.alarmLayerPopupCloseArea').on('click',function(){
            $('.alarmLayerPopupArea').hide();
        });

        // 프로필이미지 클릭 시 레이어팝업 활성
        $("#header_profile").on('click',function(){
            $('.alarmLayerPopupArea').hide();
            $('.profileLayerPopupArea').show();
        });
        // 프로필이미지 클릭 시 레이어팝업 비활성
        $('.profileLayerPopupCloseArea').on('click',function(){
            $('.profileLayerPopupArea').hide();
        });
        // 홈이미지 클릭시 URL이동
        $("#header_home").on('click',function(){
            window.location.href = '/manage/dashboard';
        });

    }, []);

    return (
        <>
        <HeaderWrap>
            <HeaderContainer>
                <HeaderTitle id="menuText">
                </HeaderTitle>
                <HeaderIcon>
                    <IconLI>
                        <img id="header_alarm" src="/images/header/manage_header_alarm_circle_empty.png" />
                        <CircleCnt id="header_alarmCnt">2</CircleCnt>
                    </IconLI>
                    <IconLI>
                        <img id="header_profile" src="/images/header/manage_header_profile.png" />
                    </IconLI>
                    <IconLI>
                        <img id="header_home" src="/images/header/manage_header_home.png" />
                    </IconLI>
                </HeaderIcon>
            </HeaderContainer>
            </HeaderWrap>

            <AlarmLayerPopupArea className="alarmLayerPopupArea">
                <AlarmLayerPopupHeader className="alarmLayerPopupCloseArea">
                    <div>
                        <img src="/images/header/manage_header_alarm_inner_alarm.png" />
                        <span>알림</span>
                    </div>
                    <img className="pointer" src="/images/common/button_close.png" />
                </AlarmLayerPopupHeader>

                <AlarmLayerPopupBody>
                    <div></div>
                    <AlarmLayerPopupDelete>
                        <div className="pointer">읽은 알림 삭제</div>
                        <div>│</div>
                        <div className="pointer">전체삭제</div>
                    </AlarmLayerPopupDelete>
                    <AlarmLayerPopupItem>
                        <AlarmWait>
                            <div className="alarmCheckline"></div>
                        </AlarmWait>
                        <div>
                            <div>MON</div>
                            <div>03.28</div>
                        </div>
                        <div>
                        </div>
                        <div className="">
                            상담이 등록되었습니다.
                        </div>
                        <div><img className="pointer" src="/images/common/button_close.png" /></div>
                    </AlarmLayerPopupItem>
                    <AlarmLayerPopupItem>
                        <AlarmWait>
                            <div className="alarmCheckline"></div>
                        </AlarmWait>
                        <div>
                            <div>MON</div>
                            <div>03.28</div>
                        </div>
                        <div></div>
                        <div className="">
                            상담이 등록되었습니다.
                            상담이 등록되었습니다.
                        </div>
                        <div><img className="pointer" src="/images/common/button_close.png" /></div>
                    </AlarmLayerPopupItem>
                    <AlarmLayerPopupItem>
                        <AlarmCheck>
                            <div className="alarmCheckline"></div>
                        </AlarmCheck>
                        <div>
                            <div>MON</div>
                            <div>03.28</div>
                        </div>
                        <div></div>
                        <div className="">
                            상담이 등록되었습니다.
                            상담이 등록되었습니다.
                        </div>
                        <div><img className="pointer" src="/images/common/button_close.png" /></div>
                    </AlarmLayerPopupItem>
                    <AlarmLayerPopupItem>
                        <AlarmCheck>
                            <div className="alarmCheckline"></div>
                        </AlarmCheck>
                        <div>
                            <div>MON</div>
                            <div>03.28</div>
                        </div>
                        <div></div>
                        <div className="">
                            상담이 등록되었습니다.
                            상담이 등록되었습니다.
                        </div>
                        <div><img className="pointer" src="/images/common/button_close.png" /></div>
                    </AlarmLayerPopupItem>
                    <AlarmLayerPopupItem>
                        <AlarmCheck>
                            <div className="alarmCheckline last"></div>
                        </AlarmCheck>
                        <div>
                            <div>MON</div>
                            <div>03.28</div>
                        </div>
                        <div></div>
                        <div className="">
                            상담이 등록되었습니다.
                            상담이 등록되었습니다.
                        </div>
                        <div><img className="pointer" src="/images/common/button_close.png" /></div>
                    </AlarmLayerPopupItem>
                </AlarmLayerPopupBody>
            </AlarmLayerPopupArea>

            <ProfileLayerPopupArea className="profileLayerPopupArea">
                <ProfileLayerPopupHeader className="profileLayerPopupCloseArea">
                    <div>
                        <img className="profileInnerProfile" src="/images/header/manage_header_profile_inner_profile.png" />
                        <span>내 정보</span>
                    </div>
                    <img className="buttonClose pointer" src="/images/common/button_close.png" />
                    <div className="profileInnerRocket">
                        <img className="profileInnerRocketImg pointer" src="/images/header/manage_header_profile_inner_rocket.png" />
                        <div className="profileInnerRocketEdit">
                            <img className="profileInnerRocketEditBtn pointer" src="/images/common/photo_icon.png" />
                        </div>
                    </div>
                </ProfileLayerPopupHeader>
                <ProfileLayerPopupBody>
                    <div className="profileStudentName">이주연</div>
                    <div className="profileStudentCode">
                        <div>수강생코드 : </div>
                        <div>YD021</div>
                    </div>
                </ProfileLayerPopupBody>
            </ProfileLayerPopupArea>
        </>
    )
}

export default Header;
