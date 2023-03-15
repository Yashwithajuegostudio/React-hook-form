import React, { FC } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
interface FormProps {
  children: JSX.Element[];
  onSubmit: Function | any;
  onError: Function | any;
}

const Form: FC<FormProps> = ({ children, onSubmit, onError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit, onError)}>
      {children?.map((element: JSX.Element, index: number) =>
        Object.keys(element?.props?.children || {}).length > 0 ? (
          element?.type?.target === "div" ? (
            <FormBodyContainer key={index}>
              {typeof element?.props?.children == "object" &&
                element?.props?.children.map((subChild: JSX.Element) => {
                  return {
                    ...subChild,
                    props: { ...subChild.props, register, errors },
                  };
                })}
            </FormBodyContainer>
          ) : (
            <FormFooterContainer>
              {typeof element?.props?.children == "object" &&
                element?.props?.children.map((subChild: JSX.Element) => {
                  return {
                    ...subChild,
                    props: { ...subChild.props, register, errors },
                  };
                })}
            </FormFooterContainer>
          )
        ) : (
          {
            ...element,
            props: { ...element.props, register, errors },
          }
        )
      )}
    </FormContainer>
  );
};
export default Form;
const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  > * {
    flex: 0 0 50%;
  }
`;

const FormBodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormFooterContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
