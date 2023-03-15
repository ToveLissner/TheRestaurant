import { H3 } from "./styled/H3";

interface IFirstFormSelectionsProps {
    dateValue: Date;
    guests: number;
}


export const FirstFormSelections = (props: IFirstFormSelectionsProps) => {

    return(
        <>
            <H3>{props.guests}</H3>
            {/* <H3>{props.dateValue}</H3> */}
        </>
    );
}