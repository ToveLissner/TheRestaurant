import styled from "styled-components";

interface IDinnerButtonProps {
    fullBooked: boolean;
}

export const DinnerButton = styled.button`
    width: calc(50% - 5px);
    height: 70px;
    //background-color: #8C3503;
    background-color: ${(props: IDinnerButtonProps) => props.fullBooked ? "blue" : "green"};
    pointer-events: ${(props: IDinnerButtonProps) => props.fullBooked ? "none" : "auto"};
    opacity: ${(props: IDinnerButtonProps) => props.fullBooked ? "50%" : "50%"};
    color: #fff;
    border: none;
    cursor: pointer;
`;