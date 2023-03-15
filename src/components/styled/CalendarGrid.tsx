import styled from "styled-components";

export const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    justify-content: center;
    text-align: center;
`;