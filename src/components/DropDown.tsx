import { FC } from "react";
const DropDown: FC<any> = ({
  options,
  label,
  disabled = false,
  name,
  register,
  rules,
}) => {
  return (
    <>
      <label>{label}</label>
      <select {...(register && register(name, rules))}>
        <option value="">{name}</option>
        {options.map((option: any, index: number) => (
          <option key={index} disabled={disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
export default DropDown;
