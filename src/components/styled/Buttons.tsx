import styled from "styled-components";

// vit knapp som det går att ändra färg på //
// <Button bgcolor="green"> </Button> //

interface IButtonProps{
    bgcolor: string;
};

export const Button = styled.button `
    background-color: ${(props:IButtonProps)=>props.bgcolor||"white"}
`;

// arv där vi bara ändrar färgerna //

export const SaveButton = styled(Button)`
    background-color: black;
    color: white;
`;


