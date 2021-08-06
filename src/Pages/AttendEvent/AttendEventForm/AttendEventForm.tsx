import { ChangeEvent, useState } from "react";
import DatePicker from "../../../Components/DatePicker";
import SelectBox from "../../../Components/SelectBox";
import TextBox from "../../../Components/TextBox";

interface AttendEventFormData {
  firstName: string;
  familyName: string;
  eventDate: Date;
  numberOfAttendees: number;
}

export const AttendEventForm = () => {
  const [formValues, setFormValues] = useState<AttendEventFormData>({
    firstName: "",
    familyName: "",
    eventDate: new Date(),
    numberOfAttendees: 0,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: value });
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target as HTMLSelectElement;
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
      <SelectBox
        name="numberOfAttendees"
        label={"Number of attendees"}
        onChange={onChangeSelect}
        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
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
