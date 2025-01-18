import clsx from "clsx";
import { FC } from "react";

import { Container, Typography } from "@/ui";
import { StarletBackground } from "@/ui/StarletBackground";
import { PixelBackground } from "@/ui/PixelBackground";
import { Accordion } from "@/components/Accordion";
import { ContactForm } from "@/components/ContactForm";

import { ABOUT } from "./constants";
import styles from "./styles.module.scss";

type FAQProps = {
  className?: string;
};

export const FAQ: FC<FAQProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <StarletBackground className={styles.starlets} pattern={3} />
    <Container className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        ALL ABOUT shiba
      </Typography>
      {ABOUT.map(({ title, text }) => (
        <Accordion key={title} title={title} className={styles.accordion}>
          {text}
        </Accordion>
      ))}

      <ContactForm className={styles.form} />
    </Container>
    <PixelBackground className={styles.bottomBackground} type={4} />
  </section>
);
