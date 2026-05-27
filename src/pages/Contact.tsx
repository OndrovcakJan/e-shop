import { Mail, Phone } from "lucide-react";
import Cart from "../components/common/Cart";
import Header from "../components/common/Header";

const Contact = () => {
  return (
    <Cart>
      <Header />
      {/* Hero sekce */}
      <div>
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900">Contact us</h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We are here for you. If you have any questions about our products,
            your order or need advice, please do not hesitate to contact us.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center gap-3">
            <span className="text-3xl text-indigo-600">
              <Mail />
            </span>
            <h3 className="font-bold text-lg">E-mail</h3>
            <p className="text-sm text-gray-500">
              For general support and feedback.
            </p>
            <p className="text-indigo-600 text-sm font-medium">
              example@example.cz
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 flex flex-col items-center gap-3 text-center">
            <span className="text-3xl text-indigo-600">
              <Phone />
            </span>
            <h3 className="font-bold text-lg">Phone</h3>
            <p className="text-sm text-gray-500">Mon - Fri 9:00 - 17:00</p>
            <p className="text-indigo-600 text-sm font-medium">
              +420 123 456 789
            </p>
          </div>
        </div>
      </div>
    </Cart>
  );
};

export default Contact;
