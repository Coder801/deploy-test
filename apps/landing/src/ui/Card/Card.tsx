import clsx from "clsx";
import { FC } from "react";

import { CardProps } from "./types";

import styles from "./styles.module.scss";

export const Card: FC<CardProps> = ({ children, className, type = 1 }) => (
  <div className={clsx(className, styles.container, styles[`type-${type}`])}>
    {children}
  </div>
);
