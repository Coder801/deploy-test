import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import styles from "./styles.module.scss";
import { LIST } from "./constants";

type MascotListProps = {
  className?: string;
};

export const MascotList: FC<MascotListProps> = ({ className }) => (
  <div className={clsx(className, styles.container)}>
    <div className={styles.list}>
      {LIST.map(({ image, value }) => (
        <div className={styles.row} key={value}>
          <Image src={image} alt="value" />
          <div className={styles.caption}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);
