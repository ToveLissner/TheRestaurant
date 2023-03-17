import styled from "styled-components";
import { theme } from "../Theme";
import { device } from "../Breakpoints";

export const StyledContactContainer = styled.section`
	background-color: ${theme.secondaryNavy};
	padding-top: 30%;
	width: 100%;
	height: max-content;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	transition: ease all 0.5s;

	@media ${device.desktop} {
		flex-direction: row;
		padding-top: 15%;
		transition: ease all 0.5s;
		padding-bottom: 5%;
	}
`;

export const StyledContactMap = styled.iframe`
	width: 80%;
	height: 400px;
	margin: 5%;
	border: hidden;
	border-radius: 10px;
`;
