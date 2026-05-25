import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/:category?",
    element: <HomePage />,
  },  
]);

export default router;
