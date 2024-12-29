"use client";
import { useState } from "react";

// import { Avatar } from '../Avatar'
import { Typography } from "../Typography";
import styles from "./input.module.scss";

interface InutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  validation?: string;
  field?: any;
  form?: any;
  prefixIcon?: React.ReactNode;
  postfixIcon?: React.ReactNode;
  name?: string;
  variant?: string;
  componentName: string;
  unit?: "meter";
}

export const Input: React.FC<InutProps> = ({
  type = "text",
  field,
  form,
  variant = "",
  unit,
  componentName,
  ...props
}) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="relative ">
        <input
          {...props}
          {...field}
          type={type && show ? "text" : type}
          className={[
            styles[variant],
            form?.touched[componentName] && form?.errors[componentName]
              ? styles?.hasError
              : "",
          ].join(" ")}
        />
        {unit && (
          <div className="absolute left-3 top-3">
            <Typography variant="checkbox">متر</Typography>
          </div>
        )}
        {form?.touched[componentName] && form?.errors[componentName] && (
          <span className="flex mt-1.5 gap-1 text-po_red text-xs items-center font-normal">
            {/* <Avatar src="/icon/info-circle.svg" /> */}
            {form?.errors[componentName]}
          </span>
        )}
        {type === "password" && (
          <span className={styles.inputIcon}>
            {show ? (
              <span className="icon-Show" onClick={() => handleToggle()}></span>
            ) : (
              <span className="icon-Hide" onClick={() => handleToggle()}></span>
            )}
          </span>
        )}
      </div>
    </>
  );
};
