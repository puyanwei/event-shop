import { ChangeEventHandler } from "react";

interface TextBoxProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: "email" | "tel" | "text";
  optional?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const TextBox = ({
  name,
  label,
  placeholder = "",
  type = "text",
  optional = false,
  onChange,
}: TextBoxProps) => {
  return (
    <div>
      <div className="flex-space-inbetween">
        <label htmlFor={name}>{label}</label>
        {optional && <span>OPTIONAL</span>}
      </div>
      <div>
        <input
          type={type}
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
