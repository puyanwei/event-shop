import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface SelectBoxProps {
  name: string;
  label: string;
  placeholder?: string;
  optional?: boolean;
  options: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const SelectBox = ({
  name,
  label,
  optional = false,
  options,
  onChange,
}: SelectBoxProps) => {
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setHasClicked(true);
    onChange(e);
  };

  return (
    <div className="margin-md">
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <select
        name={name}
        id={name}
        onChange={onChangeHandler}
        required={!optional}
      >
        {!hasClicked && <option selected value=""></option>}
        {options.map((choice, index) => (
          <option key={index} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
