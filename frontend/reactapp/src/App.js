import React, { useState, useRef }  from 'react';

// 에러처리 목록
import NotFound from './pages/NotFound';

// 메인 및 로그인 페이지 목록
import Home from './pages/home/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import Mypage from './pages/Mypage';

// 운영진 페이지 목록
import Dashboard from './pages/Manage/Dashboard';
// 1. 출석관리
import AttendState from './pages/Manage/Attend/AttendState';
import QrManage from './pages/Manage/Attend/QrManage';
// 2. 수강생관리
import StudentManage from './pages/Manage/Student/StudentManage';
import AcademicAchieve from './pages/Manage/Student/AcademicAchieve';
import CompleteProcess from './pages/Manage/Student/CompleteProcess';
import StudentConsult from './pages/Manage/Student/StudentConsult';
// 3. 강의관리
import LiveLecture from './pages/Manage/Lecture/LiveLecture';
import RecordLecture from './pages/Manage/Lecture/RecordLecture';
import CreateLecture from './pages/Manage/Lecture/CreateLecture';

// 4. 학습자료
import LectureData from './pages/Manage/Learn/LectureData';
import Report from './pages/Manage/Learn/Report';
// import { UserContextProvider } from "./components/context"

// 수강진 페이지 목록
import DashboardStudent from './pages/Student/Dashboard';
// 1. 마이페이지
import Info from './pages/Student/Mypage/Info';
import AttendManage from './pages/Student/Mypage/AttendManage';
// 2. 강의수강
import EnterRoom from './pages/Student/Lecture/EnterRoom';
// 3. 학습자료
import Source from './pages/Student/LectureData/Source';
import ReportStudent from './pages/Student/LectureData/Report';
// 4. 학습안내
import Notice from './pages/Student/LectureInfo/Notice';
import Calendar from './pages/Student/LectureInfo/Calendar';
// 5. 문의
import LearnAndRun from './pages/Student/Qna/LearnAndRun';

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
                <Route path="/manage/lecture/createLecture"  element={ <CreateLecture />} />
              {/* 학습자료 */}
                <Route path="/manage/learn/lectureData"  element={ <LectureData />} />
                <Route path="/manage/learn/report"  element={ <Report />} />

          {/* 수강생 페이지 */}
            <Route path="/student/dashboard"  element={ <DashboardStudent />} />
              {/* 마이페이지 */}
                <Route path="/student/mypage/info"  element={ <Info />} />
                <Route path="/student/mypage/attendManage"  element={ <AttendManage />} />
              {/* 강의수강 */}
                <Route path="/student/lecture/enterRoom"  element={ <EnterRoom />} />
              {/* 학습자료 */}
                <Route path="/student/lectureData/source"  element={ <Source />} />
                <Route path="/student/lectureData/report"  element={ <ReportStudent />} />
              {/* 학습안내 */}
                <Route path="/student/lectureInfo/notice"  element={ <Notice />} />
                <Route path="/student/lectureInfo/calendar"  element={ <Calendar />} />
              {/* 문의 */}
                <Route path="/student/qna/learnAndRun"  element={ <LearnAndRun />} />
        </Routes>
        {/* </UserContextProvider> */}

</div>
  );
}

export default App;
