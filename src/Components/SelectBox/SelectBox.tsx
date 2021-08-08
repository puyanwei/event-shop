import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "./SelectBox.scss";

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
}: SelectBoxProps) => (
  <div className="margin-md">
    <div className="margin-md">
      <label htmlFor={name}>{label}</label>
    </div>
    <select name={name} id={name} onChange={onChange} required={!optional}>
      <option value=""></option>
      {options.map((choice, index) => (
        <option key={index} value={choice}>
          {choice}
        </option>
      ))}
    </select>
    <div className="rectangle margin-sm"></div>
  </div>
);

export default SelectBox;
