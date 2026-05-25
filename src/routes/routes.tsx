import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/:category?",
    element: <HomePage />,
  },
]);

export default router;
