import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const getProducts = async () => {
  return axios.get(API_URL);
};

export const addProduct = async (product) => {
  return axios.post(API_URL, product);
};
