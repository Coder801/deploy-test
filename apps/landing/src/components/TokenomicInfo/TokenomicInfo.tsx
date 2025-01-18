import clsx from "clsx";
import { FC } from "react";

import { Typography } from "@/ui";

import { info } from "./constants";
import styles from "./styles.module.scss";

type TokenomicInfoProps = {
  className?: string;
};

export const TokenomicInfo: FC<TokenomicInfoProps> = ({ className }) => (
  <div className={clsx(className, styles.container)}>
    <ul className={styles.info}>
      {info.map(({ value, title, text }) => (
        <li key={title} className={styles.item}>
          <i className={styles.bullet} />

          <div className={styles.title}>
            <Typography>{title}</Typography>
            <Typography type={2}>{value}</Typography>
          </div>
          <Typography type={2}>{text}</Typography>
        </li>
      ))}
    </ul>
  </div>
);
