import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

export const postData = async (url, data) => {
  try {
    const response = await API.post(url, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Network Error";
  }
};



export const apiCall = async (url, method = "GET", data = null, headers = {}) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
    });
    return response.data; 
  } catch (error) {
    throw error.response?.data || error.message; 
  }
};