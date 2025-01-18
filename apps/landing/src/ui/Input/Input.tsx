import clsx from "clsx";
import { FC } from "react";
import { Field } from "formik";

import { InputProps } from "./types";

import styles from "./styles.module.scss";

export const Input: FC<InputProps> = ({
  name,
  type = "input",
  placeholder,
  className,
}) => (
  <Field
    name={name}
    as={type}
    placeholder={placeholder}
    className={clsx(className, styles[type])}
  />
);
