import { FormEvent, useState } from "react";
import { DateForm } from "./DateForm";
import { MultiStepForm } from "./MultiStepForm";
import { ICustomer } from "../../models/ICustomer";
import { IBooking } from "../../models/IBooking";
import { CustomerInfoForm } from "./CustomerInfoForm";

type FormData = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  numberOfGuests: string;
  date: string;
  time: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  numberOfGuests: "",
  date: "",
  time: "",
};

export const createCustomer: ICustomer[] = [];
export const createBooking: IBooking[] = [];

export function Booking() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    MultiStepForm([
      <DateForm {...data} updateFields={updateFields} />,
      <CustomerInfoForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Bokning slutförd!");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Tillbaka
            </button>
          )}
          <button type="submit">{isLastStep ? "Boka bord" : "Nästa"}</button>
        </div>
      </form>
    </div>
  );
}
