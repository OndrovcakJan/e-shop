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
            <div className="flex flex-col gap-6">levy</div>

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

              <hr className="border-gray-200" />
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </Cart> 
  );
};

export default Checkout;
