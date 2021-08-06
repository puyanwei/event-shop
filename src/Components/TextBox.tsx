import { ChangeEventHandler } from "react";

interface TextBoxProps {
  name: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  optional?: boolean;
}

const TextBox = ({
  name,
  label,
  onChange,
  placeholder = "",
  optional = false,
}: TextBoxProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type="text"
          id={name}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={!optional}
        />
      </div>
    </div>
  );
};

export default TextBox;
