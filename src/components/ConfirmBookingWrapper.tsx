import { IBooking } from "../models/IBooking";
import { ConfirmBookingButton } from "./styled/ConfirmBookingButton";
import { H3 } from "./styled/H3";

interface IConfirmBookingWrapperProps {
    onClick(): void; 
}

export const ConfirmBookingWrapper = (props: IConfirmBookingWrapperProps) => {

    return(
        <ConfirmBookingButton onClick={ () => {props.onClick()}}><H3>Bekräfta bokning</H3></ConfirmBookingButton>
    );
}