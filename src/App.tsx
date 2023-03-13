import React from 'react';
import logo from './logo.svg';
import './App.css';
import { handleClick } from './services/restaurantService';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Booking } from './components/Booking';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet></Outlet>
      </main>
      <button onClick={handleClick}>Test</button>
      <Booking/>
    </div>
  )
}

export default App;
