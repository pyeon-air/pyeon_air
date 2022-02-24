import React ,{ useState, useEffect} from 'react';
// import { authUserApi } from '../api/UserApi';
import axios from 'axios';
import './LoginComponent.css';
import './context'
import { useNavigate } from 'react-router';
import styled,{css} from 'styled-components';
import { useDispatch } from "react-redux";
import { loginUser } from "../_action/userAction";
// import { UserProviderContext } from "./context";
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
  const dispatch = useDispatch();
  const URL = 'http://localhost:8000/member/post_login'
  const [users , setUsers] = useState('')
  const history = useNavigate();

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
            console.log(res)
            const { token } = res.data;
            cookies.set('refresh_token', token, { sameSite: 'strict' });
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


