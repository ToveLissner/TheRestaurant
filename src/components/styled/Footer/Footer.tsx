import React from "react";
import {
	StyledFooterContainer,
	StyledFooterItems,
	StyledFooterLine,
	StyledFooterLinksContainer,
	StyledFooterNavLinks,
	StyledFooterSocialLinks,
	StyledFooterTitle,
	StyledLinks,
} from "./Footer.styled";

const Footer = () => {
	return (
		<StyledFooterContainer>
			<StyledFooterTitle>
				PANCAKES
				<StyledFooterLine />
			</StyledFooterTitle>

			<StyledFooterLinksContainer>
				<StyledFooterNavLinks>
					<StyledFooterItems>
						{/* <StyledLinks to="/">Start</StyledLinks> */}
					</StyledFooterItems>
				</StyledFooterNavLinks>
				<StyledFooterSocialLinks>
					<StyledFooterSocialLinks></StyledFooterSocialLinks>
				</StyledFooterSocialLinks>
			</StyledFooterLinksContainer>
		</StyledFooterContainer>
	);
};

export default Footer;
