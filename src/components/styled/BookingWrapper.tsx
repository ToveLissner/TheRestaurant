import styled from "styled-components";
import { device } from "./Breakpoints";

export const BookingWrapper = styled.div`
    margin: 50px auto;
    width: 90%;
    height: auto;

    @media ${device.tablet} {
        width: 600px;
    }
`;
