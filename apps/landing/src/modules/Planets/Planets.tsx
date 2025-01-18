import clsx from "clsx";
import { FC } from "react";
import Image from "next/image";

import planets from "./assets/image/planets.svg";

import { Typography, Container, Card } from "@/ui";

import styles from "./styles.module.scss";

type PlanetsProps = {
  className?: string;
};

export const Planets: FC<PlanetsProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <Container className={styles.container}>
      <Image src={planets} className={styles.image} alt="planets" />
      <div className={styles.content}>
        <Typography variant="h2" className={styles.title}>
          It&apos;s always <br /> meme season
        </Typography>

        <Typography className={styles.text} type={2} color="secondary">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi.
        </Typography>
        <Typography variant="h4" type={2} className={styles.subtitle}>
          Decentralized
        </Typography>
        <Card className={styles.card}>
          <Typography type={2} color="secondary">
            HOW TO GET A WAITLIST CODE?
          </Typography>
          <ol>
            <li>BEG CAPTAINZ AND POTATOZ HOLDERS FOR WAITLIST CODE.</li>
            <li>EACH CAPTAINZ HAS 5 CODES; EACH POTATOZ HAS 1 CODE.</li>
            <li>LIKE A CONDOM, EACH CODE CAN ONLY BE USED ONCE.</li>
            <li>EACH CODE CAN REDEEM 1 WAITLIST SPOT.</li>
          </ol>
          <Typography type={2} color="secondary">
            A WISE MAN ONCE SAID: &quot;WAITLIST CODES ARE LIKE STD—THEY ARE
            MEANT TO BE SHARED&quot;.
          </Typography>
        </Card>
        <Typography variant="h4" type={2} className={styles.subtitle}>
          Scable
        </Typography>
        <Card className={styles.card}>
          <Typography type={2} color="secondary">
            MVP, CAPTAINZ & POTATOZ HOLDERS <br /> YOU&apos;RE WELCOME, BUT MAKE
            SURE YOUR NFTS ARE IN YOUR WALLETS BEFORE THE SNAPSHOT DATE OCT 25
            11:00PM (UTC+8). ALLOTMENTS ARE AS FOLLOWS:
          </Typography>
          <Typography type={2} color="secondary">
            HOW TO GET A WAITLIST CODE?
          </Typography>
          <ol>
            <li>
              MVP: YOU ARE ON THE ALLOWLIST WITH 12 LOTS PER NFT GUARANTEED.
            </li>
            <li>
              CAPTAINZ: YOU ARE ON THE ALLOWLIST WITH GUARANTEES BASED ON YOUR
              SPECIES.
              <ul>
                <li>ALIEN: 10 LOTS PER NFT </li>
                <li>KAIJU OR KONG: 3 LOTS PER NFT </li>
                <li>SHARK OR KRAKEN: 2 LOTS PER NFT </li>
                <li>HUMAN OR UNREVEALED: 1 LOT PER NFT </li>
              </ul>
            </li>
            <li>
              POTATOZ: 1 LOT PER NFT FOR LUCKY WAITLIST DEPOSIT WALLETS, CHOSEN
              AT RANDOM.
            </li>
          </ol>
        </Card>
      </div>
    </Container>
  </section>
);
