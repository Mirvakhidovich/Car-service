import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

axios.defaults.withCredentials = true;

export async function getRecords() {
  const response = await axios.get(`${BASE_API_URL}/records`);

  return response.data.data;
}

export async function getRecord(id) {
  const response = await axios.get(`${BASE_API_URL}/records`);

  const record = response.data.data.find((record) => record.id === id);

  return record;
}

export async function createBooking(data) {
  const response = await axios.post(`${BASE_API_URL}/records`, data);

  return response.data;
}

export async function searchRecords(query) {
  const response = await axios.get(`${BASE_API_URL}/records`);

  const records = response.data.data.filter((record) =>
    record.serviceType.toLowerCase().includes(query.toLowerCase()),
  );

  return records;
}

export async function deleteRecord(id) {
  const response = await axios.delete(`${BASE_API_URL}/records/${id}`);

  return response.data;
}
