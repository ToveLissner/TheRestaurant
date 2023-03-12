import React from "react";
import { Booking } from "./pages/Bookingspage/Booking";

import "./App.css";
import { getRestaurant } from "./services/restaurantService";
import { Outlet } from "react-router-dom";

// createRestaurant();

function App() {
  return (
    <div>
      <main>
        <Booking />
      </main>
    </div>
  );
}

export default App;
