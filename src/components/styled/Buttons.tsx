import styled from "styled-components";
import { DateWrapper } from "./Wrappers";
import { keyframes } from "styled-components";

export const CheckForBookingButton = styled.button`
  background-color: green;
`;

// vit knapp som det går att ändra färg på //
// <Button bgcolor="green"> </Button> //

interface IButtonProps {
  bgcolor: string;
}

// const pressDownAnimation = keyframes`
// transform: translate(4px);
// `;

export const Button = styled.button`
  color: black;
  border: 1px solid black;
  background-color: ${(props: IButtonProps) => props.bgcolor || "yellow"};
`;

export const AdminButton = styled.button`
  border-radius: 25px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 2px 40px;
  width: fit-content;
  border: 0;
  margin-right: 2%;
  &:active {
    transform: translateY(2px);
  }
  background-color: ${(props: IButtonProps) => props.bgcolor || "yellow"};
`;


// arv där vi bara ändrar färgerna // MÅSTE FIXA DENNA

export const SaveButton = styled(Button)`
  color: red;
  background-color: ${(props: IButtonProps) => props.bgcolor || "black"};
`;
