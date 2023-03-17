import React from "react";
import { StyledMenuLinks, StyledMenu } from "./Menu.styled";

interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <StyledMenuLinks to="/">Start</StyledMenuLinks>
      <StyledMenuLinks to="../../booking">Boka</StyledMenuLinks>
      <StyledMenuLinks to="#">Meny</StyledMenuLinks>
      <StyledMenuLinks to="../../contact">Kontakt</StyledMenuLinks>
      <StyledMenuLinks to="../../admin">Admin</StyledMenuLinks>
    </StyledMenu>
  );
};

export default Menu;
