import Link from "next/link";
import MenuImage from "./MenuImage";
import { MenuPositionProps, menuPositions } from "./MenuPosition";

function MenuPosition({ name, image, slug }: MenuPositionProps) {
  return (
    <div className="flex flex-col justify-between shadow-md transition hover:scale-105">
      <div className="w-full">
        <MenuImage image={image} />
      </div>

      <div className="w-full h-full text-center font-funnelSans text-lg font-medium text-secondary flex items-center justify-center">
        <span>{name}</span>
      </div>

      <Link href={`/menu/${slug}`}>
        <button className="mt-4 w-full bg-burlyWood hover:bg-saddleBrown text-light text-lg py-2 px-6 transition-colors duration-300">
          Więcej
        </button>
      </Link>
    </div>
  );
}

export default function MenuList() {
  return (
    <>
      <div className="flex flex-col gap-12 md:grid md:grid-cols-2 2xl:grid-cols-4 xl:gap-x-24 gap-y-12">
        {menuPositions.map(position => (
          <MenuPosition
            key={position.name}
            name={position.name}
            image={position.image}
            slug={position.slug}
            description={position.description}
          />
        ))}
      </div>
    </>
  );
}
