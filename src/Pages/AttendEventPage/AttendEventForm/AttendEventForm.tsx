import { ChangeEvent, useState } from "react";
import CheckBox from "Components/Checkbox/Checkbox";
import DatePicker from "Components/DatePicker/DatePicker";
import SelectBox from "Components/SelectBox/SelectBox";
import TextBox from "Components/TextBox/TextBox";
import "./AttendEventForm.scss";

interface AttendEventFormData {
  firstName: string;
  familyName: string;
  eventDate: string;
  numberOfAttendees: number;
  companyName: string;
  email: string;
  telephone: string;
  needsWheelchairAccess: boolean;
}

const defaultFormValues = {
  firstName: "",
  familyName: "",
  eventDate: "",
  numberOfAttendees: 0,
  companyName: "",
  email: "",
  telephone: "",
  needsWheelchairAccess: false,
};

export const AttendEventForm = () => {
  const [formValues, setFormValues] =
    useState<AttendEventFormData>(defaultFormValues);
  const [price, setPrice] = useState<number>(0);
  const [formSubmissionSuccessMessage, setFormSubmissionSuccessMessage] =
    useState<string>("");

  const textBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: value });
  };

  const selectBoxHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target as HTMLSelectElement;

    const numberOfAttendees = parseInt(value);
    if (numberOfAttendees > 0 && numberOfAttendees < 4)
      setPrice(numberOfAttendees * 50);
    if (numberOfAttendees > 3 && numberOfAttendees < 7)
      setPrice(numberOfAttendees * 40);
    if (numberOfAttendees > 6) setPrice(numberOfAttendees * 35);

    setFormValues({ ...formValues, [name]: value });
  };

  const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: checked });
  };

  const showPriceSummary = Boolean(
    formValues.firstName &&
      formValues.familyName &&
      formValues.eventDate &&
      formValues.numberOfAttendees &&
      formValues.email
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    };
    fetch("https://www.mocky.io/v2/5d00cfff3200007d00f9d809", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(`data`, data);
        setFormSubmissionSuccessMessage(
          "Event successfully booked. Please check your your confirmation email."
        );
        setFormValues(defaultFormValues);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="attend-event-form">
      <TextBox
        name="firstName"
        label="First Name"
        placeholder="e.g. Brian"
        onChange={textBoxHandler}
      />
      <TextBox
        name="familyName"
        label="Family Name"
        onChange={textBoxHandler}
      />
      <DatePicker
        name="eventDate"
        label="Choose a day"
        min="2019-08-5"
        max="2019-09-13"
        datesTaken={["2019-08-07", "2019-08-20", "2019-09-01"]}
        onChange={textBoxHandler}
      />
      <SelectBox
        name="numberOfAttendees"
        label={"Number of attendees"}
        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        onChange={selectBoxHandler}
      />
      <TextBox
        name="companyName"
        label="Company Name"
        placeholder="e.g. Stadion"
        optional
        onChange={textBoxHandler}
      />
      <TextBox
        name="email"
        label="Email"
        type="email"
        onChange={textBoxHandler}
      />
      <TextBox
        name="telephone"
        label="Telephone"
        type="tel"
        optional
        onChange={textBoxHandler}
      />
      <CheckBox
        name="needsWheelchairAccess"
        label="Do you need wheelchair access?"
        onChange={checkboxHandler}
      />
      {showPriceSummary && (
        <>
          <div className="rectangle margin-xlg" />
          <div className="price-summary margin-lg">
            <div className="flex-space-inbetween">
              <span className="price-summary-category">Attendees</span>
              <span className="price-summary-result">
                {formValues.numberOfAttendees}
              </span>
            </div>
            <div className="price margin-lg">£{price}</div>
            <button className="submit-button" type="submit">
              Buy
            </button>
          </div>
        </>
      )}
      <br />
      <div className="success-message">{formSubmissionSuccessMessage}</div>
    </form>
  );
};
