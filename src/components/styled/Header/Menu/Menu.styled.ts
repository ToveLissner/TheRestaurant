import styled from "styled-components";
import { theme } from "../../Theme";

interface Props {
	open: boolean;
}

export const StyledNavContainer = styled.article`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	padding: 30px 40px 30px 40px;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
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

	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: ${theme.primaryWhite};
		text-decoration: none;
		transition: color 0.3s linear;
	}
`;
