"use client";

import clsx from "clsx";
import { FC } from "react";
import { ButtonProps } from "./types";

import styles from "./styles.module.scss";

export const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  onClick,
  size = "medium",
  color = "primary",
  type = "button",
  disabled,
}) => {
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
