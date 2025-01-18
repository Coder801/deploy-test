"use client";

import clsx from "clsx";
import { FC } from "react";

import { PixelBackgroundProps } from "./types";

import styles from "./styles.module.scss";

export const PixelBackground: FC<PixelBackgroundProps> = ({
  className,
  type = 1,
  direction = "top",
}) => (
  <div
    className={clsx(
      className,
      styles.container,
      styles[direction],
      styles[`type-${type}`]
    )}
  >
    <div className={styles.background} />
  </div>
);
