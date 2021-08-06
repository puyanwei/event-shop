import { ChangeEventHandler } from "react";

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
    <div>
      <input
        type="checkbox"
        id={name}
        name={name}
        required={optional}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
