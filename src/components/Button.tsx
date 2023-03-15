import { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "primary" | "secondary";
  width?: "full" | "custom";
  borderType?: "halfCurved";
  disabled?: boolean;
  style?: object;
  backgroundColor?: string;
  color?: string;
  border?: string;
  name?: string;
  text?: string;
}
const Button: FC<ButtonProps> = ({ type, name, text, width }) => {
  return (
    // <button {...(register && register(name, rules))} type={type} name={name}>
    <ButtonStyle type={type} name={name} width={width}>
      {text}
    </ButtonStyle>
  );
};
export default Button;
const ButtonStyle = styled.button<ButtonProps>`
  width: ${(props) => (props.width === "full" ? "100%" : `auto`)};
  padding: 0.5rem 1.5rem;
`;
