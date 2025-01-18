import { SvgIcons } from "@/ui/SvgIcon";

type Link = {
  id: number;
  text: string;
  icon?: SvgIcons;
  link: string;
};

export const LINKS: Link[] = [
  {
    id: 1,
    text: "About",
    link: "#",
  },
  {
    id: 2,
    text: "Terms of Use",
    link: "#",
  },
  {
    id: 3,
    text: "Whitepaper",
    link: "#",
  },
  {
    id: 4,
    text: "Terms for Fire Sale",
    link: "#",
  },
  {
    id: 5,
    text: "Buy/Sell Shibu",
    icon: "dock",
    link: "#",
  },
  {
    id: 6,
    text: "Terms of Airdrop",
    link: "#",
  },
];

export const SOCIALS: Omit<Link, "text">[] = [
  {
    id: 1,
    icon: "x",
    link: "#",
  },
  {
    id: 2,
    icon: "discord",
    link: "#",
  },
  {
    id: 3,
    icon: "telegram",
    link: "#",
  },
];
