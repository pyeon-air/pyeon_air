import { LOGIN_USER } from "./type";
import { request } from "../axios/axios";

const USER_URL = "/member/post_login";

export function loginUser(dataToSubmit) {
    const data = request("get", USER_URL , dataToSubmit);
    return {
      type: LOGIN_USER,
      payload: data,
    };
  }