import React, { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";
import Input from "./Input";
import FormErrorMessage from "./formErrorMeaasge";
import {
  DeepMap,
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

// types are provided in the documentation for FormInputProps
// once if the implementation is approved then I will add types

export type FormInputProps = {
  name: any;
  rules?: any;
  register?: any;
  errors?: any;
  label?: string;
};

const FormInput: FC<any> = ({
  name,
  register,
  rules,
  label,
  errors,
  ...props
}): JSX.Element => {
  const hasError = !!errors;

  return (
    <div>
      <label>{label}</label>
      <Input
        name={name}
        aria-invalid={hasError}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  );
};
export default FormInput;
