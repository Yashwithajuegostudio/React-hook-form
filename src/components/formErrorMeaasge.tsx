import React, { FC } from "react";

export type FormErrorMessageProps = {
  children?: any;
};

const FormErrorMessage: FC<any> = ({ children }) => <p>{children}</p>;
export default FormErrorMessage;
