

import { useEffect, useState } from "react";
import { IBooking } from "../models/IBooking";

export const Bookings = () => {
    const [bookings, setBookings] = useState<IBooking[]>([]);

    // useEffect( () => {
    //     console.log("Is running");

    // }, [bookings]);

    // const AddBooking = () => {
    //     setBookings([...booking])
    // }

    return(
        <></>
    );
}