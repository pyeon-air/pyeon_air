import React, { useState, useRef }  from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import Mypage from './pages/Mypage';
// import { UserContextProvider } from "./components/context"

import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [isLoggedIn , setIsLoggedIn ] = useState(false)
  const isLoggedInHandle = (loggedIn) =>{
    setIsLoggedIn(loggedIn)
    
  }

  return (
    <div>
        <Nav />
      {/* <UserContextProvider> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login isLoggedInHandle={isLoggedInHandle} />} />
        <Route path="/Mypage"  element={ <Mypage />} />
        </Routes>
        {/* </UserContextProvider> */}
        
</div>
  );
}

export default App;
