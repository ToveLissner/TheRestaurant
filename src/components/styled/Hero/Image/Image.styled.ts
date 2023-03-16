import styled from "styled-components";
import hero from "../../../../images/pancakes.jpg";

export const StyledHeroImage = styled.article`
	height: 90vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.427), rgba(0, 0, 0, 0.05)),
		url(${hero});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	// width: 100%;
	z-index: 5;
	display: flex;
	justify-content: center;
`;
