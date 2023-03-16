import styled from "styled-components";
import { theme } from "../Theme";
import { Link } from "react-router-dom";

export const StyledFooterContainer = styled.section`
	background-color: ${theme.primaryNavy};
	height: 300px;
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
	padding: 0 15% 0 15%;
	justify-content: space-around;
`;

export const StyledFooterSocialLinks = styled.ul`
	width: 50%;
	padding: 0 15% 0 15%;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;

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
