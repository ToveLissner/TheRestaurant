import styled from "styled-components";

interface IDinnerButtonProps {
    fullBooked: boolean;
}

export const DinnerButton = styled.button`
    width: calc(50% - 5px);
    height: 70px;
    //background-color: #171926;
    background-color: ${(props: IDinnerButtonProps) => props.fullBooked ? "blue" : "#171926"};
    pointer-events: ${(props: IDinnerButtonProps) => props.fullBooked ? "none" : "auto"};
    opacity: ${(props: IDinnerButtonProps) => props.fullBooked ? "50%" : "100%"};
    color: #fff;
    border: none;
    cursor: pointer;
`;