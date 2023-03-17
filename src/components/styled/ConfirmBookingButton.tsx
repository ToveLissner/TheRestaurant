import styled from "styled-components";

export const ConfirmBookingButton = styled.button`
    margin: 0px auto 100px;
    width: 600px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #8C3503;
    border: 2px solid #8C3503;
    cursor: pointer;
    transition: 200ms ease-in;

    &:hover{
        background-color: #8C3503;
        color: #fff;
    }
`;
