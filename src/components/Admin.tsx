import axios from "axios";
import { useEffect, useState } from "react";
import { IBookingFromDB } from "../models/IBookingsFromDB";
import { Wrapper } from "./styled/Wrappers";

// api-anrop som ska flyttas till service //

const getBookingsToAdmin = async (): Promise<IBookingFromDB[]> => {
    let response = await axios.get<IBookingFromDB[]>(
      "https://school-restaurant-api.azurewebsites.net/booking/restaurant/6409b9ec4e7f91245cbd6d91"
    );
  
    console.log(response.data);
  
    return response.data;
  };

  // radera OM EJ KLAR - måste fråga sebastian //

const removeBooking = async (): Promise<IBookingFromDB> => {
let response = await axios.delete("https://school-restaurant-api.azurewebsites.net/booking/delete/{booking._id}");

return response.data;
};

// koden //

export const Admin = ()=>{

    const [bookings, setBookings] = useState<IBookingFromDB[]>([])

    useEffect(()=> {
        const getData = async () => {
            let bookingsFromApi: IBookingFromDB[] = await getBookingsToAdmin();
            setBookings(bookingsFromApi);
        };

        if(bookings.length>0) 
        return;
        getData();
    });

    let bookingsFromDB:IBookingFromDB[]=bookings;

    let bookingsHtml = bookingsFromDB.map((booking)=>{

    return (
        <>
            <Wrapper>
                <p>{booking.date}</p> 
                <p>{booking.time}</p> 
                <p>{booking.numberOfGuests}</p>
                <p>{booking.customerId}</p>
                <p>{booking._id}</p>
                <button type="button" onClick={()=>{removeBooking()}}>radera</button>
            </Wrapper>
        </>
    )
    
    });

    return (
     <> 
        {bookingsHtml}
     </>   
    );

};