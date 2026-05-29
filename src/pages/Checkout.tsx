import { CreditCard, Truck, Archive } from "lucide-react";
import Cart from "../components/common/Cart";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { useState } from "react";
import { getCart, type CartObject } from "../services/Cart";

const Checkout = () => {
  const [shipping, setShipping] = useState<"standard" | "express">("standard");
  const [cartItems] = useState<CartObject[]>(() => getCart() ?? []);
  const shippingCost = shipping === "standard" ? 0 : 15;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );
  const total = subtotal + shippingCost;

  return (
    <Cart>
      <div>
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-12 mt-10">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-[60%_40%] gap-8 items-start">
            {/* levý sloupec */}
            <div className="flex flex-col gap-6">
              <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
                <h2 className="font-bold text-lg flex items-center gap-2">
                  <Truck className="text-indigo-600" size={20} />
                  Shipping Information
                </h2>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Email Address</label>
                  <input
                    placeholder="you@example.com"
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Full Name</label>
                  <input
                    placeholder="John Smith"
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Address</label>
                  <input
                    placeholder="Your address"
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-600">City</label>
                    <input
                      placeholder="Your city"
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-600">ZIP Code</label>
                    <input
                      placeholder="Your ZIP code"
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
                <h2 className="font-bold text-lg flex items-center gap-2">
                  <Archive className="text-indigo-600" size={20} />
                  Shipping Method
                </h2>
                <label
                  className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer ${shipping === "standard" ? "border-indigo-500 bg-indigo-50" : "border-gray-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shipping === "standard"}
                      onChange={() => setShipping("standard")}
                      className="accent-indigo-600"
                    />
                    <div>
                      <p className="font-medium text-sm">Standard Shipping</p>
                      <p className="text-xs text-gray-500">3-5 business days</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">Free</span>
                </label>
                <label
                  className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer ${shipping === "express" ? "border-indigo-500 bg-indigo-50" : "border-gray-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shipping === "express"}
                      onChange={() => setShipping("express")}
                      className="accent-indigo-600"
                    />
                    <div>
                      <p className="font-medium text-sm">Express Shipping</p>
                      <p className="text-xs text-gray-500">1-2 business days</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">$15.00</span>
                </label>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
                <h2 className="font-bold text-lg flex items-center gap-2">
                  <CreditCard className="text-indigo-600" size={20} />
                  Payment Details
                </h2>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Name on Card</label>
                  <input
                    placeholder="John Doe"
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Card Number</label>
                  <input
                    placeholder="0000 0000 0000 0000"
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-600">Expiry Date</label>
                    <input
                      placeholder="MM/YY"
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-600">CVV</label>
                    <input
                      placeholder="123"
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* pravý sloupec */}
            <div className="sticky top-24 border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              
              <h2 className="font-bold text-lg">Order Summary</h2>
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-contain rounded-lg bg-gray-100 p-1"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium capitalize">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        Count: {item.amount}
                      </p>
                    </div>
                    <span className="text-sm font-medium">
                      {" "}
                      ${(item.price * item.amount).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Cart>
  );
};

export default Checkout;
