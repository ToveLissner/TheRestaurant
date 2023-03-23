import styled from "styled-components";

interface IDinnerButtonProps {
    fullBookedEarly?: boolean;
    fullBookedLate?: boolean;
    selected?: boolean;
}

export const DinnerButton = styled.button`
    width: calc(50% - 5px);
    background-color: #171926;
    padding: 25px 0px 25px 0px;
    color: #fff;
    font-size: 1em;
    font-weight: 600;
    border: none;
    cursor: pointer;
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