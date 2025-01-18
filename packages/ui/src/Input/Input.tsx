import clsx from "clsx";
import { Field } from "formik";

import { InputProps } from "./types";

import styles from "./styles.module.scss";

export const Input = ({
  name,
  type = "input",
  placeholder,
  className,
}: InputProps) => (
  <Field
    name={name}
    as={type}
    placeholder={placeholder}
    className={clsx(className, styles[type])}
  />
);
