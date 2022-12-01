import React, { FC } from "react";
import { useForm } from "react-hook-form";
const Form: FC<any> = ({ children, onSubmit, onError, style }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} style={style}>
      {children?.map((element: any) =>
        element?.props?.children?.length > 1 ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {typeof element?.props?.children == "object" &&
              element?.props?.children.map((subChild: any) => {
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
