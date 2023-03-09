import styled from "styled-components";

// vanlig input // skriv in styling //

interface IInputProps{

};

export const Input = styled.input.attrs((props:IInputProps)=>({type:"text"}))`

`;

// ärvd input med annan typ // kontrollera denna

export const Password = styled(Input).attrs({type:"password"})`

`;