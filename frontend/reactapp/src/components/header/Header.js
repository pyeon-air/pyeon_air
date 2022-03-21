import React from 'react'
import styled,{css} from 'styled-components';
import '../../font.css'
import {useEffect, useState} from 'react';
import $, { isFunction } from "jquery"

const HeaderWrap = styled.div`
background-color: #ffffff;
border-radius: 40px;
width: calc(1200px - 200px);
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

`;
    

const Header = (props) => {
    
    // const [pathname, setPathname] = useState();

    var url = window.location.pathname;
    var menuText;
    
    if( url.indexOf('dashboard') > -1 ) menuText = "대시보드";
    else if( url.indexOf('qrManage') > -1 ) menuText = "QR관리";
    // TODO : 입퇴실인원 현황 추가필요
    // else if( url.indexOf('qrManage') > -1 ) menuText = "QR관리";
    else if( url.indexOf('attendState') > -1 ) menuText = "출석확인";
    else if( url.indexOf('studentManage') > -1 ) menuText = "입교생관리카드";
    else if( url.indexOf('academicAchieve') > -1 ) menuText = "학습성취도";
    else if( url.indexOf('completeProcess') > -1 ) menuText = "수료처리";
    else if( url.indexOf('studentConsult') > -1 ) menuText = "수강생 상담";
    else if( url.indexOf('liveLecture') > -1 ) menuText = "실시간 강의";
    else if( url.indexOf('recordLecture') > -1 ) menuText = "녹화 강의";
    else if( url.indexOf('createLecture') > -1 ) menuText = "강의 개설";
    else if( url.indexOf('lectureData') > -1 ) menuText = "강의자료";
    else if( url.indexOf('report') > -1 ) menuText = "과제";
    
    // setPathname( menuText );
    
    useEffect(()=>{
        $("#menuText").text( menuText );
    }, []);

    console.log( url );

    return (
        <>
        <HeaderWrap>
            <HeaderContainer>
                <HeaderTitle id="menuText">
                </HeaderTitle>
                <HeaderIcon>
                    <IconLI>
                        알림
                    </IconLI>
                    <IconLI>
                        내정보
                    </IconLI>
                </HeaderIcon>
            </HeaderContainer>
            </HeaderWrap>
        </>
    )
}

export default Header;
