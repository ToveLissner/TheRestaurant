import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

import "./App.css";
import { Header } from "./components/Header";
//import { Booking } from "./components/Booking";
//import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styled/Theme";
//import Burger from "./components/styled/Burger/Burger";
//import Menu from "./components/styled/Menu/Menu";
import { Admin } from "./components/Admin";
import Booking from './Booking';

function App() {

  return (
    <div>
      <Header/>
      <main>
        <Outlet></Outlet>
      </main>
      <Booking/>
    </div>
  );
}

export default App;