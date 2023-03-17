import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import { getBookings, getRestaurant } from './services/restaurantService';
import { Outlet } from 'react-router-dom';
import { Calendar } from './components/Calendar';
import { Guests } from './components/Guests';
import { listOfGuests } from "./consts/guests";
import { FirstFormSelections } from './components/FirstFormSelections';
import { DinnerWrapper } from './components/DinnerWrapper';
import { ConfirmBookingWrapper } from './components/ConfirmBookingWrapper';
import { IBooking } from './models/IBooking';
import { setDate, format } from 'date-fns';
import { CustomerInputWrapper } from './components/CustomerInputWrapper';
import { NextFormButtonWrapper } from './components/NextFormButtonWrapper';
import { IBookedTables } from './models/IBookedTables';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [bookedTables, setBookedTables] = useState<IBookedTables>({
    firstTimeSlot: {
      dinnerTime: "", 
      tables: 0
    },
    secondTimeSlot: {
      dinnerTime: "", 
      tables: 0
    }
  });
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
    let guests = [...listOfGuests];
    let selection = guests[guests.findIndex( (g) => g === index)];

    console.log(index);

    setBooking( {...booking, numberOfGuests: index});
}

const getSelectedCell = (index: number) => {

}

interface IListOfBookings {
  dinnerTime: string;
  tables: number;
}

let listOfBookingsForSpecificDay: IListOfBookings[] = [];

const handleClickDate = async (index: number) => {
  const date = setDate(currentDate, index);
  //props.onChange(date);
  //console.log(index);

  const correctDateFormat = format(date, 'yyyy-MM-dd');

  // console.log(correctDateFormat);

  // console.log(isSelected);

  //setIsSelected(!isSelected);

  let bookingsFromApi: IBooking[] = await getBookings();
                  
  listOfBookingsForSpecificDay = [
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

        console.log("Antal bokade bord: ");
        if((booking.time === "21:00") && listOfBookingsForSpecificDay[0].tables <15){
            listOfBookingsForSpecificDay[1].tables++;
            //console.log("finns att boka den "+booking.time+ " kl 21:00");
        }

      }

      // console.log(listOfBookingsForSpecificDay[0].dinnerTime +" " +listOfBookingsForSpecificDay[0].tables +`\n`
      //             +listOfBookingsForSpecificDay[1].dinnerTime +" " +listOfBookingsForSpecificDay[1].tables);
      
      //console. log("tables book for this date: " +tablesBookedForCurrentDate);
  });
  
  setBooking( {...booking, date: correctDateFormat} );

  const tablesBookedForCurrentDate = listOfBookingsForSpecificDay[0].dinnerTime+" "+listOfBookingsForSpecificDay[0].tables +`\n`+listOfBookingsForSpecificDay[1].dinnerTime +" " +listOfBookingsForSpecificDay[1].tables;

  //console.log(listOfBookingsForSpecificDay);
  //const updatedBookedTables = setBookedTables(listOfBookingsForSpecificDay);

setBookedTables(
  {...bookedTables, firstTimeSlot: 
    {
      ...bookedTables.firstTimeSlot, dinnerTime: listOfBookingsForSpecificDay[0].dinnerTime, tables: listOfBookingsForSpecificDay[0].tables
    }
  }
  );

  console.log(bookedTables);

  //displayAvailableTimeSlot(updatedBookedTables);
}

const displayAvailableTimeSlot = (listOfTablesBooked: IListOfBookings[]) => {
  console.log(JSON.stringify(listOfTablesBooked[0].dinnerTime));
  console.log(JSON.stringify(listOfTablesBooked[0].tables));
}

const handleTimeClick = (diningTime: string) => {
  
  setBooking({...booking, time: diningTime})
}

const handleCustomerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  setBooking({...booking, customer: {...booking.customer, [e.target.name]: e.target.value }});
}

const confirmBookingClick = () => {
  console.log("skicka bokning");
}

  return (
    <div>
      <main>
          <Guests selected={isSelected} guestValue={numberOfGuests} onChange={setNumberOfGuests} onClick={guestHandleClick}></Guests>
          <Calendar isToggled={false} selected={isSelected} bookedTables={bookedTables} value={currentDate} onChange={setCurrentDate} onClick={handleClickDate}></Calendar>
          <div>{JSON.stringify(booking)}</div>
          <DinnerWrapper time={dinnerTime} onClick={handleTimeClick}></DinnerWrapper>
          {/* <ConfirmBookingWrapper></ConfirmBookingWrapper> */}
          <NextFormButtonWrapper></NextFormButtonWrapper>

          <CustomerInputWrapper name={booking.customer.name} lastname={booking.customer.lastname} email={booking.customer.email} phone={booking.customer.phone} onChange={handleCustomerInputChange}></CustomerInputWrapper>

          <ConfirmBookingWrapper onClick={confirmBookingClick}></ConfirmBookingWrapper>
      </main>
    </div>  
  );
}

export default App;