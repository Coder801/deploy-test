import { StaticImageData } from "next/image";

export type RoadmapMarkerProps = {
  className?: string;
  time: string;
  image: StaticImageData;
  isActive?: boolean;
  badges: {
    badge: string;
    tooltip?: string;
    key: string;
  }[];
  color: "primary" | "secondary" | "third" | "fourth";
};
