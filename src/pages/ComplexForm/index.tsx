import React, { FC, useState } from "react";
import Button from "../../components/Button";
import DropDown from "../../components/DropDown";
import Form from "../../components/Form";
import FormInput from "../../components/formInput";
import styled from "styled-components";
import {
  FormFooterContainer,
  FormInputContainer,
} from "../../../styles/globalStyles";

export const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Enter a valid email address.",
};
interface ComplexFormProps {
  FruitPickerDropDown: string;
  firstName: string;
  lastName: string;
  AutoCalc: string;
  eamil: string;
}
export interface DropDownOptionProps {
  value: string;
  label: string;
}
const ComplexForm: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const options: Array<DropDownOptionProps> = [
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
  const onSubmit = (data: ComplexFormProps) => {
    console.log(data, "data");
    reset();
    setFirstName("");
    setLastName("");
  };
  const onError = (errors: object) => console.log(errors);
  const reset = () => {
    setFirstName("");
    setLastName("");
  };

  return (
    <FormOuterContainer>
      <Form
        onSubmit={onSubmit}
        onError={onError}
        // reset={reset}
      >
        {/* <div> */}
        <Column>
          <DropDown
            name="FruitPickerDropDown"
            label="Fruit"
            options={options}
            style={{ width: "22rem", padding: " 0.3rem 0.5rem" }}
          />

          <FormInput
            id="firstName"
            type="text"
            name="firstName"
            label="First Name"
            placeholder="First Name"
            rules={{
              required: true,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value),
            }}
          />
        </Column>
        {/* </div>  */}

        <Column>
          <FormInput
            id="lastName"
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            rules={{
              required: true,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value),
            }}
          />

          <FormInput
            id="AutoCalc"
            type="text"
            name="autoCalc"
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
              required: true,
              pattern: emailPattern,
            }}
          />
        </Column>

        <FormFooterContainer>
          <Button type="reset" name="Reset" onClick={reset} text="Reset" />
          <Button type="submit" name="submit" text="Submit" />
        </FormFooterContainer>
      </Form>
    </FormOuterContainer>
  );
};
export default ComplexForm;

export const FormOuterContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 4rem;
`;

export const Column = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;
