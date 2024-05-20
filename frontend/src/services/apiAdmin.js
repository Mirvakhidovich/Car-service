import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

axios.defaults.withCredentials = true;

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/admin/users`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getVehicles = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/admin/vehicles`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getRecords = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/admin/records`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteRecord = async (id) => {
  try {
    const response = await axios.delete(`${BASE_API_URL}/admin/records/${id}`);
  } catch (error) {
    return error.response.data;
  }
};

export const getSummary = async () => {
  try {
    const users = await axios.get(`${BASE_API_URL}/admin/users`);
    const vehicles = await axios.get(`${BASE_API_URL}/admin/vehicles`);
    const records = await axios.get(`${BASE_API_URL}/admin/records`);

    const summaryOfUsers = users.data.data.map((user) => {
      const userVehicles = vehicles.data.data.filter(
        (vehicle) => vehicle.user === user.id,
      );
      const userRecords = records.data.data.filter(
        (record) => record.user === user.id,
      );

      return {
        ...user,
        vehiclesCount: userVehicles.length,
        recordsCount: userRecords.length,
      };
    });

    return summaryOfUsers;
  } catch (error) {
    return error.response.data;
  }
};
