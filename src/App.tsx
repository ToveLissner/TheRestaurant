import React from "react";

import "./App.css";
import { handleClick } from "./services/restaurantService";
import { Outlet } from "react-router-dom";
import { Header } from './components/Header';
import { Booking } from './components/Booking';
import { Admin } from "./components/Admin";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet></Outlet>
      </main>
      <button onClick={handleClick}>Test</button>
      <Booking/>
      <Admin/>
    </div>
  )
}

export default App;
