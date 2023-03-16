import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IBookingFromDB } from "../models/IBookingsFromDB";
import { AdminWrapper } from "./styled/Wrappers";
import { AdminButton } from "./styled/Buttons";
import { AdminButtonDiv } from "./styled/Div";
import { getBookings, getBookingsFromDB, removeBooking, updateBooking } from "../services/restaurantService";
import { IBookingUpdate } from "../models/IBookingUpdate";

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingFromDB[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<IBookingFromDB>({
    date: "",
    time: "",
    numberOfGuests: 0,
    customerId: "",
    restaurantId: "",
    _id: "",
  });
  const [selectedBookingToSave, setSelectedBookingToSave] = useState<IBookingUpdate>({
    id: "",
    restaurantId: "",
    date: "",
    time: "",
    numberOfGuests: 0,
    customerId: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let bookingsFromApi: IBookingFromDB[] = await getBookingsFromDB();
      setBookings(bookingsFromApi);
    };
    if (bookings.length > 0) return;
    getData();
  });

  // ÄNDRA I BOKNINGEN //
  function changeBooking(booking: IBookingFromDB) {
    setSelectedBooking(booking);
    console.log(booking);
    setShowModal(true);
  };

  async function saveBooking(e:FormEvent) {
    e.preventDefault();
    setSelectedBooking(selectedBooking);
    let selectedBookingToSave: IBookingUpdate = {
      date: selectedBooking.date,
      time: selectedBooking.time,
      numberOfGuests: selectedBooking.numberOfGuests,
      customerId: selectedBooking.customerId,
      restaurantId: selectedBooking.restaurantId,
      id: selectedBooking._id,
    }
    if(selectedBooking) {
      console.log(selectedBookingToSave);
      await updateBooking(selectedBookingToSave);
        setShowModal(false);
        console.log(selectedBooking);
        updatedBooking();
    }
  }

  const updatedBooking = async () => {
    let bookingsFromDB: IBookingFromDB[] = await getBookingsFromDB();
    setBookings(bookingsFromDB);
  }

  let bookingsFromDB: IBookingFromDB[] = bookings;

  let bookingsHtml = bookingsFromDB.map((booking, index: number) => {
    return (
      <AdminWrapper key={index}>
        <p>Datum: {booking.date}</p>
        <p>Tid: {booking.time}</p>
        <p>Antal gäster: {booking.numberOfGuests}</p>
        <p>KundID: {booking.customerId}</p>
        <p>BokningsID: {booking._id}</p>
        <AdminButtonDiv>
          <AdminButton bgcolor="#5E5DF0"type="button" onClick={() => changeBooking(booking)}
            >Redigera</AdminButton>

            <button type="button" >Ändra</button> 

          <AdminButton
            bgcolor="red"
            type="button"
            onClick={async () => {
              let removed = await removeBooking(booking);
              if(removed) {
              let copy = [...bookings];
              copy.splice(index, 1);
              setBookings(copy);
              }
            }}
          >
            Radera
          </AdminButton>
        </AdminButtonDiv>
      </AdminWrapper>
    );
  });

  function handleInputChanges(e:ChangeEvent<HTMLInputElement>){
    setSelectedBooking({...selectedBooking, [e.target.name]: e.target.value});
  };

  function handleSelectChanges(e:ChangeEvent<HTMLSelectElement>){
    setSelectedBooking({...selectedBooking, [e.target.name]: e.target.value});
  };

  let modalHtml = (<div>
    <form >
      <input value={selectedBooking?.customerId } />
      <input value={selectedBooking?.date} onChange={handleInputChanges} name="date" />
      <input value={selectedBooking?.numberOfGuests} onChange={handleInputChanges} name="numberOfGuests" />
      <select onChange={handleSelectChanges} name="time" value={selectedBooking?.time }>
        <option>18:00</option>
        <option>21:00</option>
      </select> 
      <button onClick={saveBooking}>Spara</button>
    </form>
  </div>);

  return (<>
    {showModal ? modalHtml : <></>}
  {bookingsHtml}</>);
};
