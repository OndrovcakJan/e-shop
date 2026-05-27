import type { Product } from "./apiService";

export interface CartObject extends Product {
  amount: number;
}

export function getCart(): CartObject[] | null {
  const cartData = localStorage.getItem("cart");
  if (!cartData) {
    return null;
  }
  const cart = JSON.parse(cartData) as CartObject[];
  return cart;
}

export function addProduct(product: CartObject) {
  const cartData = localStorage.getItem("cart");
  if (!cartData) {
    const json = JSON.stringify(product);
    localStorage.setItem("cart", json);
    return;
  }
  const cart = JSON.parse(cartData) as CartObject[];
  const itemIndex = cart.findIndex(
    (item: CartObject) => item.id === product.id,
  );
  if (itemIndex === -1) {
    cart.push(product);
    const json = JSON.stringify(cart);
    localStorage.setItem("cart", json);
    return;
  }
  const existingAmount = cart[itemIndex].amount;
  const finalAmount = existingAmount + product.amount;
  cart[itemIndex].amount = finalAmount;
  const json = JSON.stringify(cart);
  localStorage.setItem("cart", json);
}
