import { ChangeEvent, useState } from "react";
import CheckBox from "../../../Components/Checkbox";
import DatePicker from "../../../Components/DatePicker";
import SelectBox from "../../../Components/SelectBox";
import TextBox from "../../../Components/TextBox";

interface AttendEventFormData {
  firstName: string;
  familyName: string;
  eventDate: Date;
  numberOfAttendees: number;
  companyName: string;
  telephone: string;
  needsWheelchairAccess: boolean;
}

export const AttendEventForm = () => {
  const [formValues, setFormValues] = useState<AttendEventFormData>({
    firstName: "",
    familyName: "",
    eventDate: new Date(),
    numberOfAttendees: 0,
    companyName: "",
    telephone: "",
    needsWheelchairAccess: false,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: value });
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target as HTMLSelectElement;
    setFormValues({ ...formValues, [name]: value });
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: checked });
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
      <SelectBox
        name="numberOfAttendees"
        label={"Number of attendees"}
        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        onChange={onChangeSelect}
      />
      <TextBox
        name="companyName"
        label="Company Name"
        placeholder="e.g. Stadion"
        optional
        onChange={onChange}
      />
      <TextBox name="email" label="Email" type="email" onChange={onChange} />
      <TextBox
        name="telephone"
        label="Telephone"
        type="tel"
        optional
        onChange={onChange}
      />
      <CheckBox
        name="needsWheelchairAccess"
        label="Do you need wheelchair access?"
        onChange={onChangeChecked}
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
