"use client";

import clsx from "clsx";

import { PixelBackgroundProps } from "./types";

import styles from "./styles.module.scss";

export const PixelBackground = ({
  className,
  type = 1,
  direction = "top",
}: PixelBackgroundProps) => (
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
