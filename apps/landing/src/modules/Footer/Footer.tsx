import clsx from "clsx";
import { FC } from "react";
import Image from "next/image";
import { Container, Typography, SvgIcon } from "@/ui";
import { BigText } from "@/components/BigText";

import logo from "./assets/image/logo.svg";
import { LINKS, SOCIALS } from "./constants";
import styles from "./styles.module.scss";

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={clsx(className, styles.section)}>
    <div className={styles.text}>
      <BigText />
    </div>
    <Container className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" />
      </div>
      <div className={styles.links}>
        {LINKS.map(({ id, text, icon, link }) => (
          <Typography key={id} className={styles.link} type={2}>
            <a href={link} target="_blank" rel="noreferrer">
              {text} {icon && <SvgIcon name={icon} />}
            </a>
          </Typography>
        ))}
      </div>
      <div className={styles.socials}>
        {SOCIALS.map(
          ({ id, icon, link }) =>
            icon && (
              <a href={link} key={id} target="_blank" rel="noreferrer">
                <SvgIcon name={icon} />
              </a>
            )
        )}
      </div>
      <Typography className={styles.copy} type={2}>
        © 2024 All rights reserved
      </Typography>
    </Container>
  </footer>
);
