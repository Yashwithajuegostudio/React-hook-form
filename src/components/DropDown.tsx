import { FC } from "react";
import { DropDownOptionProps } from "../pages/ComplexForm";
import { FormInputContainer } from "../../styles/globalStyles";
import styled from "styled-components";

interface DropDownProps {
  options: DropDownOptionProps[];
  label?: string;
  disabled?: boolean;
  name?: string;
  register?: Function;
  style?: object;
  rules?: object;
}
const DropDown: FC<DropDownProps> = ({
  options,
  label,
  name,
  register,
  style,
  rules,
}) => {
  return (
    <FormInputContainer>
      <label>{label}</label>
      <select {...(register && register(name, rules))} style={style}>
        {/* <select style={style}> */}
        <option value="">{name}</option>
        {options.map((option: any, index: number) => (
          <option key={index}>{option.label}</option>
        ))}
      </select>
    </FormInputContainer>
  );
};
export default DropDown;
