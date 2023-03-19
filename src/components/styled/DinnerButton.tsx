import styled from "styled-components";

interface IDinnerButtonProps {
    fullBookedSelection: boolean;
    //fullBookedLate?: boolean;
}

export const DinnerButton = styled.button`
    width: calc(50% - 5px);
    height: 70px;
    //background-color: #171926;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const DinnerButtonEarly = styled(DinnerButton)`
    background-color: ${(props: IDinnerButtonProps) => props.fullBookedSelection ? "green" : "red"};
    pointer-events: ${(props: IDinnerButtonProps) => props.fullBookedSelection ? "auto" : "none"};
    opacity: ${(props: IDinnerButtonProps) => props.fullBookedSelection ? "100%" : "50%"};
`;

// export const DinnerButtonLate = styled(DinnerButton)`
//     background-color: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "green" : "red"};
//     pointer-events: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "auto" : "none"};
//     opacity: ${(props: IDinnerButtonProps) => props.fullBookedLate ? "100%" : "50%"};
// `;