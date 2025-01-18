import { CSSProperties } from "react";

export type TypographyProps = {
  type?: 1 | 2;
  children: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: "primary" | "secondary";
  className?: string;
  strong?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
};
