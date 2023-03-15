import React, { FC, forwardRef } from "react";
import styled from "styled-components";

export type InputType = "text" | "email";

export interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  placeholder: string;
}

// eslint-disable-next-line react/display-name
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type = "text", placeholder, ...props }, ref) => {
    return (
      <InputBox
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
const InputBox = styled.input`
  padding: 0.3rem 0.5rem;
  width: 21rem;

  border: 1px solid #e4e6e8;
  border-radius: 8px;
`;
