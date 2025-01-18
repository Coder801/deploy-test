import { clsx } from "clsx";
import { createContext, FC, useContext, useRef, useState } from "react";

import { useOnClickOutside } from "@/hooks/useClickOutside";

import styles from "./styles.module.scss";
import {
  DropdownContentProps,
  DropdownContextProps,
  DropdownProps,
  DropdownToggleProps,
} from "./types.js";

const DropdownContext = createContext<DropdownContextProps | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown");
  }
  return context;
};

const DropdownToggle: FC<DropdownToggleProps> = ({ children, className }) => {
  const { toggle } = useDropdown();

  return (
    <button className={clsx(styles.toggle, className)} onClick={toggle}>
      {children}
    </button>
  );
};

const DropdownContent: FC<DropdownContentProps> = ({
  children,
  className,
  direction = "left",
  onClick = () => {},
}) => {
  const { isOpen, toggle } = useDropdown();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHandler = (event: any) => {
    event.stopPropagation();
    onClick(event);
    toggle();
  };

  return (
    isOpen && (
      <div
        className={clsx(
          styles.content,
          { [styles[direction] as string]: direction },
          className
        )}
        onClick={onClickHandler}
      >
        {children}
      </div>
    )
  );
};

const Dropdown: FC<DropdownProps> & {
  Content: FC<DropdownContentProps>;
  Toggle: FC<DropdownToggleProps>;
} = ({ className, children, isShow = false }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(isShow);

  const toggle = () => setIsOpen(!isOpen);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div className={clsx(styles.container, className)} ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Content = DropdownContent;
Dropdown.Toggle = DropdownToggle;

export { Dropdown };
