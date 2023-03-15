import { DinnerButton } from "./styled/DinnerButton";
import { DinnerSlots } from "./styled/DinnerSlots";
import { H3 } from "./styled/H3";

interface IDinnerWrapperProps {
    time: string;
    onClick: (text: string) => void;
}

export const DinnerWrapper = (props: IDinnerWrapperProps) => {

    const early = "18:00";
    const late = "21:00";

    return(
        <DinnerSlots>
            <DinnerButton onClick={ () => {props.onClick(early)}}><H3>18:00 Boka</H3></DinnerButton>
            <DinnerButton onClick={ () => {props.onClick(late)}}><H3>21:00 Boka</H3></DinnerButton>
        </DinnerSlots>
    );
}