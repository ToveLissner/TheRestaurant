import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IBookingFromDB } from "../models/IBookingsFromDB";
import { AdminWrapper } from "./styled/Wrappers";
import { AdminButton } from "./styled/Buttons";
import { AdminButtonDiv } from "./styled/Div";
import { createBooking, getBookingsFromDB, removeBooking, updateBooking } from "../services/restaurantService";
import { IBookingUpdate } from "../models/IBookingUpdate";
import { IBooking } from "../models/IBooking";

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
  const [showForm, setShowForm] = useState(false);

  const [newBooking, setNewBooking] = useState<IBooking>({
    restaurantId: "6409b9ec4e7f91245cbd6d91",
    date: "2023-04-06",
    time: "18:00",
    numberOfGuests: 1,
    customer: {
      name: "Admin",
      lastname: "",
      email: "",
      phone: ""
    }
  });

  useEffect(() => {
    const getData = async () => {
      let bookingsFromApi: IBookingFromDB[] = await getBookingsFromDB();
      setBookings(bookingsFromApi);
    };
    if (bookings.length > 0) return;
    getData();
  });

// ÄNDRA EN BOKNING //

  function changeBooking(booking: IBookingFromDB) {
    setSelectedBooking(booking);
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
      await updateBooking(selectedBookingToSave);
        setShowModal(false);
        updatedBooking();
    }
  }

  const updatedBooking = async () => {
    let bookingsFromDB: IBookingFromDB[] = await getBookingsFromDB();
    setBookings(bookingsFromDB);
  }

  function handleInputChanges(e:ChangeEvent<HTMLInputElement>){
    setSelectedBooking({...selectedBooking, [e.target.name]: e.target.value});
  };

  function handleSelectChanges(e:ChangeEvent<HTMLSelectElement>){
    setSelectedBooking({...selectedBooking, [e.target.name]: e.target.value});
  };

  let modalHtml = (<div>
    <form >
      {/* <input value={selectedBooking?.customerId } /> */}
      <input value={selectedBooking?.date} onChange={handleInputChanges} name="date" />
      <select onChange={handleSelectChanges} name="numberOfGuests" value={selectedBooking?.numberOfGuests }>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select> 
      <select onChange={handleSelectChanges} name="time" value={selectedBooking?.time }>
        <option>18:00</option>
        <option>21:00</option>
      </select> 
      <button onClick={saveBooking}>Spara ändringar för {selectedBooking?._id}</button>
    </form>
  </div>);

// LÄGG TILL BOKNING //

function handleNewBooking(newBooking: IBooking){
  setNewBooking(newBooking);
  setShowForm(true);
};

async function saveNewBooking(e:FormEvent) {
  e.preventDefault();
  setNewBooking(newBooking);
  if(newBooking) {
    await createBooking(newBooking);
      setShowForm(false);
      updatedBooking();
  }
};

function handleNewInputs(e:ChangeEvent<HTMLInputElement>){
  setNewBooking({...newBooking, [e.target.name]: e.target.value});
};

function handleNewSelect(e:ChangeEvent<HTMLSelectElement>){
  setNewBooking({...newBooking, [e.target.name]: e.target.value});
};

let newBookingmodal = (
  <div>
    <form >
      {/* <input value={newBooking.restaurantId} /> */}
      <input value={newBooking.date} onChange={handleNewInputs} name="date" />
      <select onChange={handleNewSelect} name="time" value={newBooking.time }>
        <option>18:00</option>
        <option>21:00</option>
      </select> 
      <select onChange={handleNewSelect} name="numberOfGuests" value={newBooking.numberOfGuests }>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select> 
      {/* <input value={newBooking.customer.name} onChange={handleNewInputs} name="firstname" /> 
      <input value={newBooking.customer.lastname} onChange={handleNewInputs} name="lastname" />
      <input value={newBooking.customer.email} onChange={handleNewInputs} name="email" />
      <input value={newBooking.customer.phone} onChange={handleNewInputs} name="phone" />  */}
      <button onClick={saveNewBooking}>Lägg till ny bokning</button>
    </form>
  </div>
);

// LOOPAR IGENOM ALLA BOKNINGAR //

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

  return (<>
  <button type="button" onClick={() => handleNewBooking(newBooking)}>Lägg till bokning</button> 
    {showModal ? modalHtml : <></>}
    {showForm ? newBookingmodal : <></>}
  {bookingsHtml}</>);
};
