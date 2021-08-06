import { ChangeEventHandler } from "react";
import "./Checkbox.scss";

interface CheckBoxProps {
  name: string;
  label: string;
  optional?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckBox = ({
  name,
  label,
  optional = false,
  onChange,
}: CheckBoxProps) => {
  return (
    <div className="checkbox-container margin-md">
      <input
        type="checkbox"
        id={name}
        name={name}
        required={optional}
        onChange={onChange}
      />
      <label className="checkbox-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
