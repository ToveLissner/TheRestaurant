import { FormWrapper } from "./FormWrapper";
import { ICustomer } from "../../models/ICustomer";

type UserFormProps = ICustomer & {
  updateFields: (fields: Partial<ICustomer>) => void;
};

export function CustomerInfoForm({
  name,
  lastname,
  email,
  phone,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="Information för bokning av bord">
      <label>Förnamn</label>
      <input
        autoFocus
        required
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <label>Efternamn</label>
      <input
        required
        type="text"
        value={lastname}
        onChange={(e) => updateFields({ lastname: e.target.value })}
      />
      <label>Email</label>
      <input
        required
        type="text"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Telefonnummer</label>
      <input
        required
        min={10}
        type="text"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      />
    </FormWrapper>
  );
}
