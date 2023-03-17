import { StyledBokaBtn, StyledBokaText } from "./Boka.styled";
import { Link } from "react-router-dom";

const Boka = () => {
  return (
    <StyledBokaBtn>
      <Link to="../../booking">
        <StyledBokaText>BOKA</StyledBokaText>
      </Link>
    </StyledBokaBtn>
  );
};

export default Boka;
