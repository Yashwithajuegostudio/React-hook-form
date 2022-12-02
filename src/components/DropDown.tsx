import { FC } from "react";
import { DropDownOptionProps } from "../pages/ComplexForm";

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
    <>
      <label>{label}</label>
      <select {...(register && register(name, rules))} style={style}>
        {/* <select style={style}> */}
        <option value="">{name}</option>
        {options.map((option: any, index: number) => (
          <option key={index}>{option.label}</option>
        ))}
      </select>
    </>
  );
};
export default DropDown;
