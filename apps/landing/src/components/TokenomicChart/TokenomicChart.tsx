import clsx from "clsx";
import { kebabCase } from "lodash";
import Image from "next/image";
import { FC } from "react";

import { Typography } from "@/ui";

import chartPlaceholder from "./assets/image/chart-placeholder.svg";
import { info } from "./constants";
import styles from "./styles.module.scss";

type TokenomicChartProps = {
  className?: string;
};

export const TokenomicChart: FC<TokenomicChartProps> = ({ className }) => (
  <div className={clsx(className, styles.container)}>
    <div className={styles.chart}>
      <Image className={styles.image} src={chartPlaceholder} alt="chart" />

      {info.map(({ value, title }) => (
        <div
          key={title}
          className={clsx(styles.caption, styles[kebabCase(title)])}
        >
          <Typography type={2}>
            <strong>{value}</strong>
          </Typography>
          <Typography type={2}>{title}</Typography>
        </div>
      ))}
    </div>
  </div>
);
