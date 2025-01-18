import clsx from "clsx";

import styles from "./styles.module.scss";
import { TypographyProps } from "./types";

export const Typography = ({
  type = 1,
  color = "primary",
  variant = "p",
  className,
  children,
  strong,
  style,
  onClick,
}: TypographyProps) => {
  const Component = variant;

  const current = variant === "p" ? "paragraph" : `header-${variant}`;
  const currentClass = color ? `${current}-${color}` : "";

  const classes = clsx(styles[currentClass], styles[`type-${type}`], className);

  return (
    <Component className={classes} style={style} onClick={onClick}>
      {strong ? <strong>{children}</strong> : children}
    </Component>
  );
};
