import styled from "styled-components";
import { theme } from "../Theme";
import image from "../../../images/waffles.jpg";
import { device } from "../Breakpoints";

export const StyledMainContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	transition: ease all 0.5s;

	@media ${device.tablet} {
		padding: 50px;
		margin-bottom: -5%;
		transition: ease all 0.5s;
	}
	@media ${device.desktop} {
		margin-bottom: -10%;
		transition: ease all 0.5s;
	}
`;

export const StyledMainTitle = styled.h2`
	width: max-content;
	font-size: 2.5em;
	color: ${theme.primaryNavy};
	margin: 5%;
	transition: ease all 0.5s;

	@media ${device.tablet} {
		margin: 3%;
		transition: ease all 0.5s;
	}
	@media ${device.desktop} {
		margin: 2%;
		transition: ease all 0.5s;
	}
`;

export const StyledMainButton = styled.article`
	border: 1px solid ${theme.primaryNavy};
	padding: 5px 15px;
	width: max-content;
	font-weight: bold;
	font-size: 1.3em;
	color: ${theme.primaryNavy};
	transition: ease all 0.5s;

	@media ${device.tablet} {
		margin-top: 5%;
		transition: ease all 0.5s;
	}
	@media ${device.desktop} {
		margin-top: 0;
		transition: ease all 0.5s;
	}
`;

export const StyledMainImage = styled.article`
	background-image: url(${image});
	background-size: 110%;
	background-repeat: no-repeat;
	background-position: center;
	height: 350px;
	width: 90%;
	border-radius: 15px;
	margin: 10% 0 15% 0;
	transition: ease all 0.5s;

	@media ${device.tablet} {
		width: 70%;
		margin: 10% 0 10% 0;
		background-size: 100%;
		transition: ease all 0.5s;
	}
	@media ${device.desktop} {
		width: 50%;
		margin: 5% 0 15% 0;
		height: 450px;
		background-size: 100%;
		transition: ease all 0.5s;
	}
`;
