import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const getRides = async () => {
  const response = await axios.get(`${API_URL}/rides`);
  return response.data;
};

export const getTransactions = async () => {
  const response = await axios.get(`${API_URL}/transactions`);
  return response.data;
};

export const getFeedbacks = async () => {
  const response = await axios.get(`${API_URL}/feedbacks`);
  return response.data;
};