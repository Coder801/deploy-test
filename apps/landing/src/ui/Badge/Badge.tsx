import clsx from "clsx";
import { FC } from "react";

import { BadgeProps } from "./types";

import styles from "./styles.module.scss";

export const Badge: FC<BadgeProps> = ({
  children,
  className,
  color = "primary",
}) => (
  <div className={clsx(className, styles.container, styles[color])}>
    {children}
  </div>
);
