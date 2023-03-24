import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
//import { errorInputMessages } from "../consts/error";
//import { ConfirmBookingWrapper } from "./ConfirmBookingWrapper";
//import { ErrorMessage } from "./ErrorMessage";
import { CheckForBookingButton } from "./styled/Buttons";
import { CheckForGDPR } from "./styled/CheckForGDPR";
import { ConfirmBookingButton } from "./styled/ConfirmBookingButton";
import { Container } from "./styled/Container";
import { ErrorStyling } from "./styled/ErrorStyling";
import { H3 } from "./styled/H3";
import { Input } from "./styled/Input";
import { InputContainer } from "./styled/InputContainer";
import { InputLabel } from "./styled/InputLabel";
import { LabelGDPR } from "./styled/LabelGDPR";

interface ICustomerInputWrapperProps {
    name: string;
    lastname: string; 
    email: string;
    phone: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick(): void; 
}

export const CustomerInputWrapper = (props: ICustomerInputWrapperProps) => {

    const [nameError, setNameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [showNoValid, setShowNoValid] = useState(false);

    const nameValidation = () => {

        let setIfValid;

        if(/[!@#$%^&*(),.?":{}|<>]/g.test(props.name) || /\d+/g.test(props.name)) {
            setNameError("Förnamnet innehåller felaktiga tecken");
            setIfValid = false;
        } else {
            setNameError("");
            setIfValid = true;
        }

        return setIfValid;
    }

    const lastnameValidation = () => {

        let setIfValid;

        if(/[!@#$%^&*(),.?":{}|<>]/g.test(props.lastname)  || /\d+/g.test(props.lastname)) {
            setLastnameError("Efternamnet innehåller felaktiga tecken");
            setIfValid = false;
        } else {
            setLastnameError("");
            setIfValid = true;
        }

        return setIfValid;
    }

    const emailValidation = () => {
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        let setIfValid; 

        if( regEx.test(props.email)) {
            setIfValid = true;
        } else if( !regEx.test(props.email) && props.email !=""){
            setEmailError("Epostadressen du har angivit är inkorrekt.");
            setIfValid = false;
        } else {
            setEmailError("");
        }

        return setIfValid;
    }

    const phoneNumberValidation = () => {
        const regEx = /^[0-9\b]+$/;

        let setIfValid; 

        if(!regEx.test(props.phone)) {
            setPhoneError("Telefonnumret får endast innehålla siffor!");
            setIfValid = false;
        } else {
            setPhoneError("");
            setIfValid = true;
        }

        return setIfValid;
    }

    const checkValidations = () => {
        if(nameValidation() && lastnameValidation() && emailValidation() && phoneNumberValidation()){
            MessageForCompleteBooked();
        } 
    }

    const MessageForCompleteBooked = () => {
        alert("Din bokning är nu godkänd, Välkommen!");
      }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        nameValidation();
        lastnameValidation();
        emailValidation(); 
        phoneNumberValidation();
        checkValidations();
    }

    return(

        <Container>
            <form onSubmit={handleSubmit}>
            <InputContainer>
                <ErrorStyling>
                    <div>{nameError}</div>                   
                </ErrorStyling>
                <InputLabel>
                    Namn
                </InputLabel>
                <Input placeholder="Förnamn" value={props.name} onChange={props.onChange} name="name" required />
            </InputContainer>
            <InputContainer>
                <ErrorStyling>
                    <div>{lastnameError}</div>                   
                </ErrorStyling>
                <InputLabel>
                    Efternamn
                </InputLabel>
                <Input placeholder="Efternamn" value={props.lastname} onChange={props.onChange} name="lastname" required/>
            </InputContainer>
            <InputContainer>
                <ErrorStyling>
                    <div>{emailError}</div>
                </ErrorStyling>
                <InputLabel>
                    E-post
                </InputLabel>
                <Input placeholder="E-post" value={props.email} onChange={props.onChange} name="email" required/>
                    
            </InputContainer>
            <InputContainer>
                <ErrorStyling>
                    <div>{phoneError}</div>
                </ErrorStyling>
                <InputLabel>
                    Telefonnummer
                </InputLabel>
                <Input placeholder="Telefonnummer" value={props.phone} onChange={props.onChange} name="phone" required/>                
            </InputContainer>
            <CheckForGDPR>
            <input type="checkbox" name="" id="" required/>
            <LabelGDPR>Hur vi hanterar era personuppgifter(GDPR)</LabelGDPR>
            </CheckForGDPR>
            <ConfirmBookingButton onClick={ () => {props.onClick()}}><H3>Bekräfta bokning</H3></ConfirmBookingButton>
            </form>
        </Container>
    );
}