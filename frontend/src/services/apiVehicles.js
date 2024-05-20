import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

axios.defaults.withCredentials = true;

export async function getVehicles() {
  const response = await axios.get(`${BASE_API_URL}/vehicles`);

  return response.data.data;
}

export async function getVehicle(id) {
  const response = await axios.get(`${BASE_API_URL}/vehicles/${id}`);

  return response.data.data;
}

export async function createVehicle(data) {
  const response = await axios.post(`${BASE_API_URL}/vehicles`, data);

  return response.data.data;
}

export async function deleteVehicle(id) {
  const response = await axios.delete(`${BASE_API_URL}/vehicles/${id}`);

  return response.data;
}
