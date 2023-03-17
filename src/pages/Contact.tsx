import { Header } from "../components/Header";
import { GlobalStyles } from "../components/styled/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styled/Theme";
import Footer from "../components/styled/Footer/Footer";

import {
	StyledContactContainer,
	StyledContactMap,
} from "../components/styled/MainContact/MainContact.styled";
import ContactForm from "../components/styled/MainContact/ContactForm";

export default function Contact() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<StyledContactContainer>
				<ContactForm />
				<StyledContactMap
					loading="lazy"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.130086147371!2d17.97960203650504!3d59.33078195929008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6c21fb0343%3A0xe531e25988e5948e!2sMedieinstitutet!5e0!3m2!1sen!2sse!4v1678995031392!5m2!1sen!2sse"
				/>
			</StyledContactContainer>
			<Footer />
		</ThemeProvider>
	);
}
