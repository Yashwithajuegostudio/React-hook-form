import React, { FC, forwardRef } from "react";

export type InputType = "text" | "email";

export interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  placeholder: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
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
