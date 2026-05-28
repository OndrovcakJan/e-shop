import axios, { type AxiosRequestConfig } from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

async function apiFetch<T>(
  endpoint: string,

  options?: AxiosRequestConfig,
): Promise<T> {
  const response = await axios(`${API_BASE_URL}${endpoint}`, options);
  return response.data;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const getProducts = () => apiFetch<Product[]>("/products");

export const getProduct = (id: number) => apiFetch<Product>(`/products/${id}`);

export const getProductsByCategory = (category: string) =>
  apiFetch<Product[]>(`/products/category/${encodeURIComponent(category)}`);
