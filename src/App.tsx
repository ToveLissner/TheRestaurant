import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

import "./App.css";
import { Header } from './components/Header';
//import { Booking } from './components/Booking';
import { Admin } from "./components/Admin";
import Booking from './Booking';

function App() {

  return (
    <div>
      <Header/>
      <main>
        <Outlet></Outlet>
      </main>
      <Admin/>
    </div>
  )
}

export default App;