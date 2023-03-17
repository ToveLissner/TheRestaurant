import styled from "styled-components";

// Vanlig wrapper som skall styla, kom ihåg mobil-first //

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;
  height: 60px;
`;

//ändra till column för mobile
export const AdminWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-height: 20rem;
  /* width: fit-content; */
  width: 90%;
  gap: 40px;
  margin: 1vh;
  padding: 1vh;
  background-color: #d7d7d7;
  border-radius: 3%;
  border: 2px solid black;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
`;

// Lagt till så den markeras med färg när den klickas på // Behöver kontrolleras //

interface IDateWrapperProps {
  selected: boolean;
}

export const DateWrapper = styled.div`
  background-color: ${(props: IDateWrapperProps) =>
    props.selected ? "green" : "transparent"};
`;
