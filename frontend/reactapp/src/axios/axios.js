import axios from "axios";

const DOMAIN = "http://localhost:8000";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = async (method, url, data) => {
  try { 
        const res = await axios({
            method,
            url: DOMAIN + url,
            data,
            headers: {
                "Content-type": "application/json",
              
              }
        });

        console.log(res)
        return res.data
    } catch (err) {
        return console.log(err);
    }
};


