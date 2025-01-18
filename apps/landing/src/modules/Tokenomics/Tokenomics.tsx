import clsx from "clsx";
import { FC } from "react";

import { PixelBackground } from "@/ui/PixelBackground";
import { TokenomicChart } from "@/components/TokenomicChart";
import { TokenomicInfo } from "@/components/TokenomicInfo";

import { Typography, Container } from "@/ui";

import styles from "./styles.module.scss";

type TokenomicsProps = {
  className?: string;
};

export const Tokenomics: FC<TokenomicsProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <PixelBackground
      className={styles.topBackground}
      type={3}
      direction="bottom"
    />
    <Container className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Cryptocurrencies?
      </Typography>
      <Typography className={styles.text}>
        TOKENOMICS 69 BILLION MEME WILL BE MINTED IN TOTAL. THEY WILL BE
        DISTRIBUTED INTO 7 MAIN POOLS, EACH WITH DIFFERENT UNLOCKING SCHEDULES.
      </Typography>

      <div className={styles.content}>
        <TokenomicChart className={styles.chart} />
        <TokenomicInfo className={styles.info} />
      </div>
    </Container>
  </section>
);
