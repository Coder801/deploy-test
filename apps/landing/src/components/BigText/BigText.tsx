import clsx from "clsx";
import { FC } from "react";

import { Typography } from "@/ui";

import styles from "./styles.module.scss";

type BigTextProps = {
  className?: string;
};

export const BigText: FC<BigTextProps> = ({ className }) => (
  <Typography variant="h1" className={clsx(className, styles.container)}>
    <span className={styles.first}>shiba</span>{" "}
    <span className={styles.last}>DOGE</span>
  </Typography>
);
