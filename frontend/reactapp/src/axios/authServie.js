import { getCookie } from "../components/Cookie";
import api from "./api";
import TokenService from "./token.service";

const login = async (username, password) => {
  const response = await api
        .post("/member/api/token", {
            username,
            password
        });
    if (response.data.token) {
        TokenService.setUser(response.data);
    }
    return response.data;
};
// const logout = () => {
//   TokenService.removeUser();
// };
const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
return getCookie("token")
};
const AuthService = {
  login,
//   logout,
  getCurrentUser,
};
export default AuthService;