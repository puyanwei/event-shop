import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "./DatePicker.scss";

interface DatePickerProps {
  name: string;
  label: string;
  min?: string;
  max?: string;
  datesTaken?: string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const DatePicker = ({
  name,
  label,
  min = "",
  max = "",
  datesTaken = [""],
  onChange,
}: DatePickerProps) => {
  const [isDuplicateDate, setIsDuplicateDate] = useState<boolean>(false);
  const errorMessage = `Sorry, but the date you have selected is unavailable. Please select another.`;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    if (datesTaken && datesTaken.some((date) => date === value)) {
      setIsDuplicateDate(true);
    } else {
      setIsDuplicateDate(false);
      onChange(e);
    }
  };

  return (
    <div className="margin-sm">
      <label htmlFor={name}>{label}</label>
      <div className="margin-md">
        <input
          type="date"
          id={name}
          name={name}
          min={min}
          max={max}
          onChange={onChangeHandler}
        />
      </div>
      {isDuplicateDate && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default DatePicker;
