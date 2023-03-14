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

    let bookingsHtml = bookingsFromDB.map((booking)=>{

    return (
        <>
            <div>
                {booking.date}
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