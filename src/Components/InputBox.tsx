import { ChangeEventHandler } from "react";

interface InputBoxProps {
  name: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const InputBox = ({
  name,
  label,
  onChange,
  placeholder = "",
}: InputBoxProps) => {
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
        />
      </div>
    </div>
  );
};

export default InputBox;
