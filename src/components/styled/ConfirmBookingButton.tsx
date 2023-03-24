import styled from "styled-components";
import { device } from "./Breakpoints";

export const ConfirmBookingButton = styled.button`
    margin: 0px auto 50px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #171926;
    color: #fff;
    border: 2px solid #171926;
    cursor: pointer;
    transition: 200ms ease-in;

    &:hover{
        background-color: #171926;
        color: #fff;
    }

    @media ${device.tablet} {
        height: 70px; 
        color: #171926;
        background-color: transparent;
        color: #171926;
        margin: 0px auto 100px;
    }
`;
