import styled from "styled-components";

interface ICalendarWrapperProps {
    selected: boolean;
}

export const CalendarWrapper = styled.div`
        display: ${ (props: ICalendarWrapperProps) => 
        props.selected ? "none" : "visible"};
`;