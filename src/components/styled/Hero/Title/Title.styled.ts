import styled from "styled-components";
import { device } from "../../Breakpoints";

export const StyledTitle = styled.h1`
	font-weight: bold;
	position: absolute;
	z-index: -6;
	color: white;
	text-align: center;
	font-size: 3.5em;
	padding-top: 130px;
	transition: ease all 0.5s;

	@media ${device.tablet} {
		font-size: 4.5em;
		padding-top: 250px;
		transition: ease all 0.5s;
	}
	@media ${device.desktop} {
		font-size: 5em;
		padding-top: 300px;
		transition: ease all 0.5s;
	}
`;
