import styled from "styled-components";

export const CalendarWeekdays = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    justify-content: center;
    text-align: center;
    background-color: lightpink;
`;