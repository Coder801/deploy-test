import clsx from "clsx";

import { CardProps } from "./types";

import styles from "./styles.module.scss";

export const Card = ({ children, className, type = 1 }: CardProps) => (
  <div className={clsx(className, styles.container, styles[`type-${type}`])}>
    {children}
  </div>
);
