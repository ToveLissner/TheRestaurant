import styled from "styled-components";
import { theme } from "../Theme";
import { Link } from "react-router-dom";
import { device } from "../Breakpoints";

export const StyledFooterContainer = styled.section`
	background-color: ${theme.primaryNavy};
	height: 30vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0 20px 0;
`;

export const StyledFooterLine = styled.hr`
	width: 100%;
`;

export const StyledFooterTitle = styled.h2`
	font-size: 2.2em;
	text-align: center;
	width: 100%;
	margin: 0;
	color: white;
	transition: ease all 0.5s;

	@media ${device.tablet} {
		font-size: 2.5em;
		transition: ease all 0.5s;
	}
`;

export const StyledFooterLinksContainer = styled.article`
	width: 100%;
	display: flex;
	height: inherit;
`;

export const StyledFooterNavLinks = styled.ul`
	width: 50%;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 0 10% 0 10%;
	justify-content: space-around;
	transition: ease all 0.5s;

	@media ${device.tablet} {
		flex-direction: row;
		padding: 0 8% 0 8%;
		align-items: center;
		transition: ease all 0.5s;
	}

	@media ${device.desktop} {
		flex-direction: row;
		align-items: center;
		transition: ease all 0.5s;
	}
`;

export const StyledFooterSocialLinks = styled.ul`
	width: 50%;
	padding: 0 10% 0 10%;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	transition: ease all 0.5s;

	@media ${device.tablet} {
		flex-direction: row;
		padding: 0 8% 0 8%;
		align-items: center;
		transition: ease all 0.5s;
	}

	@media ${device.desktop} {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 0 10% 0 10%;
		transition: ease all 0.5s;
	}

	a {
		text-decoration: none;
		color: white;
		font-size: 1.2em;
	}
`;

export const StyledFooterItems = styled.li`
	color: white;
	text-decoration: none;
	font-weight: bold;
`;

export const StyledLinks = styled(Link)`
	display: flex;
	color: white;
	font-size: 1.2em;
	text-decoration: none;
`;
