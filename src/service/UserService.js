import axios from "axios";

const USER_URL = "http://54.163.17.203:8083/user";

export const login = (credentials) => {
  const params = {
    username: credentials.username,
    password: credentials.password,
  };
  console.log(params);
  return axios.get(USER_URL + "/login", { params });
};

export const signup = (userInfo) => {
  // const params = {
  //     name:userInfo.name,
  //     password:userInfo.password,
  //     email:userInfo.email,
  //     role:userInfo.role
  // }

  return axios.post(USER_URL + "/addUser", userInfo);
};
