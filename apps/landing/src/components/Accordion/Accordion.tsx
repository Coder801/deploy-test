import clsx from "clsx";
import { useState } from "react";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import { Typography, Card } from "@/ui";

import styles from "./styles.module.scss";

type AccordionProps = {
  className?: string;
  title: string;
  children: ReactNode;
};

export const Accordion: FC<AccordionProps> = ({
  className,
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Card className={clsx(className, styles.container)}>
      <Typography
        variant="h4"
        className={clsx(styles.title, { [styles.active as string]: isOpen })}
        onClick={toggleAccordion}
      >
        {title}
      </Typography>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={styles.content}>{children}</div>
      </motion.div>
    </Card>
  );
};
