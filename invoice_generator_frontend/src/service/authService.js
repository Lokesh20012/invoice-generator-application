import axios from "axios";


export const login = async (baseURL, credentials) => {
  return axios.post(`${baseURL}/auth/signin`, credentials);
};

export const signup = async (baseURL, userData) => {
  return axios.post(`${baseURL}/auth/signup`, userData);
};