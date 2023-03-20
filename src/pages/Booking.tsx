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
import { Seperator } from '../components/styled/Seperator';
import { H2 } from '../components/styled/H2';
import { TestContext, testOfContext } from '../context/BookingContext';
import { CalendarParagraph } from '../components/CalendarParagraph';
import { CalendarParagraphStyled } from '../components/styled/CalendarParagraphStyled';


function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");

  const [isVisibleGuest, setIsVisibleGuest] = useState(false);
  const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);

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
  //const [clickedSubmit, setClickedSubmit] = useState("false");
  const [fullBookedEarly, setFullBookedEarly] = useState(false);
  const [fullBookedLate, setFullBookedLate] = useState(false);
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

  <TestContext.Provider value={testOfContext}></TestContext.Provider>

  const handleClick = () => {
    getBookings();
  }

  const guestHandleClick = (index: number) =>{
    let guests = [...listOfGuests];
    let selection = guests[guests.findIndex( (g) => g === index)];

    hideSectionGuest();
    setBooking( {...booking, numberOfGuests: index});
}

const hideSectionGuest = () => {
  setIsVisibleGuest(true);
}

const displaySectionGuest = () => {
  setIsVisibleGuest(false);
}

const getSelectedCell = (index: number) => {

}

let listOfBookingsForSpecificDay: IBookedTables;

const handleClickDate = async (index: number) => {
  const date = setDate(currentDate, index);

  hideSectionCalendar();

 const correctDateFormat = format(date, 'yyyy-MM-dd');

setSelectedDate(correctDateFormat);

//const funka = setSelectedDate(correctDateFormat); 


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

        if((booking.time === "18:00") && listOfBookingsForSpecificDay.firstTimeSlot.tables <7){
          listOfBookingsForSpecificDay.firstTimeSlot.tables++;
          setFullBookedEarly(true);
        } 

        if((booking.time === "18:00") && listOfBookingsForSpecificDay.firstTimeSlot.tables >6){
          listOfBookingsForSpecificDay.firstTimeSlot.tables = listOfBookingsForSpecificDay.firstTimeSlot.tables;
          setFullBookedEarly(false);
        } 

        // if((booking.time === "21:00") && listOfBookingsForSpecificDay.secondTimeSlot.tables <7){
        //     listOfBookingsForSpecificDay.secondTimeSlot.tables++;
        //     setFullBookedLate(true)
        // } 
        // if((booking.time === "21:00") && listOfBookingsForSpecificDay.secondTimeSlot.tables >=7){
        //   setFullBookedLate(false);
        // }

      }

      console.log(listOfBookingsForSpecificDay.firstTimeSlot.tables);

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

const hideSectionCalendar = () => {
  setIsVisibleCalendar(true);
}

const displaySectionCalendar = () => {
  setIsVisibleCalendar(false);
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

console.log(fullBookedEarly);

  return (
    <div>
      <main>
          <H2>Boka Bord</H2>
          <CalendarParagraphStyled>
            <CalendarParagraph/>
          </CalendarParagraphStyled>
          <Seperator></Seperator>
          <Guests guestValue={booking.numberOfGuests} visibleState={isVisibleGuest} displaySection={displaySectionGuest} onChange={setNumberOfGuests} onClick={guestHandleClick} ></Guests>
          <Seperator></Seperator>
          <Calendar isToggled={false} bookedTables={bookedTables} visibleState={isVisibleCalendar} value={currentDate} date={selectedDate} displaySection={displaySectionCalendar} onChange={setCurrentDate} onClick={handleClickDate}></Calendar>
          <Seperator></Seperator>
          {/* <div>{date}</div> */}
          {/* <div>{JSON.stringify(booking)}</div> */}
          <DinnerWrapper fullBookedEarly={fullBookedEarly} time={dinnerTime} onClick={handleTimeClick} ></DinnerWrapper>
          {/* <ConfirmBookingWrapper></ConfirmBookingWrapper> */}
          {/* <NextFormButtonWrapper></NextFormButtonWrapper> */}

          <CustomerInputWrapper name={booking.customer.name} lastname={booking.customer.lastname} email={booking.customer.email} phone={booking.customer.phone} onChange={handleCustomerInputChange} onClick={confirmBookingClick}></CustomerInputWrapper>

          {/* <ConfirmBookingWrapper onClick={confirmBookingClick}></ConfirmBookingWrapper> */}
      </main>
    </div>  
  );

}

export default App;