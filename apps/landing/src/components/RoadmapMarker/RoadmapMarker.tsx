"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import { Typography, Badge, SvgIcon } from "@/ui";
import { RoadmapMarkerProps } from "./types";

import styles from "./styles.module.scss";

export const RoadmapMarker: FC<RoadmapMarkerProps> = ({
  className,
  isActive,
  time,
  image,
  badges,
  color,
}) => {
  return (
    <div
      className={clsx(className, styles.container, {
        [styles.active as string]: isActive,
      })}
    >
      <div className={styles.illustration}>
        <Image className={styles.image} src={image} alt={time} />
        <Typography variant="h3" className={clsx(styles.title, styles[color])}>
          {time}
        </Typography>
      </div>
      <div className={styles.content}>
        {badges.map(({ badge }, key) => (
          <Badge key={key} color={color}>
            {badge}
            <SvgIcon name="info" color={color} width={18} height={18} />
          </Badge>
        ))}
      </div>
    </div>
  );
};
