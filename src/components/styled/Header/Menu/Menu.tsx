import React from "react";
import { StyledMenuLinks, StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

interface Props {
	open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<StyledMenuLinks to="../../">Start</StyledMenuLinks>
			<StyledMenuLinks to="#">Boka</StyledMenuLinks>
			<StyledMenuLinks to="#">Meny</StyledMenuLinks>
			<StyledMenuLinks to="../../pages/Contact">Kontakt</StyledMenuLinks>
			<StyledMenuLinks to="#">Admin</StyledMenuLinks>
		</StyledMenu>
	);
};

export default Menu;
