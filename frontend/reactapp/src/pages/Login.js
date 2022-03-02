import React ,{useEffect, useState} from 'react';
import UserLogin from '../components/UserLogin'
import AdminLogin from '../components/AdminLogin'
import './Login.css'
import styled,{css} from 'styled-components'
// import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import './resset.css'
import Loader from '../components/Loader';


const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  width:300px;
height:48px;
  display:flex;
margin:20px auto;
`;

const Tab = styled.div`
text-align: center;
  border:none;
  padding:14px;
  outline: none;
  border-radious
  cursor: pointer;
  width: 50%;
  position: relative;
  background-color: #fff;
  color:${props =>(props.active ? "#14856b" :"#888888")};
  border-bottom: ${props => (props.active ? "2px solid #0cb48d" : "2px solid #ddd")};
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;
`;
const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

const Login = ({isLogin}) => {
  const [loading, setLoading] = useState(false)
  // const [index, setIndex] = useState(0);
  const mangerBtn = true;
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    }
    const [active, setActive] = useState(0);
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(true)
      },1000)
    },[])

 
          return (
            (loading ? 
               <>
              <div className="login_bg">
              <div className="login_wrap">
                  <form  style={{ display: "flex", flexDirection: "column" }}
                onSubmit={onSubmitHandler}>
                    <div className='login_board'>
                    <div className="login_header">
                      <span>로그인
                          <p>   
                          </p>
                      </span>
                      <div className="main_logo">
                  </div>
                  </div>
                  
                  <div className='login_content'>
                  <Tabs>
              <Tab onClick={handleClick} active={active === 0} id={0}>
                수강생
              </Tab>
      
              <Tab onClick={handleClick} active={active === 1} id={1}>
                운영진
              </Tab>
            </Tabs>
            <>
              <Content active={active === 0}>
              <UserLogin />
              </Content>
              <Content active={active === 1}>
              <AdminLogin />
              </Content>
            </>
                  {/* <Tabs selectedIndex={index} onSelect={index => setIndex(index)}>
                  <TabList>
                <Tab>
                  <span>수강생</span>
                </Tab>
                <Tab>
                  <span>운영진</span>
                </Tab>
              </TabList>
              <TabPanel>
              <UserLogin/>
              </TabPanel>
              <TabPanel>
              <AdminLogin />
              </TabPanel>
              </Tabs> */}
                    {/* <TabMenu>
                    <TabLi className='student' >
                      <TabMenuInput />
                      <TabLabel  name ='student' onClick={tabHaneld}>수강생</TabLabel>
                  </TabLi>
                  <TabLi className='manager'>
                    <TabMenuInput />
                    <TabLabel   name ='manager' onClick={tabHaneld}>운영진</TabLabel>
                  </TabLi>
                </TabMenu>  */}
                {/* {tabValue == 'student' ?    <UserLogin/> : <AdminLogin /> } */}
                    </div>
                    </div>
                  </form>    
                </div>
              </div>
                    </> :
                     <Loader type="spin" color="RGB 값"/>
            )
          )
    };


export default Login;


