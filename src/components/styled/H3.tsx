import styled from "styled-components";

export interface ISectionTitleProps {
    selected: boolean;
}

export const H3 = styled.h3`
    margin: 20px auto;
    width: fit-content;
`;

export const SectionTitle = styled(H3)`
    display: ${ (props: ISectionTitleProps) => 
    props.selected ? "none" : "visible"};
`;