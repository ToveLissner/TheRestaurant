import {
	StyledContactForm,
	StyledFormInput,
	StyledFormLabel,
	StyledFormSubmit,
	StyledContactTitle,
} from "./ContactForm.styled";

//Bara ett placeholder formulär för att fylla ut kontakt-sidan (ingen useForm eller andra hooks)
export default function ContactForm() {
	return (
		<StyledContactForm>
			<StyledContactTitle>Kontakta Oss:</StyledContactTitle>
			<StyledFormLabel>Ditt namn</StyledFormLabel>
			<StyledFormInput type="text" name="name" />
			<StyledFormLabel>Din mailadress</StyledFormLabel>
			<StyledFormInput type="text" name="mail" />
			<StyledFormLabel>Ditt telefonnummer</StyledFormLabel>
			<StyledFormInput type="number" name="phone" />
			<StyledFormLabel>Ditt meddelande</StyledFormLabel>
			<StyledFormInput type="text" name="msg" />
			<StyledFormSubmit type="submit" value="SKICKA" />
		</StyledContactForm>
	);
}
