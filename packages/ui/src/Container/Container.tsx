import clsx from "clsx";

import styles from "./styles.module.scss";
import { ContainerProps } from "./types";

export const Container = ({ children, className }: ContainerProps) => (
  <div className={clsx(className, styles.container)}>{children}</div>
);
