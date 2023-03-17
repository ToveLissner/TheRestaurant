import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import { createBooking, getBookings, getRestaurant } from '../services/restaurantService';
import { Outlet } from 'react-router-dom';
import { Calendar } from '../components/Calendar';
import { Guests } from '../components/Guests';
import { listOfGuests } from "../consts/guests";
import { FirstFormSelections } from '../components/FirstFormSelections';
import { DinnerWrapper } from '../components/DinnerWrapper';
import { ConfirmBookingWrapper } from '../components/ConfirmBookingWrapper';
import { IBooking } from '../models/IBooking';
import { setDate, format } from 'date-fns';
import { CustomerInputWrapper } from '../components/CustomerInputWrapper';
import { NextFormButtonWrapper } from '../components/NextFormButtonWrapper';
import { IBookedTables } from '../models/IBookedTables';


function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
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
  const [clickedSubmit, setClickedSubmit] = useState("false");
  const [fullBooked, setFullBooked] = useState(false);
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

  const toggleActive = () => {
    //setBtnState(btnState === !btnState);
    console.log("funka");
}

  const guestHandleClick = (index: number) =>{
    // props.onChange(index);
    let guests = [...listOfGuests];
    let selection = guests[guests.findIndex( (g) => g === index)];

    console.log(index);

    setBooking( {...booking, numberOfGuests: index});
}
let test: string | undefined;

const getSelectedCell = (index: number) => {

}

let listOfBookingsForSpecificDay: IBookedTables;

let funka: string;

const handleClickDate = async (index: number) => {
  const date = setDate(currentDate, index);
  //props.onChange(date);
  //console.log(date);

 const correctDateFormat = format(date, 'yyyy-MM-dd');

const funka = setSelectedDate(correctDateFormat); 


  // setIsSelected(!isSelected);

  let bookingsFromApi: IBooking[] = await getBookings();
                  
  listOfBookingsForSpecificDay = {
    firstTimeSlot: {
          dinnerTime: "18:00",
          tables: 0,
      },
      secondTimeSlot: {
          dinnerTime: "21:00",
          tables: 0,
      }
    };


    bookingsFromApi.map( (booking) => {

      if(correctDateFormat === booking.date){

        if((booking.time === "18:00") && listOfBookingsForSpecificDay.firstTimeSlot.tables <15){
            listOfBookingsForSpecificDay.firstTimeSlot.tables++;
            setFullBooked(fullBooked);
        } else if((booking.time === "18:00") && listOfBookingsForSpecificDay.firstTimeSlot.tables == 15){
          setFullBooked(!fullBooked);
        }

        if((booking.time === "21:00") && listOfBookingsForSpecificDay.secondTimeSlot.tables <15){
            listOfBookingsForSpecificDay.secondTimeSlot.tables++;
            return;
        }

      }

      console.log(correctDateFormat+":" +`\n`+listOfBookingsForSpecificDay.firstTimeSlot.dinnerTime +" " +listOfBookingsForSpecificDay.firstTimeSlot.tables +`\n`
                  +listOfBookingsForSpecificDay.secondTimeSlot.dinnerTime +" " +listOfBookingsForSpecificDay.secondTimeSlot.tables);

      setBookedTables(listOfBookingsForSpecificDay);
  });
  
  setBooking( {...booking, date: correctDateFormat} );

  //const tablesBookedForCurrentDate = listOfBookingsForSpecificDay.firstTimeSlot.dinnerTime+" "+listOfBookingsForSpecificDay.secondTimeSlot.tables +`\n`+listOfBookingsForSpecificDay[1].dinnerTime +" " +listOfBookingsForSpecificDay[1].tables;

  //console.log(listOfBookingsForSpecificDay);
  //const updatedBookedTables = setBookedTables(listOfBookingsForSpecificDay);

  //displayAvailableTimeSlot(updatedBookedTables);

  const clickDate = date;
  return clickDate;
}

const displayAvailableTimeSlot = (listOfTablesBooked: IBookedTables) => {
  console.log(JSON.stringify(listOfTablesBooked.firstTimeSlot.dinnerTime));
  console.log(JSON.stringify(listOfTablesBooked.secondTimeSlot.tables));
}

const handleTimeClick = (diningTime: string) => {
  
  setBooking({...booking, time: diningTime})
}

const handleCustomerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  setBooking({...booking, customer: {...booking.customer, [e.target.name]: e.target.value }});
}

const guestValidation = () => {
  const guestsNumbers = setNumberOfGuests(booking.numberOfGuests);
  
  if(booking.numberOfGuests <1){
    console.log("saknar gäster");
  }

  console.log(setNumberOfGuests(booking.numberOfGuests));

}


const confirmBookingClick = () => {
  guestValidation();
  createBooking(booking);
}

  return (
    <div>
      <main>
          <Guests guestValue={booking.numberOfGuests} onChange={setNumberOfGuests} onClick={guestHandleClick}></Guests>
          <Calendar isToggled={false} bookedTables={bookedTables} value={currentDate} onChange={setCurrentDate} onClick={handleClickDate}></Calendar>
          {/* <div>{date}</div> */}
          {/* <div>{JSON.stringify(booking)}</div> */}
          <DinnerWrapper onChange={setFullBooked} fullBooked={fullBooked} time={dinnerTime} onClick={handleTimeClick}></DinnerWrapper>
          {/* <ConfirmBookingWrapper></ConfirmBookingWrapper> */}
          {/* <NextFormButtonWrapper></NextFormButtonWrapper> */}

          <CustomerInputWrapper name={booking.customer.name} lastname={booking.customer.lastname} email={booking.customer.email} phone={booking.customer.phone} onChange={handleCustomerInputChange} onClick={confirmBookingClick}></CustomerInputWrapper>

          {/* <ConfirmBookingWrapper onClick={confirmBookingClick}></ConfirmBookingWrapper> */}
      </main>
    </div>  
  );

}

export default App;