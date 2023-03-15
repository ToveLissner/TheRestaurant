import styled from "styled-components";

export interface ICellProps {
    selected: boolean;
}

const SELECTED_BG_COLOR = "#e1e1e1";

export const Cell = styled.div`
    border: 1px solid #e1e1e1;  
    padding: 10px 0;
    height: 40px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const DateCell = styled(Cell)`
    cursor: pointer; 

    background-color: ${(props: ICellProps) =>
        props.selected ? SELECTED_BG_COLOR : "transparent"};
        
    &:hover{
        background-color: #e1e1e1;
    }  
`;

export const PrefixCell = styled(Cell)`
    background-color: #8C3503;
`;

export const SuffixCell = styled(PrefixCell)`
    background-color: #8C3503;
`;
