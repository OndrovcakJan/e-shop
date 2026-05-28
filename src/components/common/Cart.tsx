import { useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import clsx from "clsx";
import { ArrowRight, X } from "lucide-react";
import { getCart, type CartObject } from "../../services/Cart";
import CartItem from "../features/CartItem";

export default function Cart({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<CartObject[] | null>(() => getCart());

  useEffect(() => {
    const loadCart = () => {
      setCart(getCart());
    }
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  });

  let totalPrice = cart?.reduce((sum, val) => sum + val.price * val.amount, 0);
  const roundedPrice = totalPrice?.toFixed(2);
  totalPrice = Number(roundedPrice);

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      <div
        className={clsx(
          "h-[calc(100vh-3.0625rem)] w-110 bg-background fixed top-12.25 transition-all duration-300 shadow-2xl shadow-background",
          { "right-0": isOpen, "-right-120": !isOpen },
        )}
      >
        <div className="flex flex-col w-full h-full pl-12 pt-10">
          <div className="flex w-full items-center mb-10">
            <div>
              <h1 className="font-bold text-2xl">Your Cart</h1>
              <p>{cart?.length} items ready for checkout</p>
            </div>
            <X
              className="ml-35 hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          <div className="flex flex-col overflow-auto gap-5">
            {cart?.map((item: CartObject) => {
              return (
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  amount={item.amount}
                />
              );
            })}
          </div>

          <div className="mt-auto pt-5 mb-3 w-[90%]">
            <span className="block w-full h-px bg-gray-200 mb-3"></span>
            <div className="flex w-full">
              <p>Subtotal</p>
              <p className="ml-auto">${totalPrice}</p>
            </div>
            <div className="flex w-full mt-2">
              <p>Shipping</p>
              <p className="ml-auto">Free</p>
            </div>
            <span className="block w-full h-px bg-gray-200 mt-5"></span>
            <div className="flex w-full mt-5 mb-3">
              <h2 className="font-bold text-xl">Total</h2>
              <h2 className="ml-auto font-bold text-xl">${totalPrice}</h2>
            </div>
            <button className="flex bg-green-800 hover:bg-green-900 transition-colors duration-200 rounded-lg text-white font-semibold px-10 py-3.5 w-full justify-center items-center">
              Checkout now
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}
