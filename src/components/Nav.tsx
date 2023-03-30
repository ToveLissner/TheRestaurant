import Burger from "./styled/Header/Burger/Burger";
import Menu from "./styled/Header/Menu/Menu";
import Boka from "./styled/Header/Boka/Boka";
import { useEffect, useState } from "react";
import { StyledNavContainer } from "./styled/Header/Menu/Menu.styled";

export const Nav = () => {
	const [open, setOpen] = useState(false);
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if(window.scrollY >= 80) {
			setScrollNav(true)
		}	else{
			setScrollNav(false)
		}
	}

	useEffect( () => {
		window.addEventListener('scroll', changeNav)
	}, [])

	return (
		<StyledNavContainer scrollNav={scrollNav}>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
			<Boka />
		</StyledNavContainer>
	);
};
