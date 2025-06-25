import { ChefHat } from "lucide-react";
import Header from "./ui/Header";

interface PointProps {
  number: string;
  name: string;
  description: string;
}

const bulletPoints: PointProps[] = [
  { number: "01", name: "Doświadczenie i profesjonalizm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor eros nulla, sit amet posuere arcu porta eget. Donec eu pharetra neque. Nullam egestas ac diam quis pulvinar. Fusce quis tortor ultrices justo ullamcorper dictum. In tempus justo est, ac convallis orci pellentesque ut. Mauris quis fringilla enim." },
  { number: "02", name: "Indywidualne podejście do każdego zlecenia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor eros nulla, sit amet posuere arcu porta eget. Donec eu pharetra neque. Nullam egestas ac diam quis pulvinar. Fusce quis tortor ultrices justo ullamcorper dictum. In tempus justo est, ac convallis orci pellentesque ut. Mauris quis fringilla enim." },
  { number: "03", name: "Bogate i zróżnicowane menu", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor eros nulla, sit amet posuere arcu porta eget. Donec eu pharetra neque. Nullam egestas ac diam quis pulvinar. Fusce quis tortor ultrices justo ullamcorper dictum. In tempus justo est, ac convallis orci pellentesque ut. Mauris quis fringilla enim." }
];

function Point({ number, name, description }: PointProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-secondary text-3xl lg:text-4xl font-spectral text-center xl:text-start">{number}</p>
      <div className="w-full flex flex-col gap-4 text-dark [&>span]:text-center [&>span]:xl:text-start">
        <span className="text-3xl lg:text-4xl font-spectral">{name}</span>
        <span className="text-secondary font-funnelSans lg:text-lg">{description}</span>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col gap-8">
        <div className="w-full order-0 xl:order-1">
          <Header title="O nas" />
          <span className="font-funnelSans lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 lg:gap-12 xl:gap-20 order-1 xl:order-0">
          <div className="bg-light rounded-full shadow-md p-4 lg:p-8">
            <ChefHat className="w-20 h-20 lg:w-32 lg:h-32" />
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-0 xl:justify-between">
            {bulletPoints.map((bulletPoint, i) => (
              <div key={i} className="xl:max-w-[30%] py-6 lg:py-0 border-b last:border-b-0 lg:border-b-0 border-gray-200 lg:self-start">
                <Point {...bulletPoint} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
