import { useEffect, useState } from "react";
import { IBookingFromDB } from "../models/IBookingsFromDB";
import { AdminWrapper } from "./styled/Wrappers";
import { AdminButton } from "./styled/Buttons";
import { AdminButtonDiv } from "./styled/Div";
import { getBookingsFromDB, removeBooking, updateBooking } from "../services/restaurantService";

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingFromDB[]>([]);

  useEffect(() => {
    const getData = async () => {
      let bookingsFromApi: IBookingFromDB[] = await getBookingsFromDB();
      setBookings(bookingsFromApi);
    };

    if (bookings.length > 0) return;
    getData();
  });

  // ändra bokning //

  function changeBooking(booking: IBookingFromDB) {
    console.log();

  };

                      // async () => {
            //   let changed = await updateBooking(booking);
            //   if(changed!==booking.index) {
            //   let changedBookingList = [...bookings];
            //     changedBookingList.push;
            //   setBookings(changedBookingList);
            //   }
            // }}

  // //

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
          <AdminButton bgcolor="#5E5DF0"type="button"
            >Redigera</AdminButton>

            {/* <button type="button" onClick={changeBooking(booking)}>Ändra</button> */}


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
