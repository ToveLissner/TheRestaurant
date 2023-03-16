import React from "react";
import {
	StyledMainArrowContainer,
	StyledMainArrowText,
	StyledMainButton,
	StyledMainContainer,
	StyledMainImage,
	StyledMainTitle,
} from "./Main.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faS, faAngleDown);

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
