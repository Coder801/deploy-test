"use client";

import "@/styles/index.scss";
import "@/translate/i18n";

import { Coin } from "@/modules/Coin";
import { Hero } from "@/modules/Hero";
import { FAQ } from "@/modules/FAQ";
import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";
import { Planets } from "@/modules/Planets";
import { Roadmap } from "@/modules/Roadmap";
import { Tokenomics } from "@/modules/Tokenomics";
import { WhatIs } from "@/modules/WhatIs";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.container} id="main">
        <Hero className={styles.hero} />
        <Coin className={styles.coin} />
        <Tokenomics className={styles.tokenomics} />
        <Planets className={styles.planets} />
        <WhatIs className={styles.whatIs} />
        <Roadmap className={styles.roadmap} />
        <FAQ className={styles.faq} />
        <Footer className={styles.footer} />
      </main>
    </>
  );
}
