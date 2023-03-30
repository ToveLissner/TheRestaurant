import React from "react";
import { StyledMenuLinks, StyledMenu } from "./Menu.styled";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const Menu: React.FC<Props> = ({ setOpen, open }) => {
	return (
		<StyledMenu open={open}>
			<StyledMenuLinks onClick={() => setOpen(!open)} to="/">Start</StyledMenuLinks>
			<StyledMenuLinks onClick={() => setOpen(!open)} to="../../booking">Boka</StyledMenuLinks>
			<StyledMenuLinks onClick={() => setOpen(!open)} to="#">Meny</StyledMenuLinks>
			<StyledMenuLinks onClick={() => setOpen(!open)} to="../../contact">Kontakt</StyledMenuLinks>
			<StyledMenuLinks onClick={() => setOpen(!open)} to="../../admin">Admin</StyledMenuLinks>
		</StyledMenu>
	);
};

export default Menu;
