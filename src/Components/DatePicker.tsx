import { ChangeEventHandler } from "react";

interface DatePickerProps {
  name: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  min?: string;
  max?: string;
}

const DatePicker = ({
  name,
  label,
  onChange,
  min = "",
  max = "",
}: DatePickerProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type="date"
          id={name}
          name={name}
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default DatePicker;
