import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // 替换为后端API的实际URL

export const getFoodCalories = async (foodName) => {
  const response = await axios.get(`${API_URL}/food/${foodName}`);
  return response.data;
};
