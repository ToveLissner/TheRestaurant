import styled from "styled-components";

interface IAdminButtonProps {
  bgcolor: string;
}

export const AdminButton = styled.button`
  border-radius: 25px;
  box-shadow: #161926 0 10px 20px -10px;
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
  &:active {
    transform: translateY(2px);
  }
  background-color: ${(props: IAdminButtonProps) => props.bgcolor || "yellow"};
`;

