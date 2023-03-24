import styled from "styled-components";
import { device } from "./Breakpoints";

export const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    justify-content: center;
    text-align: center;
    font-size: 0.6rem;

    @media ${device.tablet} {
        width: 600px;
        font-size: 1rem;
    }
`;