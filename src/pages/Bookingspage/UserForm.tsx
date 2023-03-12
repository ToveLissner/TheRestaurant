import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  NumberOfGuests: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  NumberOfGuests,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="Information för bokning av bord">
      <label>Förnamn</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Efternamn</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Antal personer</label>
      <input
        required
        min={1}
        type="number"
        value={NumberOfGuests}
        onChange={(e) => updateFields({ NumberOfGuests: e.target.value })}
      />
    </FormWrapper>
  );
}
