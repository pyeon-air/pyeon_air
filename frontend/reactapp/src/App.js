import React, { useState, useRef }  from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import Mypage from './pages/Mypage';
// import { UserContextProvider } from "./components/context"

import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [isLogin , setIsLogin] = useState(false);
  const [loading , setLoading] = useState(false);


  
  return (
    <div>
        <Nav />
      {/* <UserContextProvider> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" isLogin={isLogin} element={<Login/>} />
        <Route path="/Mypage"  element={ <Mypage />} />
        <Route path="/NotFound"  element={ <NotFound />} />
        </Routes>
        {/* </UserContextProvider> */}
        
</div>
  );
}

export default App;
