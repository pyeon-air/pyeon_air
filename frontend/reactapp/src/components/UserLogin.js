import React ,{ useState, useEffect ,useRef} from 'react';
// import { useDispatch } from "react-redux";
import axios from 'axios';
import './LoginComponent.css';
import { refreshToken } from './refreshToken';
import { useNavigate } from 'react-router';
import styled,{css} from 'styled-components';
import { loginUser } from "../_action/userAction";
import {getCookie, setCookie ,removeCookie} from '../components/Cookie';
import Cookies from 'universal-cookie';
const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
const cookies = new Cookies();
axios.defaults.withCredentials = true;


const InputId = styled.input`
background-color: #fff;
width: 100%;
height: 50px;
padding: 0 20px;
border: 1px solid #dfdfdf;
outline: 0;
border-radius: 25px;   
 margin-top:20px;
`;
const InputPw = styled.input`
background-color: #fff;
width: 100%;
height: 50px;
padding: 0 20px;
border: 1px solid #dfdfdf;
outline: 0;
border-radius: 25px;   
margin:20px 0;
`;
const UserLogin = () => {
  const history = useNavigate();
  const [isLoggedIn ,setIsLoggedIn] = useState(false)
  const [cookies ,setCookies] = useState(getCookie("refresh_token"))
  const [reId ,setReId] = useState(getCookie("user_id"))
  const [inputChecked, setInputChecked] = useState(false)
  const [account ,setAccount] = useState({
    username:"",
    password:"",
    rememberId : false,
    token:""
  });
  const userInput = useRef(); // username input 

 
  useEffect(() =>{
    console.log(cookies)
    if(reId){
      userInput.current.value = reId
      setAccount({username:reId})
      // setInputChecked(true)
  
  }else{

  }
  },[])
  useEffect(() =>{
      if(cookies){
        setIsLoggedIn(true);
         history('/Mypage')
     }else{
      history('/login')
     }
  },[])
  // const dispatch = useDispatch();  redux 할때 사용
  const URL = 'http://localhost:8000/member/post_login'
          const onRememberHandler = (e) =>{
            setInputChecked(!inputChecked)
          }
          const onChangeHandler = (e) =>{
               const { value, name } = e.target; 
               setAccount({
                ...account,
                [name]:value,
              })
          }

          const  onClickLogin = async () => {
            const response = await axios.post(URL,{
              username: account.username,
              password: account.password
              // account   -----> bad request 400 
          }).then((res)=>{
            setIsLoggedIn(true)
            const { token } = res.data;
            setCookie('refresh_token', token, { sameSite: 'strict',path  : '/' } );
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            history('/Mypage')
            if(inputChecked){
              if(reId){
                getCookie('user_id')
              }else{
                setCookie('user_id' ,res.data.user,{} );
              }
            }else{
              setInputChecked(false)
              removeCookie("user_id")
            }
          }).catch(error=>{
            console.log(error.response)
            setIsLoggedIn(false)
          })
        }
          return (
            <>
                   <InputId 
                     type="text" 
                     username="username" 
                     name="username"
                    onChange={onChangeHandler}
                    placeholder="아이디를 입력하세요."
                    ref={userInput}         
                   /> 
                <InputPw 
                    type="password" 
                     id="password" 
                    name="password" 
                    placeholder="비밀번호를 입력하세요."
                     onChange={onChangeHandler}
                
                   />
             <div className='user_block'>
                     <div className='search_user'>
                       <span>
                         아이디 / 비밀번호 찾기
                       </span>
                     </div>
                     <div className='remember_id checkbox'>
                       <input 
                         className='checkbox2'
                        type="checkbox"
                        id='rememberId'
                        name='rememberId'
                        checked={inputChecked}  
                        onChange={onRememberHandler}
                       />
                       <label htmlFor='rememberId'>
                       <span>아이디 저장</span>
                       </label>
                     </div>
                   </div>
              <button type='button' onClick={onClickLogin}>로그인</button>
       </>
          )
    };


export default UserLogin;


