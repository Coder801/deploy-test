import { ReactNode } from "react";

export type DropdownContextProps = {
  isOpen: boolean;
  toggle: () => void;
};

export type DropdownProps = {
  children?: ReactNode;
  className?: string;
  isShow?: boolean;
};

export type DropdownContentProps = {
  onClick?: (event: MouseEvent | null) => void;
  className?: string;
  children: ReactNode;
  direction?: "left" | "right";
};

export type DropdownToggleProps = {
  onClick?: (event: MouseEvent | null) => void;
  className?: string;
  children: ReactNode;
};
