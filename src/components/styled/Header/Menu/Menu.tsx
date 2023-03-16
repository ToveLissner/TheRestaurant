import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import { isBooleanObject } from "util/types";

interface Props {
	open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<a href="/">Start</a>
			<a href="/">Boka</a>
			<a href="/">Meny</a>
			<a href="/">Kontakt</a>
		</StyledMenu>
	);
};

export default Menu;
