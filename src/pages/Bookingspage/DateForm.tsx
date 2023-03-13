import { FormWrapper } from "./FormWrapper";
import { IBooking } from "../../models/IBooking";

type BookingFormProps = IBooking & {
  updateFields: (fields: Partial<IBooking>) => void;
};

export function DateForm({
  date,
  time,
  numberOfGuests,
  updateFields,
}: BookingFormProps) {
  return (
    <FormWrapper title="När vill du boka?">
      <label>Datum</label>
      <input
        autoFocus
        required
        type="text"
        value={date}
        onChange={(e) => updateFields({ date: e.target.value })}
      />
      <label>Tid</label>
      <input
        required
        type="text"
        value={time}
        onChange={(e) => updateFields({ time: e.target.value })}
      />
      <label>Antal personer</label>
      <input
        required
        type="number"
        value={numberOfGuests}
        onChange={(e) => updateFields({ numberOfGuests: e.target.value })}
      />
    </FormWrapper>
  );
}
