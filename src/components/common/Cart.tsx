import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import clsx from "clsx";

export default function Cart({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      <div className={clsx("h-screen w-110 bg-amber-300 fixed top-10.75 transition-all duration-300", {"right-0": isOpen,"-right-120": !isOpen})}></div>
    </CartContext.Provider>
  );
}
