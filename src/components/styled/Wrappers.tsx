import styled from "styled-components";

// Vanlig wrapper som vi borde styla, kom ihåg mobil-first //

export const Wrapper = styled.div `
    display: flex;
    width: 90%;
`;

// Lagt till så den markeras med färg när den klickas på // Behöver kontrolleras //

interface IDateWrapperProps {
    selected: boolean;
}

export const DateWrapper = styled.div `
    background-color: ${(props: IDateWrapperProps)=>props.selected?"green":"transparent"};
`;