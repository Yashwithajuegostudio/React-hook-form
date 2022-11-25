import React, { FC } from "react";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import Form from "../components/Form";
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
  const options = [
    {
      value: "Apple 1",
      label: "Apple l1",
    },
    {
      value: "Apple 2",
      label: "Apple 22",
    },
    {
      value: "Apple 3",
      label: "Apple 33",
    },
  ];

  return (
    <>
      <Form>
        <DropDown name="Fruit picker" label="Fruit" options={options} />
        <FormInput
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          placeholder="First Name"
          rules={{ required: "enter your first name." }}
        />
        <FormInput
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          rules={{ required: "enter your last name." }}
        />
        <FormInput
          id="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="Email Address"
          rules={{
            required: "enter your email address.",
            pattern: emailPattern,
          }}
        />
        <Button type="submit" name="submit" text="Submit" />
        <button type="reset">Reset</button>
      </Form>
      <DropDown name="Fruit picker" label="Fruit" options={options} />
    </>
  );
};
export default RegistrationForm;
