import axios from "axios";
import { useEffect, useState } from "react";
import { IBookingFromDB } from "../models/IBookingsFromDB";
import { AdminWrapper } from "./styled/Wrappers";
import { AdminButton } from "./styled/Buttons";
import { AdminButtonDiv } from "./styled/Div";

// api-anrop som ska flyttas till service //

const getBookingsToAdmin = async (): Promise<IBookingFromDB[]> => {
  let response = await axios.get<IBookingFromDB[]>(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/6409b9ec4e7f91245cbd6d91"
  );

  console.log(response.data);

  return response.data;
};

// radera // VILL DU VERKLIGEN RADERA? //

const removeBooking = async (booking: IBookingFromDB): Promise<boolean> => {
    let response = await axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${booking._id}`);

return response.status === 200;
};

// koden //

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingFromDB[]>([]);

  useEffect(() => {
    const getData = async () => {
      let bookingsFromApi: IBookingFromDB[] = await getBookingsToAdmin();
      setBookings(bookingsFromApi);
    };

    if (bookings.length > 0) return;
    getData();
  });

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
          <AdminButton bgcolor="#5E5DF0">Redigera</AdminButton>
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

  return <>{bookingsHtml}</>;
};
