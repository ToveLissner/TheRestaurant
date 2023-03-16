import React from "react";
import {
	StyledMainButton,
	StyledMainContainer,
	StyledMainImage,
	StyledMainTitle,
} from "./Main.styled";

const Main = () => {
	return (
		<StyledMainContainer>
			<StyledMainTitle>MENYN</StyledMainTitle>
			<StyledMainButton>LÄS MENYN</StyledMainButton>
			<StyledMainImage />
		</StyledMainContainer>
	);
};

export default Main;
