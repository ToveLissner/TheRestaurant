import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getBookings, getRestaurant } from './services/restaurantService';
import { Outlet } from 'react-router-dom';
import { Calendar } from './components/Calendar';
import { Guests } from './components/Guests';
import { FirstFormSelections } from './components/FirstFormSelections';
import { DinnerWrapper } from './components/DinnerWrapper';
import { ConfirmBookingWrapper } from './components/ConfirmBookingWrapper';
import { AddBooking } from './components/AddBooking';
import { IBooking } from './models/IBooking';
import { setDate, format } from 'date-fns';
import { CustomerInputWrapper } from './components/CustomerInputWrapper';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [bookedTables, setBookedTables] = useState(0);
  const[isToggled, setIsToggled] = useState(false); 
  const [dinnerTime, setDinnerTime] = useState(""); 
  const [booking, setBooking] = useState<IBooking>({
    restaurantId: "6409b9ec4e7f91245cbd6d91",
    date: "",
    time: "",
    numberOfGuests: 0,
    customer: {
        name: "",
        lastname: "",
        email: "",
        phone: ""
    }
  });

  const handleClick = () => {
    getBookings();
  }

  const guestHandleClick = (index: number) =>{
    // props.onChange(index);
    // let guests = [...numberOfGuests];
    // let selection = guests[guests.findIndex( (g) => g === index)];

    setBooking( {...booking, numberOfGuests: index});
}

const handleClickDate = async (index: number) => {
  const date = setDate(currentDate, index);
  //props.onChange(date);
  //console.log(date);

  const correctDateFormat = format(date, 'yyyy-MM-dd');

  console.log(correctDateFormat);

  let bookingsFromApi: IBooking[] = await getBookings();
                  
  let listOfBookingsForSpecificDay = [
      {
          dinnerTime: "18:00",
          tables: 0,
      },
      {
          dinnerTime: "21:00",
          tables: 0,
      }
  ];

  bookingsFromApi.map( (booking) => {

      if(correctDateFormat === booking.date){

        if((booking.time === "18:00") && listOfBookingsForSpecificDay[0].tables <15){
            listOfBookingsForSpecificDay[0].tables++;
            //console.log("finns att boka den "+booking.time+ " kl 18:00");
            //showTimeSlots();
        } 

        if((booking.time === "21:00") && listOfBookingsForSpecificDay[0].tables <15){
            listOfBookingsForSpecificDay[1].tables++;
            //console.log("finns att boka den "+booking.time+ " kl 21:00");
        }
      }

      console.log(listOfBookingsForSpecificDay[0].dinnerTime +" " +listOfBookingsForSpecificDay[0].tables +`\n`
                  +listOfBookingsForSpecificDay[1].dinnerTime +" " +listOfBookingsForSpecificDay[1].tables);
  });
  
  setBooking( {...booking, date: correctDateFormat} );

}

const handleTimeClick = (diningTime: string) => {
  
  setBooking({...booking, time: diningTime})
}


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    
  setBooking({...booking, [e.target.name]: e.target.value});
}

  return (
    <div>
      <main>
          <Guests selected={false} guestValue={numberOfGuests} onChange={setNumberOfGuests} onClick={guestHandleClick}></Guests>
          <Calendar isToggled={false} selected={false} bookedTables={bookedTables} value={currentDate} onChange={setCurrentDate} onClick={handleClickDate}></Calendar>
          <div>{JSON.stringify(booking)}</div>
          <DinnerWrapper time={dinnerTime} onClick={handleTimeClick}></DinnerWrapper>
          <ConfirmBookingWrapper></ConfirmBookingWrapper>

          <CustomerInputWrapper></CustomerInputWrapper>
          <button onClick={handleClick}>Hämta Bokningar</button>

          <FirstFormSelections dateValue={currentDate} guests={numberOfGuests}></FirstFormSelections>
      </main>
    </div>  
  );
}

export default App;