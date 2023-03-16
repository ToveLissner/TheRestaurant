import styled from "styled-components";
import { theme } from "../Theme";
import image from "../../../images/waffles.jpg";

export const StyledMainArrowContainer = styled.article`
	width: 100%;
	background-color: ${theme.primaryWhite};
	height: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: end;
`;

export const StyledMainArrowText = styled.span`
	color: ${theme.primaryNavy};
	font-size: 1.7em;
	font-weight: bold;
`;

export const StyledMainContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	// padding: 50px;
	justify-content: space-around;
`;

export const StyledMainTitle = styled.h2`
	width: max-content;
	font-size: 2.5em;
	color: ${theme.primaryNavy};
	margin: 5%;
`;

export const StyledMainButton = styled.article`
	border: 1px solid ${theme.primaryNavy};
	padding: 5px 15px;
	width: max-content;
	font-weight: bold;
	color: ${theme.primaryNavy};
`;

export const StyledMainImage = styled.article`
	background-image: url(${image});
	background-size: 110%;
	background-repeat: no-repeat;
	background-position: center;
	height: 350px;
	width: 450px;
	border-radius: 15px;
	margin: 10% 0 15% 0;
`;
