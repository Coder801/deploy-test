import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { Currency, currency } from './constants';
import styles from './styles.module.scss';

type CurrencyListProps = {
  className?: string;
  list?: Array<keyof typeof Currency>;
};

export const CurrencyList: FC<CurrencyListProps> = ({ className }) => (
  <ul className={clsx(className, styles.container)}>
    {currency.map(({ name, image, link }) => (
      <li key={name} className={styles.item}>
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            src={image}
            className={styles.image}
            alt={name}
            width={64}
            height={64}
          />
        </a>
      </li>
    ))}
  </ul>
);
