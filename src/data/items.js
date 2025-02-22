import axios from "axios";
import { z } from "zod";

const API_BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    const data = response.data;

    const validatedData = dataSchema.safeParse(data);

    if (validatedData.success === false) {
      console.log(validatedData.error.issues);
      return [];
    }

    return validatedData.data;
  } catch (error) {
    console.log("unable to fetch data due to", error);
    return [];
  }
};

const dataSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string().url(),
    rating: z.object({
      rate: z.number(),
      count: z.number(),
    }),
  })
);
