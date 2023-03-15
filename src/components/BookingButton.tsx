import { useState } from "react";
import { getBookings } from "../services/restaurantService";
import { CheckForBookingButton } from "./styled/Buttons";

export const BookingButton = ()=>{

    interface IBookingButton {
        six: number;
        nine: number; 
        }
        
        let dinners: IBookingButton = {six: 0, nine: 0};

    const [bookingButton, setBookingButton] = useState<IBookingButton>({six: 0, nine: 0})

    let numberSix = 1;
    let numberNine = 1;

    function checkForDinner (bookingButton:IBookingButton){
        getBookings();
        let newBookingButton = {
            ...dinners,
            six: +numberSix,
            nine: +numberNine,
        };
        setBookingButton(newBookingButton);
    }

    return (
        <CheckForBookingButton>Kolla</CheckForBookingButton>
    )
    }
