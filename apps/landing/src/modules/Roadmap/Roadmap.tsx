import clsx from "clsx";
import { FC } from "react";

import { RoadmapMarker } from "@/components/RoadmapMarker";
import { PixelBackground } from "@/ui/PixelBackground";
import { Container, Typography } from "@/ui";

import { TIMELINE } from "./constants";

import styles from "./styles.module.scss";

type RoadmapProps = {
  className?: string;
};

export const Roadmap: FC<RoadmapProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <Container className={styles.container}>
      <Typography variant="h2">Roadmap</Typography>

      <div className={styles.timeline}>
        {TIMELINE.map(({ time, image, badges, color }, key) => (
          <RoadmapMarker
            key={key}
            className={styles.marker}
            isActive={key === 0}
            time={time}
            image={image}
            badges={badges as any} // eslint-disable-line
            color={color as any} // eslint-disable-line
          />
        ))}
      </div>
    </Container>
    <PixelBackground className={styles.bottomBackground} />
  </section>
);
