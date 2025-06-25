import { notFound } from "next/navigation";
import GoBackButton from "../GoBackButton";
import { menuPositions } from "@components/menu/MenuPosition";

type Params = {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return menuPositions.map(position => ({
    slug: position.slug
  }));
}

export default async function MenuEntryPage({ params }: { params: { slug: string } }) {
  const position = menuPositions.find(p => p.slug === params.slug);

  if (!position) return notFound();

  return (
    <div className="flex flex-col gap-4 md:px-8 lg:px-12 pb-8">
      <GoBackButton />
      
      <img 
        src={position.image.url} 
        alt={position.name} 
        className="rounded-xl shadow-lg w-full h-64 object-cover"
      />

      <h1 className="text-3xl font-bold text-primary">{position.name}</h1>

      <div className="prose">
        <p className="text-lg text-gray-600 leading-relaxed">
          {position.description.description}
        </p>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-dark">
            Co zapewniamy:
          </h2>
          <ul className="space-y-3 pl-6 list-disc marker:text-primary">
            {position.description.perks.map((perk, index) => (
              <li key={index} className="text-gray-700">
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-8 p-6 bg-base-200 rounded-xl border-l-4 border-primary">
          <p className="text-xl italic text-gray-700">
            {position.description.callToAction}
          </p>
        </blockquote>
      </div>
    </div>
  );
}

