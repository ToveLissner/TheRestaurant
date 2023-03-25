import { GlobalStyles } from "../components/styled/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styled/Theme";
import { StyledHeroImage } from "../components/styled/Hero/Image/Image.styled";
import Main from "../components/styled/MainContent/Main";
import Title from "../components/styled/Hero/Title/Title";

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<StyledHeroImage>
				<Title />
			</StyledHeroImage>
			<Main />
		</ThemeProvider>
	);
}
