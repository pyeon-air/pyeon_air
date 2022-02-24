import { LOGIN_USER } from "./type";
import { request } from "../axios/axios";

// const USER_URL = "/member/post_login";
const USER_URL = "../components/array.json";

export function loginUser(dataToSubmit) {
    const data = request("post", USER_URL , dataToSubmit);
    return {
      type: LOGIN_USER,
      payload: data,
    };
  }