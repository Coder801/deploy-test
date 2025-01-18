import clsx from "clsx";
import { FC, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { Dropdown } from "@repo/ui";
import { Typography } from "@/ui/Typography";
import { SvgIcon } from "@/ui/SvgIcon";

import { COUNTRIES } from "./constants";
import { LanguageSwitcherProps } from "./types";
import styles from "./styles.module.scss";

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    void i18n.changeLanguage(language);
  };

  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n]);

  const currentLang = () =>
    COUNTRIES.find((country) => country.lang === i18n.language);

  return (
    <Dropdown className={clsx(className, styles.container)}>
      <Dropdown.Toggle className={styles.toggle} activeClass={styles.active}>
        <Image alt="" src={currentLang()?.flag} width={24} height={24} />
        <Typography type={2} className={styles.text}>
          {currentLang()?.name}
        </Typography>
        <SvgIcon name="dropdownArrow" className={styles.arrow} />
      </Dropdown.Toggle>
      <Dropdown.Content className={styles.content}>
        {COUNTRIES.map(({ id, name, lang, flag, country }) => (
          <div
            key={id}
            onClick={() => {
              handleLanguageChange(lang);
            }}
            className={styles.item}
          >
            <Image alt={`flag-${name}`} src={flag} width={24} height={24} />
            <Typography type={2} className={styles.text}>
              {name} {country && <span>({country})</span>}
            </Typography>
          </div>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
};
