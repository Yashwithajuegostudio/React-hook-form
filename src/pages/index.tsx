import React, { FC } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../components/formInput";

export type RegistrationFormFields = {
  firstName: string;
  lastName: string;
  email: string;
};

export const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Enter a valid email address.",
};

const RegistrationForm: FC<any> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log("submitting...", data);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <FormInput
        id="firstName"
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        register={register}
        rules={{ required: "enter your first name." }}
        errors={errors}
      />

      <FormInput
        id="lastName"
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
        register={register}
        rules={{ required: "enter your last name." }}
        errors={errors}
      />

      <FormInput
        id="email"
        type="email"
        name="email"
        label="Email Address"
        placeholder="Email Address"
        register={register}
        rules={{
          required: "enter your email address.",
          pattern: emailPattern,
        }}
        errors={errors}
      />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};
export default RegistrationForm;
