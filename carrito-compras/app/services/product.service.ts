import { api } from "./api";

import { Product } from "../types/product";

export const getProducts = async (limit: number): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/products?limit=${limit}`);
  return response.data;
};
