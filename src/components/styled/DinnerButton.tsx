import styled from "styled-components";
import { device } from "./Breakpoints";

interface IDinnerButtonProps {
    fullBookedEarly?: boolean;
    fullBookedLate?: boolean;
    selected?: boolean;
}

export const DinnerButton = styled.button`
    width: calc(50% - 5px);
    background-color: #171926;
    padding: 20px 0px 20px 0px;
    color: #fff;
    font-weight: 600;
    border: none;
    cursor: pointer;

    @media ${device.tablet} {
        padding: 25px 0px 25px 0px;
        font-size: 1em;
    }
`;

export const DinnerButtonEarly = styled(DinnerButton)`
    pointer-events: ${(props: IDinnerButtonProps) => props.fullBookedEarly ? "none" : "auto"};
    opacity: ${(props: IDinnerButtonProps) => props.fullBookedEarly ? "20%" : "100%"};
    text-decoration: ${(props: IDinnerButtonProps) => props.fullBookedEarly ? "line-through" : "none"};
`;

export const DinnerButtonLate = styled(DinnerButton)`
    pointer-events: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "none" : "auto"};
    opacity: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "20%" : "100%"};
    text-decoration: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "line-through" : "none"};
`;