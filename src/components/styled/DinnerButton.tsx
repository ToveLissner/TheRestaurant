import styled from "styled-components";

interface IDinnerButtonProps {
    fullBookedEarly: boolean;
    onChange: () => void;
    //fullBookedLate?: boolean;
}

export const DinnerButton = styled.button`
    width: calc(50% - 5px);
    height: 70px;
    background-color: #171926;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const DinnerButtonEarly = styled(DinnerButton)`
    background-color: ${(props: IDinnerButtonProps) => props.fullBookedEarly ? "green" : "red"};
    pointer-events: ${(props: IDinnerButtonProps) => props.fullBookedEarly ? "auto" : "none"};
    opacity: ${(props: IDinnerButtonProps) => props.fullBookedEarly ? "100%" : "50%"};
`;

// export const DinnerButtonLate = styled(DinnerButton)`
//     background-color: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "green" : "red"};
//     pointer-events: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "auto" : "none"};
//     opacity: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "100%" : "50%"};
// `;