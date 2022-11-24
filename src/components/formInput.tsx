import React, { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";
import Input, { InputProps } from "./Input";
import FormErrorMessage from "./formErrorMeaasge";

export type FormInputProps = {
  name: any;
  rules?: any;
  register?: any;
  errors?: any;
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
