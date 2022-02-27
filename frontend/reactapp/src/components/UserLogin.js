import React ,{ useState, useEffect} from 'react';
// import { useDispatch } from "react-redux";
import axios from 'axios';
import './LoginComponent.css';
import { refreshToken } from './refreshToken';
import { useNavigate } from 'react-router';
import styled,{css} from 'styled-components';
import { loginUser } from "../_action/userAction";
import {getCookie, setCookie} from '../components/Cookie';
import Cookies from 'universal-cookie';
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
  const [isLoggedIn ,setIsLoggedIn] = useState(false)
  const history = useNavigate();
  const [cookies ,setCookies] = useState(getCookie("refresh_token"))
  useEffect(() =>{
      if(cookies){
        setIsLoggedIn(true);
        history('/Mypage')
     }else{
 
     }
  },[cookies])


  // const dispatch = useDispatch();  redux 할때 사용
  const URL = 'http://localhost:8000/member/post_login'
  const [users , setUsers] = useState('')


    const [account ,setAccount] = useState({
      username:"",
      password:"",
    });
    const [reId, setReId] = useState('');
          const onChangeHandler = (e) => {
            setAccount({
              ...account,
              [e.target.name]: e.target.value,
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
          }).catch(error=>{
            console.log(error.response)
            setIsLoggedIn(false)
          })
          
        }

          return (
            <>
              {      <InputId 
                     type="text" 
                     username="username" 
                     name="username"
                    onChange={onChangeHandler}
                    placeholder="아이디를 입력하세요."
                     
                   /> }
      
                <InputPw 
                    type="password" 
                     id="password" 
                    name="password" 
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
                        // value={reId}
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


