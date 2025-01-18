"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { PixelBackground } from "@/ui/PixelBackground";
import { StarletBackground } from "@/ui/StarletBackground";
import { CurrencyList } from "@/components/CurrencyList";

import { Typography, Container, Button } from "@/ui";
import { Coin as AnimateCoin } from "@/ui/Coin";

import galactics from "./assets/image/galactics.svg";

import styles from "./styles.module.scss";

type CoinProps = {
  className?: string;
};

export const Coin: FC<CoinProps> = ({ className }) => {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(elementRef.current, {
      scrollTrigger: {
        scroller: "#main",
        trigger: triggerRef.current,
        start: "center center",
        toggleActions: "play complete restart",
        scrub: true,
      },
      y: "90vh",
      rotationY: 360,
      scale: 1.7,
      duration: 10,
    });
  }, []);

  return (
    <section className={clsx(className, styles.section)}>
      <StarletBackground className={styles.starlets} pattern={3} />

      <div className={styles.planets} ref={triggerRef}>
        <Image src={galactics} alt="galactics" className={styles.image} />
      </div>

      <AnimateCoin className={styles.coin} ref={elementRef} />

      <Container className={styles.container}>
        <Typography variant="h2" className={styles.title}>
          Cryptocurrencies?
        </Typography>
        <Typography className={styles.text}>
          ECOIN (MEME) IS LITERALLY A MEME COIN. NO UTILITY. NO ROADMAP. NO
          PROMISES. NO EXPECTATION OF FINANCIAL RETURN.JUST 100% MEMES. 😉
        </Typography>
        <CurrencyList className={styles.currency} />
        <Button className={styles.button}>usdd token addreses</Button>
      </Container>
      <PixelBackground className={styles.bottomBackground} type={2} />
    </section>
  );
};
