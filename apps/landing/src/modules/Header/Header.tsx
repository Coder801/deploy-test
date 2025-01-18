import clsx from "clsx";
import { FC } from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/ui";

import styles from "./styles.module.scss";

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        scroller: "#main",
        trigger: document.body,
        start: "10px top",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        onEnter: () => {
          containerRef.current?.classList?.add(styles.fixed);
        },
        onLeaveBack: () => {
          containerRef.current?.classList?.remove(styles.fixed);
        },
      },
    });
  }, []);

  return (
    <header className={clsx(className, styles.container)} ref={containerRef}>
      <Logo className={styles.logo} />
      <Navigation className={styles.navigation} />
      <LanguageSwitcher />
      <Button className={styles.button} color="transparent">
        Connect Wallet
      </Button>
    </header>
  );
};
