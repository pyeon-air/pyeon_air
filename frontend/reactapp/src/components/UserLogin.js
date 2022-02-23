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
  // const { setUser } = useUserContext();
  const URL = 'http://0.0.0.0:8000/management/member_api'
  const [users , setUsers] = useState('')
  const history = useNavigate();
  // const [id, setId] = useState('');
  //   const [pw, setPw] = useState('');

    const [account ,setAccount] = useState({
      id:"",
      password:"",
    });
    const [reId, setReId] = useState('');
          const onChangeHandler = (e) => {
            // const value = e.target.value
            // if (e.target.name === 'account') setId(value)
            // if (e.target.name === 'password') setPw(value)
            // if (e.target.name === 'rememberId') setReId(value)
            setAccount({
              ...account,
              [e.target.name]: e.target.value,
            })
          }
      //  const setIsLoggedIn =(bol)=>{
      //    isLoggedInHandle(bol)
      //   // isLoggedInHandle(bol)
      //   console.log("로그인에 성공")
      //  }
        
          const  onClickLogin = async () => {
            dispatch(loginUser(account)).then((res) =>{
              const {payload} = res
              const users = payload.find((data) => data)
              console.log(users.email)
              if(users.email == account.id && users.password == account.password){
                history("/Mypage");
              }else{
                alert("정보가 일치하지 않습니다.");
              }
            })
            console.log(account)
            // const respon = await axios.get(URL, account).then((res) => {
            //   const {data} = res
            //   console.log(data)
            //   var users = data.find((data) => data)
            //   console.log(users)
            //   const users1 = data.forEach(function(user){
            //   })
            //   try{
            //     if(users.email == account.id && users.password ==account.password){
            //       alert("로그인에 성공하였습니다.")
                  
            //     }else{
            //       alert("아이디가 맞지않습니다")
            //     }
            //   }
            //   catch(error){
            //     alert(error)
            //   }
            // })
        }
        // const onSubmitAccount = async () => {
        //   try {
        //     const user = await fetchLogin(account);
        //     console.log(user)
        //     //성공하면 해당 user 아이디 패스워드값 셋팅
        //     // setUser(user);
        //     //성공하면 해당 url로 이동(main페이지로)
        //     history.replace("/");
        //   } catch (error) {
      
        //       //실패하면 throw new Error("") 값 출력
        //     window.alert(error);
        //   }
        // };
          return (
              <>
              {      <InputId 
                     type="text" 
                     id="id" 
                     name="id"
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


