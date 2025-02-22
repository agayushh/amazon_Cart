import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.log("unable to fetch data due to", error);
    return [];
  }
};
