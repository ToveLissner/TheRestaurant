import styled from "styled-components";

// Vanlig wrapper som skall styla, kom ihåg mobil-first //

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  justify-content: center;
  /* justify-content: left;
  height: 60px; */
`;

export const SortWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  /* flex-flow: row wrap; */
  max-height: 20rem;
  justify-content: space-between;
  /* padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 20px; */
  margin: 10px;
  padding: 10px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
`;

//ändra till column för mobile
export const AdminWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  /* flex-flow: row wrap; */
  max-height: 20rem;
  justify-content: space-between;
  /* padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 20px; */
  margin: 10px;
  padding: 10px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  background-color: #d7d7d7;
  
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
