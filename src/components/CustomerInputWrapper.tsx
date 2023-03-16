import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { errorInputMessages } from "../consts/error";
import { ConfirmBookingWrapper } from "./ConfirmBookingWrapper";
import { ErrorMessage } from "./ErrorMessage";
import { ConfirmBookingButton } from "./styled/ConfirmBookingButton";
import { Container } from "./styled/Container";
import { ErrorStyling } from "./styled/ErrorStyling";
import { H3 } from "./styled/H3";
import { Input } from "./styled/Input";
import { InputContainer } from "./styled/InputContainer";
import { InputLabel } from "./styled/InputLabel";

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

    const nameValidation = () => {
        if(/[!@#$%^&*(),.?":{}|<>]/g.test(props.name) || !/^[A-Z]/.test(props.name) || /\d+/g.test(props.name)) {
            setNameError("Förnamnet innehåller felaktiga tecken");
        } else {
            setNameError("");
        }
    }

    const lastnameValidation = () => {
        if(/[!@#$%^&*(),.?":{}|<>]/g.test(props.lastname) || !/^[A-Z]/.test(props.lastname) || /\d+/g.test(props.lastname)) {
            setLastnameError("Efternamnet innehåller felaktiga tecken");
        } else {
            setLastnameError("");
        }
    }

    const emailValidation = () => {
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if( regEx.test(props.email)) {
            setEmailError("Email is Correct ");
        } else if( !regEx.test(props.email) && props.email !=""){
            setEmailError("Email is NOT correct ");
        } else {
            setEmailError("");
        }
    }

    const phoneNumberValidation = () => {
        const regEx = /^[0-9\b]+$/;

        if(!regEx.test(props.phone)) {
            setPhoneError("Phonenumber is wrooong!");
        } else {
            setPhoneError("");
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(props.email);
        nameValidation();
        lastnameValidation();
        emailValidation(); 
        phoneNumberValidation();
    }

    return(

        //<input placeholder="Förnamn" value={booking.customer.name} onChange={handleChange} name="customer.name"/>

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
            {/* <ConfirmBookingWrapper onClick={confirmBookingClick}></ConfirmBookingWrapper> */}
            <ConfirmBookingButton onClick={ () => {props.onClick()}}><H3>Bekräfta bokning</H3></ConfirmBookingButton>
            </form>
        </Container>
    );
}