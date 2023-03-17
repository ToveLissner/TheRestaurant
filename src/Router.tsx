import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Admin } from "./components/Admin";
import Booking from "./pages/Booking";

export const router = createBrowserRouter([
  {path: "/", element: <App/>, children: [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]}
]);
