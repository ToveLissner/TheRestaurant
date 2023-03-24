import styled from "styled-components";
import { theme } from "../../Theme";
import { Link } from "react-router-dom";
import { device } from "../../Breakpoints";

interface Props {
	open: boolean;
}

export const StyledNavContainer = styled.article`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	padding: 30px 15px 30px 15px;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	transition: ease all 0.5s;

	@media ${device.tablet}, ${device.desktop} {
		padding: 30px 30px 30px 30px;
		transition: ease all 0.5s;
	}
`;

export const StyledMenu = styled.nav<Props>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${theme.primaryNavy};
	height: 100vh;
	width: 100%;
	text-align: center;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transform: ${({ open }) => (open ? "translateX(1)" : "translateX(-100%)")};
	transition: transform 0.3s ease-in-out;
	z-index: -1;
	transition: ease all 0.5s;

	@media ${device.tablet} {
		width: 60%;
		transition: ease all 0.5s;
	}
	@media ${device.desktop} {
		width: 30%;
		transition: ease all 0.5s;
	}
`;

export const StyledMenuLinks = styled(Link)`
	font-size: 2rem;
	text-transform: uppercase;
	padding: 2rem 0;
	font-weight: bold;
	letter-spacing: 0.5rem;
	color: ${theme.primaryWhite};
	text-decoration: none;
	transition: color 0.3s linear;

	@media ${device.tablet} {
		font-size: 1.5rem;
		transition: ease all 0.5s;
	}
	@media ${device.desktop} {
		font-size: 1.3rem;
		transition: ease all 0.5s;
	}
`;
