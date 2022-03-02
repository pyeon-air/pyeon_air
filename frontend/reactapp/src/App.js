import React, { useState, useRef }  from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import Mypage from './pages/Mypage';
// import { UserContextProvider } from "./components/context"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from './components/Logout';
import {getCookie, setCookie ,removeCookie} from './components/Cookie';



function App() {
  const [isLogin , setIsLogin] = useState(getCookie("refresh_token"));
  const [loading , setLoading] = useState(false);
  
  return (
    <div>
        <Nav />
        <Logout/>
      {/* <UserContextProvider> */}
        <Routes>
          <Route element={isLogin ? <Mypage/> : <Login />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/Mypage"  element={ <Mypage />} />
        <Route path="/NotFound"  element={ <NotFound />} />
        </Routes>
        {/* </UserContextProvider> */}
        
</div>
  );
}

export default App;
