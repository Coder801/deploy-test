import clsx from "clsx";
import { FC } from "react";

import { Typography, SvgIcon } from "@/ui";

import styles from "./styles.module.scss";

type NavigationProps = {
  className?: string;
};

const pages = [
  {
    id: "private-sale",
    name: "PRIVATE SALE",
    href: "#",
  },
  {
    id: "docs",
    name: "DOCS",
    href: "#",
    Icon: <SvgIcon name="dock" />,
  },
];

export const Navigation: FC<NavigationProps> = ({ className }) => (
  <nav className={clsx(className, styles.container)}>
    <ul className={styles.list}>
      {pages.map(({ id, name, href, Icon }) => (
        <li key={id} className={styles.item}>
          <a href={href} className={styles.link}>
            <Typography type={2} strong>
              {name}
            </Typography>
            {Icon}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
