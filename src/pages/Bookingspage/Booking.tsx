import { ReactElement, useState } from "react";
import MultiStepForm from "./MultiStepForm";

export default function Booking() {
  const { steps, currentStepIndex } = MultiStepForm([]);
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1 px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form></form>
    </div>
  );
}
