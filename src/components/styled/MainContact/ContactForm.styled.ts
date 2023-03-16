import styled from "styled-components";
import { theme } from "../Theme";
import { device } from "../Breakpoints";

export const StyledContactForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: max-content;
	padding: 0 10% 0 10%;
`;

export const StyledFormLabel = styled.label`
	color: white;
	font-weight: bold;
	padding-bottom: 5%;
`;
export const StyledContactTitle = styled.h1`
	font-size: 2.5em;
	color: white;
	margin: 0;
	text-align: center;
	padding-bottom: 10%;
`;

export const StyledFormInput = styled.input`
	background: transparent;
	border: none;
	border-top: solid 1px white;
	color: white;
	padding-bottom: 5%;
`;

export const StyledFormSubmit = styled.input`
	font-size: 1.1em;
	padding: 10px 25px;
	background: transparent;
	color: white;
	border: solid 1px ${theme.primaryOrange};
	width: max-content;
`;
