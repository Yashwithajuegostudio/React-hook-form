import React, { FC, forwardRef } from "react";

export type InputType = "text" | "email";

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  placeholder: string;
};

const Input: FC<any> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type = "text", placeholder, ...props }, ref) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);
export default Input;
