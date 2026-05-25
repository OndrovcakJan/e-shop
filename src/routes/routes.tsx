import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

export default router;
