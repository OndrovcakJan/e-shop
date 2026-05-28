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
            <div className="sticky top-24">pravy</div>
          </div>
        </div>
        <Footer />
      </div>
    </Cart> 
  );
};

export default Checkout;
