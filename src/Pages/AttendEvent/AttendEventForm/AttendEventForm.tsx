import { FormEvent, useState } from "react";
import InputBox from "../../../Components/InputBox";

interface AttendEventFormData {
  firstName: string;
}

export const AttendEventForm = () => {
  const [formValues, setFormValues] = useState<AttendEventFormData>({
    firstName: "",
  });

  const onChange = (e: FormEvent<EventTarget>) => {
    const { value, name } = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form>
      <InputBox
        name="firstName"
        label="First Name"
        placeholder="e.g. Brian"
        onChange={onChange}
      />
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </form>
  );
};
