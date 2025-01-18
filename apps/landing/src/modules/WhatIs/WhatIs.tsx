import clsx from "clsx";
import { FC } from "react";
import Image from "next/image";

import { PixelBackground } from "@/ui/PixelBackground";
import { Typography, Container, Card, Button } from "@/ui";

import { MascotList } from "@/components/MascotList";

import cardImage from "./assets/image/card.svg";

import styles from "./styles.module.scss";

type WhatIsProps = {
  className?: string;
};

export const WhatIs: FC<WhatIsProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <PixelBackground className={styles.topBackground} direction="bottom" />
    <Container className={styles.container}>
      <Card className={styles.card} type={2}>
        <div className={styles.content}>
          <Typography variant="h2" className={styles.title}>
            what’s Shiba D.O.G.E?
          </Typography>

          <Typography className={styles.text} type={2}>
            Axie Infinity is a virtual world filled with cute, formidable
            creatures known as Axies. Axies can be battled, bred, collected, and
            even used to earn resources & collectibles that can be traded on an
            open marketplace.
          </Typography>

          <Typography className={styles.text} type={2}>
            Axie was designed to introduce the world to an exciting new
            technology called Blockchain, through a fun, nostalgic, & charming
            game.
          </Typography>

          <Button className={styles.button} color="primary">
            neiro how?
          </Button>
        </div>

        <Image src={cardImage} className={styles.image} alt="card" />
      </Card>

      <div className={styles.caption}>
        <Typography variant="h2">marketplace</Typography>
        <Typography>
          Trade or sell your shiba anyone, anyware. You own your shiba just like
          a phyhical trading or figurine.
        </Typography>
        <Button className={styles.button} color="primary" disabled>
          Comming soon
        </Button>
      </div>

      <MascotList className={styles.list} />
    </Container>
  </section>
);
