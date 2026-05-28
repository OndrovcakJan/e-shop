import { Truck } from "lucide-react";
import Cart from "../components/common/Cart";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Checkout = () => {
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
            </div>
            {/* pravý sloupec */}
            <div className="sticky top-24">pravy</div>
          </div>
        </div>
        <Footer />
      </div>
    </Cart>
  );
};

export default Checkout;
