import styled from "styled-components";
import { device } from "./Breakpoints";

export const CalendarParagraphStyled = styled.div`
    margin: 0 auto 20px;
    width: 100%;
    text-align: center;
    line-height: 1.2rem;
    color: #545454;
    font-size: 0.9rem; 

    @media ${device.tablet} {
        width: 600px;
        font-size: 1rem;
        line-height: 1.4rem;
    }
`;