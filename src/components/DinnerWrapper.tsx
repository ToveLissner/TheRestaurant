import { DinnerButton } from "./styled/DinnerButton";
import { DinnerSlots } from "./styled/DinnerSlots";
import { H3 } from "./styled/H3";

interface IDinnerWrapperProps {
    time: string;
    fullBookedEarly: boolean;
    // fullBookedLate: boolean;
    onChange : (booked: boolean) => void;
    onClick: (text: string) => void;
    //showNextButton: () => void;
}

export const DinnerWrapper = (props: IDinnerWrapperProps) => {

    const early = "18:00";
    const late = "21:00";

    return(
        <DinnerSlots>
            <DinnerButton onChange={ () => {props.onChange(props.fullBookedEarly)}} onClick={ () => {props.onClick(early)}}><H3>18:00 Boka</H3></DinnerButton> 
            <DinnerButton onClick={ () => {props.onClick(late)}}><H3>21:00 Boka</H3></DinnerButton>
        </DinnerSlots> 
    );
}