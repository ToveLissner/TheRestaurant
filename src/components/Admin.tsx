import { useEffect, useState } from "react";
import { IBooking } from "../models/IBooking";
import { getBookings } from "../services/restaurantService";

export const Admin = ()=>{

    const [bookings, setBookings] = useState<IBooking[]>([])

    useEffect(()=> {
        const getData = async () => {
            let bookingsFromApi: IBooking[] = await getBookings();
            setBookings(bookingsFromApi);
        };

        if(bookings.length>0) 
        return;
        getData();
    });

    let bookingsFromDB:IBooking[]=bookings;

    console.log(bookingsFromDB);

    // filtering //

    let bookingsHtml = bookingsFromDB.map((booking)=>{

    return (
        <>
            <div>
                <p>{booking.date}</p> 
                <p>{booking.time}</p> 
                <p>{booking.numberOfGuests}</p>
                {/* <p>{booking.customer.name}</p>  
                <p>{booking.customer.lastname}</p> 
                <p>{booking.customer.email}</p> 
                <p>{booking.customer.phone}</p>  */}
            </div>
        </>
    )
    
    });

    return (
     <> 
        {bookingsHtml}
     </>   
    );

};