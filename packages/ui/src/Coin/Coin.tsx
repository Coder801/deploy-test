"use client";

import clsx from "clsx";

import { CoinProps } from "./types";

import styles from "./styles.module.scss";

export const Coin = ({ className, ref }: CoinProps) => (
  <div className={clsx(className, styles.container)}>
    <div className={styles.coin} ref={ref}>
      <div className={clsx(styles.face, styles.front)}></div>
      <div className={clsx(styles.face, styles.back)}></div>
      {Array.from({ length: 20 }).map((_, index) => (
        <figure key={index} className={styles.side}></figure>
      ))}
    </div>
  </div>
);
