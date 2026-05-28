import { Mail, MapPin, Phone } from "lucide-react";
import Cart from "../components/common/Cart";
import Header from "../components/common/Header";
import { useState } from "react";

const [form, setForm] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const [error, setError] = useState<Record<string, string>>({});
const [submitted, setSubmitted] = useState(false);

const validate = () => {
  const newErrors: Record<string, string> = {};

  if (!form.name.trim()) newErrors.name = "Name is required";
  if (!form.email.trim()) newErrors.email = "Email is required";
  if (!form.email.includes("@")) newErrors.email = "Email is invalid";
  if (!form.subject.trim()) newErrors.subject = "Subject is required";
  if (!form.message.trim()) newErrors.message = "Message is required";

  return newErrors;
};

const handleSubmit = () => {
  const newErrors = validate();
  if (Object.keys(newErrors).length > 0) {
    setError(newErrors);
    return;
  }
  setSubmitted(true);
};

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

          <div className="border border-gray-200 rounded-xl p-8 flex flex-col items-center gap-3 text-center">
            <span className="text-3xl text-indigo-600">
              <MapPin />
            </span>
            <h3 className="font-bold text-lg">Address</h3>
            <p className="text-sm text-gray-500">Visit us at our office</p>
            <span className="text-indigo-800 text-sm font-semibold">
              Pařížská 1, 110 00 Praha 1
            </span>
          </div>
        </div>
        {/* contact formulář */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          <div className="border border-gray-200 rounded-xl p-8 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            
          </div>
        </div>
      </div>
    </Cart>
  );
};

export default Contact;
