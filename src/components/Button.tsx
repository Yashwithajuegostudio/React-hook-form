import { FC } from "react";

const Button: FC<any> = ({ type, name, text, register, rules }) => {
  return (
    <button {...(register && register(name, rules))} type={type} name={name}>
      {text}
    </button>
  );
};
export default Button;
