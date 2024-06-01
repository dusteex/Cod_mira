import { IAuthForm } from "@/types/user.types";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

// const register = (username, email, password) => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

const signIn = (data:IAuthForm) => {

  return new Promise(res=>setTimeout(()=>res({data:{userToken:'token',role: data.role}}),500))
  // return axios
  //   .post(API_URL + "signin", {
  //     username,
  //     password,
  //   })
  //   .then((response) => {
  //     if (response.data.username) {
  //       localStorage.setItem("user", JSON.stringify(response.data));
  //     }

  //     return response.data;
  //   });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return {
    token: JSON.parse(localStorage.getItem("userToken") || ""),
    info: JSON.parse(localStorage.getItem("userInfo") || ""),
  } 
};

export const AuthService = {
  signIn,
  logout,
  getCurrentUser,
}
