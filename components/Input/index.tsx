"use client";
import { useState } from "react";

// import { Avatar } from '../Avatar'
import { Typography } from "../Typography";
import styles from "./input.module.scss";

interface InutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  validation?: string;
  error?: string[] | undefined;
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
  error,
  ...props
}) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };
  console.log("error=", error);
  return (
    <>
      <div className="relative ">
        <input
          {...props}
          {...field}
          type={type && show ? "text" : type}
          className={[
            styles[variant],
            error?.length ? styles?.hasError : "",
          ].join(" ")}
        />
        {unit && (
          <div className="absolute left-3 top-3">
            <Typography variant="checkbox">متر</Typography>
          </div>
        )}
        {error?.length && (
          <div>
            <ul className="flex flex-col mt-1.5 gap-1 text-ex_error-100 text-xs font-normal">
              {/* <Avatar src="/icon/info-circle.svg" /> */}
              {error.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
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
