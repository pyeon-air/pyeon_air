import React ,{ useState, useEffect } from 'react';
// import { authUserApi } from '../api/UserApi';
import axios from 'axios';
import './LoginComponent.css';
import { useNavigate } from "react-router-dom";
import styled,{css} from 'styled-components';

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

const AdminLogin = ({ isLoggedInHandle}) => {
  const URL = 'http://0.0.0.0:8000/management/member_api'
  const history = useNavigate();
  const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [reId, setReId] = useState('');
    // const [message, setMessage] = useState({status:'', msg:''});
          const onChangeHandler = (e) => {
            const value = e.target.value
            if (e.target.name === 'account') setId(value)
            if (e.target.name === 'password') setPw(value)
            if (e.target.name === 'rememberId') setReId(value)
          }
       
        
          const  onClickLogin = async () => {
   
            // localStorage.getItem('username')
            // console.log('click login')
            // console.log('ID : ', id)
            // console.log('PW : ', pw)
          const respon =  await  axios.get("/management/member_api", {
                headers: {
                    'Content-Type': 'application/json',
                  },
   
            })
            .then(res => {
                console.log(res)
                if(res.data.email === id){
                    alert("로그인에 성공하셨습니다")
                    isLoggedInHandle(true)
                }else{
                    alert("로그인에 실패하였습니다")
                    isLoggedInHandle(false)
                }
            })
            .catch()
        }
    
          return (
              <>
  

            {/* <h3>편항 로그인</h3> */}
      
              {      <InputId 
                     type="text" 
                     id="account" 
                     name="account"
                    onChange={onChangeHandler}
                    placeholder="아이디를 입력하세요."
                     value={id}
                   /> }
      
                <InputPw 
                    type="password" 
                     id="password" 
                    name="password" 
                     onChange={onChangeHandler}
                    value={pw}
                   />
             <div className='user_block'>
                     <div className='search_user'>
                       <span>
                         아이디 / 비밀번호 찾기
                       </span>
                     </div>
                     <div className='checkbox remember_id'>
                       <input 
                        type="checkbox"
                        id='adminrememberId'
                        value={reId}
                        className='checkbox2'
                       />
              <label htmlFor='adminrememberId'>
                       <span>아이디 저장</span>
                       </label>
                     </div>
   </div>
              <button type='button' onClick={onClickLogin}>로그인</button>

       </>
          )
    };


export default AdminLogin;


