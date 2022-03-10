import React, { useState, useRef }  from 'react';

// 에러처리 목록
import NotFound from './pages/NotFound';

// 메인 및 로그인 페이지 목록
import Home from './pages/home/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import Mypage from './pages/Mypage';

// 운영진 페이지 목록
import Dashboard from './pages/manage/Dashboard';
import AttendState from './pages/manage/Attend/AttendState';
import QrManage from './pages/manage/Attend/QrManage';
// 1. 수강생관리
import StudentManage from './pages/manage/Student/StudentManage';
import AcademicAchieve from './pages/manage/Student/AcademicAchieve';
import CompleteProcess from './pages/manage/Student/CompleteProcess';
import StudentConsult from './pages/manage/Student/StudentConsult';
// 2. 강의관리
import LiveLecture from './pages/manage/Lecture/LiveLecture';
import RecordLecture from './pages/manage/Lecture/RecordLecture';
// 3. 학습자료
import LectureData from './pages/manage/Learn/LectureData';
import Report from './pages/manage/Learn/Report';
// import { UserContextProvider } from "./components/context"

// 큰재우 테스트
// import Slider_header from './pages/Slider_header';
// import JqTest from './components/jqTest';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from './components/Logout';
import {getCookie, setCookie ,removeCookie} from '../src/components/Cookie';

function App() {
  const [isLogin , setIsLogin] = useState(getCookie("refresh_token"));
  const [loading , setLoading] = useState(false);
  
  return (
    <div>
  
        {/* <Nav /> */}
      {/* <UserContextProvider> */}
        {/* <Logout/> */}
        <Routes>
          
          {/* 에러처리 */}
          <Route path="/NotFound"  element={ <NotFound />} />
          {/* 메인 */}
          <Route path="/" element={<Home />} />

          {/* 로그인, 수강생/운영진 */}
          <Route path="/login"  element={<Login/>} />

          <Route path="/Mypage"  element={ <Mypage />} />
          {/* 운영진 페이지 */}
            <Route path="/manage/dashboard"  element={ <Dashboard />} />
              {/* 출석관리 */}
                <Route path="/manage/attend/qrManage"  element={ <QrManage />} />
                {/* TODO : 입퇴실인원 현황 소스코드 입력필요 */}
                <Route path="/manage/attend/attendState"  element={ <AttendState />} />
              {/* 수강생관리 */}
                <Route path="/manage/student/studentManage"  element={ <StudentManage />} />
                <Route path="/manage/student/academicAchieve"  element={ <AcademicAchieve />} />
                <Route path="/manage/student/completeProcess"  element={ <CompleteProcess />} />
                <Route path="/manage/student/studentConsult"  element={ <StudentConsult />} />
              {/* 강의관리 */}
                <Route path="/manage/lecture/liveLecture"  element={ <LiveLecture />} />
                <Route path="/manage/lecture/recordLecture"  element={ <RecordLecture />} />
              {/* 학습자료 */}
                <Route path="/manage/learn/lectureData"  element={ <LectureData />} />
                <Route path="/manage/learn/report"  element={ <Report />} />

        </Routes>
        {/* </UserContextProvider> */}

</div>
  );
}

export default App;
