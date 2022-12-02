import React, { FC } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import FormInput from "../components/formInput";

export const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Enter a valid email address.",
};
interface logInProps {
  firstName: string;
  lastName: string;
}

const ComplexForm: FC = () => {
  const onSubmit = (data: logInProps) => {
    console.log(data);
  };
  const onError = (errors: object) => console.log(errors);

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        onError={onError}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FormInput
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          placeholder="First Name"
          rules={{
            required: "enter your first name.",
          }}
        />
        <FormInput
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          rules={{
            required: "enter your last name.",
          }}
        />
        <Button type="submit" name="submit" text="Submit" />
      </Form>
    </div>
  );
};
export default ComplexForm;
