import React, { FC } from "react";
import Input from "./Input";
import { RegisterOptions } from "react-hook-form";
import styled from "styled-components";
import { FormInputContainer } from "../../styles/globalStyles";

export type FormInputProps = {
  id?: string;
  type: string;
  placeholder?: string;
  name: string;
  rules?: RegisterOptions;
  register?: Function;
  label?: string;
  value?: string;
  style?: object;
};
const FormInput: FC<FormInputProps> = ({
  id,
  type,
  placeholder,
  style,
  name,
  register,
  rules,
  value,
  label,
  ...props
}: FormInputProps): JSX.Element => {
  return (
    <FormInputContainer>
      <label>{label}</label>
      <Input name={name} {...props} {...(register && register(name, rules))} />
    </FormInputContainer>
  );
};
export default FormInput;
