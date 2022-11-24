import React, { FC } from "react";

export type FormErrorMessageProps = {
  children?: any;
};

const FormErrorMessage: FC<FormErrorMessageProps> = ({ children }) => (
  <p>{children}</p>
);
export default FormErrorMessage;
