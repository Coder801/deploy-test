import clsx from "clsx";

import { BadgeProps } from "./types";

import styles from "./styles.module.scss";

export const Badge = ({
  children,
  className,
  color = "primary",
}: BadgeProps) => (
  <div className={clsx(className, styles.container, styles[color])}>
    {children}
  </div>
);
