export type ButtonProps = {
  children: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "transparent";
  type?: "button" | "submit";
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
};
