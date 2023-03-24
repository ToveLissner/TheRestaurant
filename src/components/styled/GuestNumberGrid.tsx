import styled from "styled-components";

export interface IGuestNumberGridProps {
    selected: boolean;
}

export const GuestNumberGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    justify-content: center;
    text-align: center;
    display: ${ (props: IGuestNumberGridProps) => 
        props.selected ? "none" : "visible"};
    height: auto;
`;