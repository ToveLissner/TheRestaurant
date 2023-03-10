import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getRestaurant, handleClick } from './services/restaurantService';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

// createRestaurant();

function App() {
  return (
    <div>
      <main>
        <Outlet></Outlet>
      </main>
      <button onClick={handleClick}>Test</button>
    </div>
  );
}

export default App;
