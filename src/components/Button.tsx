import { FC } from "react";

const Button: FC<any> = ({ type, name, text }) => {
  return (
    <button type={type} name={name}>
      {text}
    </button>
  );
};
export default Button;
