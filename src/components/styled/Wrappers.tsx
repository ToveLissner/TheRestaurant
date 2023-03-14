import styled from "styled-components";

// Vanlig wrapper som skall styla, kom ihåg mobil-first //

export const Wrapper = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: left;
    height: 60px;
`;

// Lagt till så den markeras med färg när den klickas på // Behöver kontrolleras //

interface IDateWrapperProps {
    selected: boolean;
}

export const DateWrapper = styled.div `
    background-color: ${(props: IDateWrapperProps)=>props.selected?"green":"transparent"};
`;

