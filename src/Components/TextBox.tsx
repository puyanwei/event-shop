import { ChangeEventHandler } from "react";

interface TextBoxProps {
  name: string;
  label: string;
  placeholder?: string;
  optional?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const TextBox = ({
  name,
  label,
  placeholder = "",
  optional = false,
  onChange,
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
