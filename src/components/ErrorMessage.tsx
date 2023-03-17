import { error } from "console";
import { errorInputMessages } from "../consts/error";

interface IErrorMessageProps {
    name: string;
    lastname: string; 
    email: string;
    phone: string;
}

export const ErrorMessage = (props: IErrorMessageProps) => {

    const checkValidation = () => {
        if(props.name === ""){
          console.log(errorInputMessages.name);
        }
      
        if(props.lastname === ""){
          console.log(errorInputMessages.lastname);
        }
        if(props.email === ""){
          console.log(errorInputMessages.email);
        }
        if(props.phone === ""){
          console.log(errorInputMessages.phone);
        } 
      }

    return(
        <>
            {errorInputMessages.name}
        </>
    );
}