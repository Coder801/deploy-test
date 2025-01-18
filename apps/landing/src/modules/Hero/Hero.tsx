import clsx from "clsx";
import { FC } from "react";
import Image from "next/image";

import { PixelBackground } from "@/ui/PixelBackground";
import { StarletBackground } from "@/ui/StarletBackground";
import { Typography, Container } from "@/ui";
import illustration from "./assets/image/illustration.svg";
import moon from "./assets/image/moon.svg";

import styles from "./styles.module.scss";

type HeroProps = {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <PixelBackground className={styles.topBackground} direction="bottom" />
    <StarletBackground className={styles.starlets} />

    <Container className={styles.container}>
      <Typography variant="h1" className={styles.title} color="secondary">
        SHIBA D.O.G.E
      </Typography>
      <Image
        src={illustration}
        className={styles.illustration}
        alt="illustration"
      />
      <Image src={moon} className={styles.moon} alt="moon" />
    </Container>

    <PixelBackground className={styles.bottomBackground} />
  </section>
);
