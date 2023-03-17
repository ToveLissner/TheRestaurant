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
            <StyledLinks to="../../">Start</StyledLinks>
          </StyledFooterItems>
          <StyledFooterItems>
            <StyledLinks to="../../booking">Boka</StyledLinks>
          </StyledFooterItems>
          <StyledFooterItems>
            <StyledLinks to="../../">Meny</StyledLinks>
          </StyledFooterItems>
          <StyledFooterItems>
            <StyledLinks to="../../contact">Kontakt</StyledLinks>
          </StyledFooterItems>
        </StyledFooterNavLinks>
        <StyledFooterSocialLinks>
          <StyledFooterItems>
            <a href="https://www.instagram.com/" target={"_blank"}>
              INSTAGRAM
            </a>
          </StyledFooterItems>
          <StyledFooterItems>
            <a href="https://www.facebook.com/" target={"_blank"}>
              FACEBOOK
            </a>
          </StyledFooterItems>
        </StyledFooterSocialLinks>
      </StyledFooterLinksContainer>
    </StyledFooterContainer>
  );
};

export default Footer;
