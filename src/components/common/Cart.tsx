import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import clsx from "clsx";
import { ArrowBigRight } from "lucide-react";

export default function Cart({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      <div className={clsx("h-screen w-110 bg-background fixed top-10.75 transition-all duration-300", { "right-0": isOpen, "-right-120": !isOpen })}>
        <div className="flex flex-col justify-center mt-30">
          <h1 className="font-bold text-2xl">Your Cart</h1>
          <div>
            <p>Subtotal</p>
            <p>Shipping</p>
            <h2>Total</h2>
            <button className="flex bg-green-800 hover:bg-green-900 transition-colors duration-200 rounded-lg text-white font-semibold px-10 py-2 ">Checkout now<ArrowBigRight /></button>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}
