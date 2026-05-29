import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 py-6 mt-18 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-primary font-extrabold text-2xl">
          VON
        </Link>
        <div className="flex items-center gap-8 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-black">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-black">
            Terms of Service
          </span>
          <span className="cursor-pointer hover:text-black">Shipping info</span>
          <Link to="/contact" className="text-indigo-600 hover:text-indigo-800">
            Contact Us
          </Link>
        </div>
        <span className="text-sm text-gray-500">
          © 2026 example. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
