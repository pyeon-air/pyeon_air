import React, { useState} from 'react';
import { act } from 'react-dom/test-utils';
import './Nav.css'
import { Link } from 'react-router-dom';
import styled,{css} from 'styled-components'


const SidebarWrapUl = styled.ul `
  padding-top: 30px;
  padding-left: 0;
height: calc(100vh - 120px);


`;
const NavIcon = styled.img `
  margin-right: 15px;
`;
 
const SidebarSpan = styled.span`
  display:flex;
  align-items: center;
  height: 50px;
  font-size: 19px;
    transition:  background-color 0.2s;
    border-radius: 50px;
    padding-left: 38px;
  cursor: pointer;
line-height: 1;
&:hover{
  background-color: #0ca783;
}
`;




const Sidebar = () => {
  const [active, setActive] = useState({
    "attendance": true,
    "student": false,
    "lecture": false,
    "learning": false,
  });


  const handleClick = e => {
    let target = e.target.parentElement
      if(target.className  == 'active contents' || target.parentElement.className == 'active contents' ){
        setActive({
          [target.id] : false, 
          [target.parentElement.id] : false
        })

      }
      else if(target.className  == 'contents' || target.parentElement.className == 'contents'){
        setActive({  
          [target.id] : true,
          [target.parentElement.id] : true
        })
      }
  };

  return (
    (
       <>
      <div className='sidebar_wrap'>
        <img src='./images/gnb/nav_bg_icon.png' className="nav_bg_icon"/>
          <SidebarWrapUl>
            <li className={active["attendance"] ? "active contents" :"contents"} id="attendance">
              <SidebarSpan onClick={handleClick} >
                <NavIcon src='./images/gnb/attendance_icon.png' /> 
                  <span>출석관리</span>
                  </SidebarSpan>
                <ul className="sub">
                <li>- QR 관리</li>
                <li>- 입퇴실인원 현황</li>
                <li>- 출석확인</li>
                </ul>
            </li>
            <li  className={active["student"] ? "active contents" :"contents"}  id="student">
            <SidebarSpan onClick={handleClick}>
            <NavIcon src='./images/gnb/student_icon.png' /> 
                  <span>수강생관리</span>
            </SidebarSpan>
            <ul className="sub">
               <li>- 입교생 관리카드</li>
                <li>- 학습성취도</li>
                <li>- 수료처리</li>
                <li>- 수강생 상담</li>
              </ul>
            </li>
            <li  className={active["lecture"] ? "active contents" :"contents"}  id="lecture" >
              <SidebarSpan onClick={handleClick} > 
              <NavIcon src='./images/gnb/lecture_icon.png' /> 
                  <span>강의관리</span>
              </SidebarSpan>
              <ul className="sub">
               <li>- 실시간 강의</li>
                <li>- 녹화강의</li>
              </ul>
            </li>
            <li  className={active["learning"] ? "active contents" :"contents"}  id="learning" >
            <SidebarSpan onClick={handleClick} > 
              <NavIcon src='./images/gnb/learning_icon.png' /> 
                  <span>학습자료</span>
              </SidebarSpan>
             <ul className="sub">
               <li>- 강의자료</li>
                <li>- 과제</li>
              </ul>
            </li>
          </SidebarWrapUl>
      </div>
            </>
    )
  )
};

export default Sidebar;