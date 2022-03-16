import { getCookie, setCookie } from "../components/Cookie";

const getLocalRefreshToken = () => {
    const user =getCookie('refresh_token');
    return user?.refresh_token;
  };
  const getLocalAccessToken = () => {
    const user =getCookie('token');
    return user?.token;
  };
  const updateLocalAccessToken = (token) => {
    let user =getCookie('token');
    user.accessToken = token;
    // localStorage.setItem("user", JSON.stringify(user));
    setCookie("token", token)
  };
//   const getUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
//   };
  const setUser = (token) => {
 
    // localStorage.setItem("user", JSON.stringify(user));
    setCookie("token", token)
  };
//   const removeUser = () => {
//     localStorage.removeItem("user");
//   };
  const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    // getUser,
    setUser,
    // removeUser,
  };
  export default TokenService;