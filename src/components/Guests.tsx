import { numberOfGuests } from "../consts/guests";
import { testOfContext } from "../context/BookingContext";
import { Cell, DateCell } from "./styled/Cell";
import { GuestDiv } from "./styled/GuestDiv";
import { GuestNumberGrid } from "./styled/GuestNumberGrid";
import { GuestSelected } from "./styled/GuestSelected";
import { H3 } from "./styled/H3";
import { ChangeH4, H4 } from "./styled/H4";

interface IGuestsProps {
    guestValue: number;
    onChange: (guestValue: number) => void;
    //selected: boolean;
    onClick: (index: number) => void; 
    visibleState: boolean;
    displaySection: () => void;
} 

export const Guests = (props: IGuestsProps) => {

    let numberOfGuestsHtml = numberOfGuests.map( (number, index) => {

        return(
            <DateCell selected={props.guestValue === number} onClick={() => {props.onClick(number)}} key={index}>{number}</DateCell>
        );
    });

        return(
        <>  
            <GuestDiv>
                <H3>Antal personer</H3>
                <GuestNumberGrid selected={props.visibleState}>
                    {numberOfGuestsHtml}
                </GuestNumberGrid>
                <GuestSelected> 
                    <H4>Antal gäster: {props.guestValue}</H4>
                    <ChangeH4 onClick={props.displaySection}>Ändra</ChangeH4>
                </GuestSelected>
            </GuestDiv>
        </>
    );
}