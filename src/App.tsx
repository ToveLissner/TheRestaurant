import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getRestaurant } from './services/restaurantService';
import { Outlet } from 'react-router-dom';
import { Calendar } from './components/Calendar';


function App() {
  const [currentDate, setCurrentDate] = useState(new Date("2022-02-01"));
  return (
    <div>
      <main>
          <Calendar value={currentDate} onChange={setCurrentDate}></Calendar>
      </main>
    </div>
  );
}

export default App;