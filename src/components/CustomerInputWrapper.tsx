import { ChangeEvent } from "react";
import { Container } from "./styled/Container";
import { Input } from "./styled/Input";
import { InputContainer } from "./styled/InputContainer";
import { InputLabel } from "./styled/InputLabel";

interface ICustomerInputWrapperProps {
    name: string;
    lastname: string; 
    email: string;
    phone: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomerInputWrapper = (props: ICustomerInputWrapperProps) => {

    return(

        //<input placeholder="Förnamn" value={booking.customer.name} onChange={handleChange} name="customer.name"/>

        <Container>
            <InputContainer>
                <InputLabel>
                    Namn
                </InputLabel>
                <Input>
                     <input placeholder="Förnamn" value={props.name} onChange={props.onChange} name="customer.name"/>
                </Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>
                    Efternamn
                </InputLabel>
                <Input>
                     <input placeholder="Efternamn" value={props.lastname} onChange={props.onChange} name="customer.lastname"/>
                </Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>
                    E-post
                </InputLabel>
                <Input>
                     <input placeholder="E-post" value={props.email} onChange={props.onChange} name="customer.email"/>
                </Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>
                    Telefonnummer
                </InputLabel>
                <Input>
                     <input placeholder="Telefonnummer" value={props.phone} onChange={props.onChange} name="customer.phone"/>
                </Input>
            </InputContainer>
        </Container>
    );
}