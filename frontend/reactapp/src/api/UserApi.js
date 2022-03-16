import axios from 'axios'

// default url
axios.defaults.baseURL = 'http://localhost:8000'
// back과 front에서 다른 도메인 주소를 갖고 있는 경우 쿠키가 전송이 되지 않는다.
// 이럴때 요청/응답 헤더를 적절히 설정해주면 다른 도메인이더라도 쿠키가 전송되는데
// 일단, front에서는 withCredentials를 설정해주어야한다.
// axios.defaults.withCredentials = true;


// 회원가입 통신
// export const signUpApi = async (userInfo) => {

//   // axios 요청
//   try {
//     const response = await axios.post(
//       '/accounts/signin',
//       userInfo,
//     )
//     console.log('회원가입 결과', response.status)
//     const response2 = await authUserApi({username: userInfo.username, password: userInfo.password})

//     if (response2) {
//       return ({
//         status: response2.status,
//         msg: response2.msg
//       })
//     }
    
//     // 회원가입 시 응답 받고
//     // const token = response.data.accessToken

//     // localStorage.setItem('token', token)
//     // localStorage.setItem('username', userInfo.account)

//   }
//   catch ({response}) {
//     return {
//       status: response.data.code,
//       msg: response.data.message,
//     }
//   }

// }


// 로그인 통신
export const authUserApi = async (userInfo) => {
  console.log('로그인중')
  // axios 요청
  try {
    const response = await axios.get(
      'http://localhost:8000/api/account',
      userInfo,
      
      {
        // headers: {
        //   'Content-Type': 'application/json',
        // }
      }
      )
    console.log('로그인',response)

    // 응답으로 토큰을 받아오고
    const token = response.data.access
    const refresh_token = response.data.refresh

    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    // 이렇게 하면 굳이 accessToken을 localStorage나 cookie에 저장하지 않아도 된다.
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    // 받아온 토큰, 그리고 인자로 받아온 유저 정보 중 account를 
    // localStorage에 저장
    localStorage.setItem('username', userInfo.username)
    localStorage.setItem('refresh_token', refresh_token)
    localStorage.setItem('token',token)

    

    // 로그인 성공 시 리턴(응답 번호와 메시지)
    return {
      status: response.status,
      msg: 'Login Successed!',
    }

  } catch ({response}) {
    // 로그인 실패 시 리턴(응답 번호와 메시지)
    return {
      status: response.data.code,
      msg: response.data.message,
    }
  }
}


//로그아웃 통신
export const logOutApi = async () => {
  try {
    const response = await axios.get(
      '/auth/logout'
    )
    console.log(response)
  }
  catch({response}) {

  }
}