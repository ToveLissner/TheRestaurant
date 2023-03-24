import { StyledBokaBtn, StyledBokaText } from "./Boka.styled";
import { Link } from "react-router-dom";
import { BookingCTA } from "../../BookingCTA";

const Boka = () => {
  return (
    <StyledBokaBtn>
      <BookingCTA to="../../booking">
        <StyledBokaText>BOKA</StyledBokaText>
      </BookingCTA>
    </StyledBokaBtn>
  );
};

export default Boka;
