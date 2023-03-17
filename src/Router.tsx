import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Booking from "./pages/Bookingspage/Booking";
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
