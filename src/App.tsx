import React from "react";

import "./App.css";
import { getRestaurant } from "./services/restaurantService";
import { Outlet } from "react-router-dom";

// createRestaurant();

function App() {
  return (
    <div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
