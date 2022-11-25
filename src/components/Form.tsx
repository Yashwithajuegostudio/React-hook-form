import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { RegistrationFormFields } from "../pages";
const Form: FC<any> = ({ children }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log("submited", data);
    reset();
  });
  return (
    <form onSubmit={onSubmit}>
      {children?.map((element: any) => {
        return {
          ...element,
          props: { ...element.props, register, errors },
        };
      })}
    </form>
  );
};
export default Form;
