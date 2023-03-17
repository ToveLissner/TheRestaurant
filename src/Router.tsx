import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Admin } from "./components/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pages/Contact",
    element: <Contact />,
  },
  {
    path: "/pages/Admin",
    element: <Admin />,
  },
]);
