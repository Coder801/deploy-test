import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import { Typography } from "@/ui";

import logoImg from "./assets/image/logo.svg";
import styles from "./styles.module.scss";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => (
  <div className={clsx(className, styles.container)}>
    <Image className={styles.logo} src={logoImg} alt="Logo" />
    <Typography type={2} strong>
      SHIBA D.O.G.E
    </Typography>
  </div>
);
