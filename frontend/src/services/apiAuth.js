import toast from "react-hot-toast";
import { BASE_API_URL } from "../utils/constants";
import axios from "axios";

axios.defaults.withCredentials = true;

export const apiAuth = async ({ username, password }) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/users/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.response.data;
  }
};

export const apiLogout = async () => {
  const response = await axios.post(`${BASE_API_URL}/users/logout`);
  toast.success(response.data.message);
  return response.data;
};

export const apiCheckAuth = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/users/isLoggedIn`);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.response.data;
  }
};

export const apiRegister = async ({ username, password }) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/users/signup`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
