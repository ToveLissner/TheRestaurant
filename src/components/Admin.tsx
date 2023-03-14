import { useState } from "react";
import { IBooking } from "../models/IBooking";
import { getBookings } from "../services/restaurantService";

export const Admin = ()=>{

    let bookingsFromDB = getBookings();

    const [bookings, setBookings] = useState<IBooking[]>([{restaurantId: "6409b9ec4e7f91245cbd6d91",
    date: "",
    time: "",
    numberOfGuests: 0,
    customer: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
      }  
}])

// const getBookingsFromDB =()=>{
//     let newBookings = {
//         ...bookings,
//         bookings: bookingsFromDB,
//     }
//     getBookingsFromDB();
//     setBookings(newBookings);
// }

    return (
     <> 
     </>   
    );

};