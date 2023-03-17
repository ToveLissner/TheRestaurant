import styled from "styled-components";
import { theme } from "../../Theme";

export const StyledBokaBtn = styled.article`
  width: min-content;
  text-align: center;
  padding: 10px 20px;
  font-weight: bold;
  color: ${theme.primaryWhite};
  background: transparent;
  border: 2px solid white;
  position: relative;
  z-index: -2;
`;

export const StyledBokaText = styled.span`
  font-weight: bold;
  font-size: 1em;
  text-decoration: none;
  color: white;
`;
