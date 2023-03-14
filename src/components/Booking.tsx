import { useEffect, useState } from "react";
import { IBooking } from "../models/IBooking";
import { getBookings } from "../services/restaurantService";
import { BookingButton } from "./BookingButton";
import { CheckForBookingButton } from "./styled/Buttons";

export const Booking = ()=>{

    const [booking, setBooking] = useState<IBooking>({restaurantId: "6409b9ec4e7f91245cbd6d91",
        date: "",
        time: "",
        numberOfGuests: 0,
        customer: {
            name: "",
            lastname: "",
            email: "",
            phone: "",
          }  
    })

// lägga in antal gäster och datum i bokningen + hämta bokningar från databasen //

    let numberFromInput1 = 2;
    let dateFromInput2 = "2023-03-11";

    function numberDate(booking:IBooking){
        let newBooking = {
            ...booking,
            numberOfGuests: numberFromInput1,
            date: dateFromInput2,
        };
        getBookings();
        setBooking(newBooking);
        bookingHtml();
    }

    console.log(booking);

// Visa valda datum //

    const bookingHtml = async ()=>{
        let bookingsFromDB:IBooking[] = await getBookings();
        bookingsFromDB.map((booking:IBooking)=>{

            if(dateFromInput2===booking.date){
                console.log("det fungerar")
                

            }
        })

        return <></>;
    }

    // useEffect (() => {

    //     const getData = async () => {
    //         let bookingsFromDB: IBooking[] = await getBookings()
    //         bookingsFromDB.map((booking:IBooking)=>{
    //             if(dateFromInput2===booking.date){
    //                 console.log("det fungerar")
    //                 answerTime=`Hej`;
    //             }
    //         })

    //     return; getData();

    //     }

    // },[answerTime]);


// välja datum och lägga in i bokningen //



// lägga in kunduppgifter i bokningen //

// skicka bokningen till databasen //


    return (
     <> 
      <CheckForBookingButton onClick={() => {numberDate(booking)}}>Finns det tid</CheckForBookingButton>
      {bookingHtml}
      <BookingButton></BookingButton>
     </>   
    );

    
};