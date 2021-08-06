import { FormEvent, useState } from "react";
import DatePicker from "../../../Components/DatePicker";
import TextBox from "../../../Components/TextBox";

interface AttendEventFormData {
  firstName: string;
  familyName: string;
  eventDate: Date;
}

export const AttendEventForm = () => {
  const [formValues, setFormValues] = useState<AttendEventFormData>({
    firstName: "",
    familyName: "",
    eventDate: new Date(),
  });

  const onChange = (e: FormEvent<EventTarget>) => {
    const { value, name } = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form>
      <TextBox
        name="firstName"
        label="First Name"
        placeholder="e.g. Brian"
        onChange={onChange}
      />
      <TextBox name="familyName" label="Family Name" onChange={onChange} />
      <DatePicker
        name="eventDate"
        label="Choose a day"
        min="2019-08-5"
        max="2019-09-13"
        datesTaken={["2019-08-07", "2019-08-20", "2019-09-01"]}
        onChange={onChange}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </form>
  );
};
