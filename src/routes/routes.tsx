import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/:category?",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path:"/checkout",
    element: <Checkout />
  }
]);

export default router;
