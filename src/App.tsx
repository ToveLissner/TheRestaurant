import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getBookings, getRestaurant } from './services/restaurantService';
import { Outlet } from 'react-router-dom';
import { Calendar } from './components/Calendar';
import { CalendarSelected } from './components/styled/CalendarSelected';
import { H3 } from './components/styled/H3';
import { format } from 'date-fns';


function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleClick = () => {
    getBookings();
  }

  return (
    <div>
      <main>
          <Calendar value={currentDate} onChange={setCurrentDate}></Calendar>

          <button onClick={handleClick}>Hämta Bokningar</button>
      </main>
    </div>
  );
}

export default App;