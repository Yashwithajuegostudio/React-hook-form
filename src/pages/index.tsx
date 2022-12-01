import React, { FC, useState } from "react";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import Form from "../components/Form";
import FormInput from "../components/formInput";

export const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Enter a valid email address.",
};

const ComplexForm: FC<any> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
    setFirstName("");
    setLastName("");
  };
  const onError = (errors: any) => console.log(errors);
  const reset = () => {
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        onError={onError}
        reset={reset}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <>
          <DropDown name="Fruit picker" label="Fruit" options={options} />
          <FormInput
            id="firstName"
            type="text"
            name="firstName"
            label="First Name"
            placeholder="First Name"
            rules={{
              required: "enter your first name.",
              onChange: (e: any) => setFirstName(e.target.value),
            }}
          />
          <Button type="reset" name="Reset" onClick={reset} text="Reset" />
        </>
        <FormInput
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          rules={{
            required: "enter your last name.",
            onChange: (e: any) => setLastName(e.target.value),
          }}
        />
        <FormInput
          id="AutoCalc"
          type="text"
          name="AutoCalc"
          label="Auto calculate"
          placeholder="Auto Calculate"
          value={
            firstName !== "" || lastName !== "" ? firstName + lastName : ""
          }
          rules={{
            disabled: true,
          }}
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
      </Form>
      <DropDown name="Fruit picker" label="Fruit" options={options} />
    </div>
  );
};
export default ComplexForm;
