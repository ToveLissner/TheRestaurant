import { DinnerButton } from "./styled/DinnerButton";
import { DinnerSlots } from "./styled/DinnerSlots";
import { H3 } from "./styled/H3";

interface IDinnerWrapperProps {
    time: string;
    fullBooked: boolean;
    onChange : (booked: boolean) => void;
    onClick: (text: string) => void;
    showNextButton: () => void;
}

export const DinnerWrapper = (props: IDinnerWrapperProps) => {

    const early = "18:00";
    const late = "21:00";

    props.showNextButton = () => {
        console.log("show Next Button");
    }

    return(
        <DinnerSlots>
            <DinnerButton  fullBooked={props.fullBooked} onChange={ () => {props.onChange(props.fullBooked)} } onClick={ () => {props.onClick(early); props.showNextButton}}><H3>18:00 Boka</H3></DinnerButton>
            <DinnerButton fullBooked={props.fullBooked} onChange={ () => {props.onChange(props.fullBooked)} } onClick={ () => {props.onClick(late)}}><H3>21:00 Boka</H3></DinnerButton>
        </DinnerSlots>
    );
}