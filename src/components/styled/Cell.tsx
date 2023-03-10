import styled from "styled-components";

export const Cell = styled.div`
    border: 1px solid #e1e1e1;  
    padding: 10px 0;
    height: 20px;
`;

export const DateCell = styled(Cell)`
    cursor: pointer; 
    &:hover{
        background-color: #e1e1e1;
    }  
`;