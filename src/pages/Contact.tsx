import { Header } from "../components/Header";
import { GlobalStyles } from "../components/styled/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styled/Theme";
import { StyledHeroImage } from "../components/styled/Hero/Image/Image.styled";
import Main from "../components/styled/MainContent/Main";
import Footer from "../components/styled/Footer/Footer";
import Title from "../components/styled/Hero/Title/Title";

export default function Contact() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
		</ThemeProvider>
	);
}
