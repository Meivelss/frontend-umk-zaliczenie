import { MenuImageProps } from "./MenuImage";
import { MenuDescription, menuDescriptions } from "./MenuDescription";

export interface MenuPositionProps {
  name: string;
  image: MenuImageProps;
  description: MenuDescription;
  slug: string;
}

export const menuPositions: MenuPositionProps[] = [
  {
    name: "Catering na przyjęcia okolicznościowe",
    image: { url: "/businessMenu.jpg" },
    slug: "przyjecia-okolicznosciowe",
    description: menuDescriptions.find(d => d.key === "przyjecia-okolicznosciowe")!
  },
  {
    name: "Catering na spotkania i imprezy firmowe",
    image: { url: "/businessMenu.jpg" },
    slug: "imprezy-firmowe",
    description: menuDescriptions.find(d => d.key === "imprezy-firmowe")!
  },
  {
    name: "Catering dla firm",
    image: { url: "/businessMenu.jpg" },
    slug: "dla-firm",
    description: menuDescriptions.find(d => d.key === "dla-firm")!
  },
  {
    name: "Świąteczny catering na wynos",
    image: { url: "/businessMenu.jpg" },
    slug: "swiateczny-na-wynos",
    description: menuDescriptions.find(d => d.key === "swiateczny-na-wynos")!
  }
];
