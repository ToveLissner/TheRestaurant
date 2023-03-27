import React, { ChangeEvent, useState } from "react";
import {
	createBooking,
	getBookings,
} from "../services/restaurantService";
import { Calendar } from "../components/Calendar";
import { Guests } from "../components/Guests";
import { DinnerWrapper } from '../components/DinnerWrapper';
import { IBooking } from '../models/IBooking';
import { setDate, format } from 'date-fns';
import { CustomerInputWrapper } from '../components/CustomerInputWrapper';
import { IBookedTables } from '../models/IBookedTables';
import { Seperator } from '../components/styled/Seperator';
import { H2 } from '../components/styled/H2';
import { TestContext, testOfContext } from '../context/BookingContext';
import { CalendarParagraph } from '../components/CalendarParagraph';
import { CalendarParagraphStyled } from '../components/styled/CalendarParagraphStyled';
import { BookingWrapper } from '../components/styled/BookingWrapper';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isVisibleGuest, setIsVisibleGuest] = useState(false);
  const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
  const [isVisibleTime, setIsVisibleTime] = useState(false);
  const [guestIsSelected, setGuestIsSelected] = useState(false);
  const [timeIsSelected, setTimeIsSelected] = useState(false);
  const [calendarIsSelected, setCalendarIsSelected] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(false);
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

  const guestHandleClick = (index: number) =>{
    setGuestIsSelected(true);
    hideSectionGuest();
    setBooking( {...booking, numberOfGuests: index});
}

const hideSectionGuest = () => {
  setIsVisibleGuest(true);
}

const displaySectionGuest = () => {
  setIsVisibleGuest(false);
}


let listOfBookingsForSpecificDay: IBookedTables;

const handleClickDate = async (index: number) => {
  const date = setDate(currentDate, index);

  hideSectionCalendar();

  setCalendarIsSelected(true);

  setShowModal(true);

		const correctDateFormat = format(date, "yyyy-MM-dd");

setSelectedDate(correctDateFormat);

		let bookingsFromApi: IBooking[] = await getBookings();

		listOfBookingsForSpecificDay = {
			firstTimeSlot: {
				dinnerTime: "18:00",
				tables: 0,
			},
			secondTimeSlot: {
				dinnerTime: "21:00",
				tables: 0,
			},
		};

    setFullBookedEarly(false);
    setFullBookedLate(false);

    bookingsFromApi.map( (booking) => {

      if(correctDateFormat === booking.date){  
        

        if(booking.time === "18:00") {
          listOfBookingsForSpecificDay.firstTimeSlot.tables++;

          if((booking.time === "18:00") && listOfBookingsForSpecificDay.firstTimeSlot.tables >6){
            setFullBookedEarly(true);
          } 
        }

        if(booking.time === "21:00") {
        listOfBookingsForSpecificDay.secondTimeSlot.tables++;

          if((booking.time === "21:00") && listOfBookingsForSpecificDay.secondTimeSlot.tables >6){
            setFullBookedLate(true);
          }
        }

      }

      return setBookedTables(listOfBookingsForSpecificDay);
  });

  setBooking( {...booking, date: correctDateFormat} );

  const clickDate = date;

  return clickDate;
}

const hideSectionCalendar = () => {
  setIsVisibleCalendar(true);
}

const displaySectionCalendar = () => {
  setIsVisibleCalendar(false);
}

const displaySectionTime = () => {
  setIsVisibleTime(false);
}

	const handleTimeClick = (diningTime: string) => {
		setBooking({ ...booking, time: diningTime });
    setTimeIsSelected(true);
	};

	const handleCustomerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setBooking({
			...booking,
			customer: { ...booking.customer, [e.target.name]: e.target.value },
		});
	};

const customInputIsValid = () => {
  setConfirmedBooking(true);
}

const messageForCompleteBooked = () => {
  if(confirmedBooking) {
      alert("Din bokning är nu godkänd, Välkommen!");
  } else {
    alert("Dina kontaktuppgifter är inte korrekt ifyllda");
  }
}

const confirmBookingClick = () => {
  if( (guestIsSelected && calendarIsSelected && timeIsSelected) ) {
    createBooking(booking);
    messageForCompleteBooked();
  }  else {
    alert("Bokningsformuläret är inte korrekt ifyllt");
  }
};

  return (
    <BookingWrapper>
          <H2>Boka Bord</H2>
          <CalendarParagraphStyled>
            <CalendarParagraph/>
          </CalendarParagraphStyled>
          <Seperator></Seperator>
          <Guests guestValue={booking.numberOfGuests} visibleState={isVisibleGuest} displaySection={displaySectionGuest} onChange={setNumberOfGuests} onClick={guestHandleClick} ></Guests>
          <Seperator></Seperator>
          <Calendar isToggled={false} bookedTables={bookedTables} visibleState={isVisibleCalendar} value={currentDate} date={selectedDate} displaySection={displaySectionCalendar} onChange={setCurrentDate} onClick={handleClickDate}></Calendar>
          <Seperator></Seperator>
          {/* <div>{JSON.stringify(booking)}</div> */}
          {showModal ?  
            <DinnerWrapper fullBookedEarly={fullBookedEarly} fullBookedLate={fullBookedLate} visibleState={isVisibleTime} displaySection={displaySectionTime} time={booking.time} onClick={handleTimeClick} ></DinnerWrapper>
            : <></>}

          <CustomerInputWrapper name={booking.customer.name} lastname={booking.customer.lastname} email={booking.customer.email} phone={booking.customer.phone} customInputIsValid={customInputIsValid} onChange={handleCustomerInputChange} onClick={confirmBookingClick}></CustomerInputWrapper>
    </BookingWrapper>  
  );

}

export default App;
