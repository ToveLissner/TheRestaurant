import { numberOfGuests } from "../consts/guests";
import { Cell, DateCell } from "./styled/Cell";
import { GuestDiv } from "./styled/GuestDiv";
import { GuestNumberGrid } from "./styled/GuestNumberGrid";
import { GuestSelected } from "./styled/GuestSelected";
import { H3 } from "./styled/H3";

interface IGuestsProps {
    guestValue?: number;
    onChange: (guestValue: number) => void;
    selected: boolean;
    onClick: (index: number) => void; 
}

export const Guests = (props: IGuestsProps) => {

    let numberOfGuestsHtml = numberOfGuests.map( (number, index) => {

        return(
            <DateCell selected={props.selected} onClick={() => {props.onClick(number)}} key={index}>{number}</DateCell>
        );
    });

        return(
        <>  
            <GuestDiv>
                <H3>Antal personer</H3>
                <GuestNumberGrid>
                    {numberOfGuestsHtml}
                </GuestNumberGrid>
                <GuestSelected>
                    <H3>Antal gäster: {props.guestValue}</H3>
                </GuestSelected>
            </GuestDiv>
        </>
    );
}