import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const requestRide = async (destination: string) => {
  const response = await axios.post(`${API_URL}/rides`, { destination });
  return response.data;
};