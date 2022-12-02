import { FC } from "react";

const Button: FC<any> = ({ type, name, text }) => {
  return (
    // <button {...(register && register(name, rules))} type={type} name={name}>
    <button type={type} name={name}>
      {text}
    </button>
  );
};
export default Button;
