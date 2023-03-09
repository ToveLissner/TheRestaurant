import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home />, index: true },
      { path: "/contact", element: <Contact /> },
      { path: "/booking", element: <Booking /> },
    ],
  },
]);
