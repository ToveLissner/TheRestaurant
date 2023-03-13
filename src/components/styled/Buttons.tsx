import styled from "styled-components";
import { handleClick } from "../../services/restaurantService";
import { DateWrapper } from "./Wrappers";

export const BookingButton = styled.button `
    background-color: green;
`;

// vit knapp som det går att ändra färg på //
// <Button bgcolor="green"> </Button> //

interface IButtonProps{
    bgcolor: string;
};

export const Button = styled.button `
    color: white;
    border: 1px solid white;
    background-color: ${(props:IButtonProps)=>props.bgcolor||"yellow"};
`;

// arv där vi bara ändrar färgerna // MÅSTE FIXA DENNA

export const SaveButton = styled(Button)`
    color: red;
    background-color: ${(props:IButtonProps)=>props.bgcolor||"black"};
`;




