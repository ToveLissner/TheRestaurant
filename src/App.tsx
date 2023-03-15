import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

import Booking from './Booking';

function App() {

  return (
    <div>
      <Booking></Booking>
    </div>  
  );
}

export default App;