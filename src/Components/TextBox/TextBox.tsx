import { ChangeEventHandler } from "react";
import "./TextBox.scss";

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
}: TextBoxProps) => (
  <div className="margin-md">
    <div className="flex-space-inbetween margin-sm">
      <label htmlFor={name}>{label}</label>
      {optional && <span className="optional">OPTIONAL</span>}
    </div>
    <div className="input-container">
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

export default TextBox;
