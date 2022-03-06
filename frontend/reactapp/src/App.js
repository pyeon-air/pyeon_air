import React, { useState, useRef }  from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import Mypage from './pages/Mypage';
// import { UserContextProvider } from "./components/context"

// 큰재우 테스트
// import Slider_header from './pages/Slider_header';
// import JqTest from './components/jqTest';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from './components/Logout';
import {getCookie, setCookie ,removeCookie} from './components/Cookie';




function App() {
  const [isLogin , setIsLogin] = useState(getCookie("refresh_token"));
  const [loading , setLoading] = useState(false);
  
  return (
    <div>
  
        {/* <Nav /> */}
      {/* <UserContextProvider> */}
        <Logout/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<Login/>} />
        {/* <Route path="/slider"  element={<Slider/>} />
        <Route path="/jqTest"  element={<JqTest/>} /> */}
        <Route path="/Mypage"  element={ <Mypage />} />
        <Route path="/NotFound"  element={ <NotFound />} />
        </Routes>
        {/* </UserContextProvider> */}

</div>
  );
}

export default App;
