import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';

type MainProps = {
  className?: string;
};

export const Main: FC<MainProps> = ({ className }) => (
  <section className={clsx(className, styles.container)}>Main</section>
);
