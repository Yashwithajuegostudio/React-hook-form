import React, { FC } from "react";
import Input from "./Input";

const FormInput: FC<any> = ({
  name,
  register,
  rules,
  label,
  errors,
  ...props
}): JSX.Element => {
  return (
    <div>
      <label>{label}</label>
      <Input name={name} {...props} {...(register && register(name, rules))} />
    </div>
  );
};
export default FormInput;
