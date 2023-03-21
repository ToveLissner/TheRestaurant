import styled from "styled-components";

export const ConfirmBookingButton = styled.button`
    margin: 0px auto 100px;
    width: 600px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #171926;
    border: 2px solid #171926;
    cursor: pointer;
    transition: 200ms ease-in;

    &:hover{
        background-color: #171926;
        color: #fff;
    }
`;
