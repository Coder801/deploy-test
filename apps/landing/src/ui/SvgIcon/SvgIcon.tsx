"use client";

import clsx from "clsx";

import Image from "next/image";

import { Icons } from "./constants";
import { SvgIconProps } from "./types";

import styles from "./styles.module.scss";

export const SvgIcon = ({
  name,
  className,
  onClick = () => {},
  ...props
}: SvgIconProps) => {
  const { src, width = props.width, height = props.height } = Icons[name];

  return (
    <Image
      src={src}
      alt={name}
      width={width}
      height={height}
      className={clsx(styles.icon, className)}
      onClick={onClick || undefined}
    />
  );
};
