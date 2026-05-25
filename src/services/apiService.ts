const API_BASE_URL = "https://fakestoreapi.com";

async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}

export type Product = {
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
