import Burger from "./styled/Header/Burger/Burger";
import Menu from "./styled/Header/Menu/Menu";
import Boka from "./styled/Header/Boka/Boka";
import { useState } from "react";
import { StyledNavContainer } from "./styled/Header/Menu/Menu.styled";
export const Nav = () => {
	const [open, setOpen] = useState(false);
	return (
		<StyledNavContainer>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} />

			<Boka />
		</StyledNavContainer>
	);
};
