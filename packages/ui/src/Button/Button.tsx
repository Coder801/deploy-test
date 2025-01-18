"use client";

import clsx from "clsx";

import styles from "./styles.module.scss";
import { ButtonProps } from "./types";

export const Button = ({
  children,
  href,
  className,
  onClick,
  size = "medium",
  color = "primary",
  type = "button",
  disabled,
}: ButtonProps) => {
  const classes = clsx(
    className,
    styles.container,
    styles[size],
    styles[color],
    {
      [styles.disabled as string]: disabled,
    }
  );

  const onClickHandler = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const onLinkHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
    }
  };

  return href ? (
    <a
      href={disabled ? undefined : href}
      className={classes}
      onClick={onLinkHandler}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <button
      className={classes}
      type={type}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
