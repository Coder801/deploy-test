import clsx from "clsx";
import { FC, useRef, useEffect } from "react";

import { StarletBackgroundProps } from "./types";
import { PATTERNS } from "./constants";

import styles from "./styles.module.scss";

export const StarletBackground: FC<StarletBackgroundProps> = ({
  className,
  pattern = 2,
}) => {
  const blocksRef = useRef<HTMLDivElement>(null);

  const patternStarPlacement = (
    container: HTMLDivElement | null,
    patterns: { top: number; left: number }[]
  ) => {
    if (!container) return;

    patterns.forEach((pattern) => {
      const block = document.createElement("div");

      block.style.left = `${pattern.left}%`;
      block.style.top = `${pattern.top}%`;

      container.appendChild(block);
    });
  };

  useEffect(() => {
    patternStarPlacement(blocksRef.current, PATTERNS[`pattern${pattern}`]);
  }, [pattern]);

  return (
    <div ref={blocksRef} className={clsx(className, styles.container)}></div>
  );
};
