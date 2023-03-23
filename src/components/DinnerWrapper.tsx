import { CalendarSelected } from "./styled/CalendarSelected";
import { DinnerButton, DinnerButtonEarly, DinnerButtonLate } from "./styled/DinnerButton";
import { DinnerButtonWrapper } from "./styled/DinnerButtonWrapper";
import { DinnerSlots } from "./styled/DinnerSlots";
import { H3 } from "./styled/H3";
import { ChangeH4, H4 } from "./styled/H4";

interface IDinnerWrapperProps {
    time: string;
    fullBookedEarly: boolean;
    fullBookedLate: boolean;
    displaySection: () => void;
    onClick: (text: string) => void;
    visibleState: boolean;
}

export const DinnerWrapper = (props: IDinnerWrapperProps) => {

    const early = "18:00";
    const late = "21:00";

    return(
        <DinnerSlots>

            {/* Korrekt kod */}
            {/* <DinnerButtonEarly onChange={ () => {props.onChange(props.fullBookedEarly)}} fullBookedEarly={props.fullBookedEarly}   onClick={ () => {props.onClick(early)}}></DinnerButtonEarly> */}

            <DinnerButtonWrapper>
                <DinnerButtonEarly selected={props.visibleState} fullBookedEarly={props.fullBookedEarly} onClick={ () => {props.onClick(early)}}>18:00 Boka</DinnerButtonEarly> 
                <DinnerButtonLate selected={props.visibleState} fullBookedLate={props.fullBookedLate} onClick={ () => {props.onClick(late)}}>21:00 Boka</DinnerButtonLate> 
                {/* <DinnerButton onClick={ () => {props.onClick(late)}}><H3>21:00 Boka</H3></DinnerButton> */}
            </DinnerButtonWrapper>
            
            <CalendarSelected>
                <H4>Valt datum: {props.time}</H4>
                <ChangeH4 onClick={props.displaySection}>Ändra</ChangeH4>
            </CalendarSelected>
        </DinnerSlots> 
    );
}