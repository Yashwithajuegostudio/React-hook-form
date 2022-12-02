import React, { FC } from "react";
import { useForm } from "react-hook-form";
interface FormProps {
  children: JSX.Element[];
  onSubmit: Function | any;
  onError: Function | any;
  style: object;
}
const Form: FC<FormProps> = ({ children, onSubmit, onError, style }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} style={style}>
      {children?.map((element: JSX.Element, index: number) =>
        element?.props?.children?.length > 1 ? (
          <div key={index} style={{ display: "flex", flexDirection: "row" }}>
            {typeof element?.props?.children == "object" &&
              element?.props?.children.map((subChild: JSX.Element) => {
                return {
                  ...subChild,
                  props: { ...subChild.props, register, errors },
                };
              })}
          </div>
        ) : (
          {
            ...element,
            props: { ...element.props, register, errors },
          }
        )
      )}
    </form>
  );
};
export default Form;
