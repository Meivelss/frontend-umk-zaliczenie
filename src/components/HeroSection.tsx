"use client";
import { useWindowDimensions } from "./ui/Header";

export default function HeroSection() {

const { width } = useWindowDimensions();
return (
    <>
      {width < 1024 ? (
        <div className="bg-[url(/hero.jpg)] inset-shadow-2xl bg-fixed w-full h-[50vh] lg:h-[60vh] bg-cover bg-center flex items-center justify-center px-8 shadow-md mb-20">
        <span className="font-semibold text-light flex flex-col gap-4">
          <p className="text-2xl lg:text-5xl text-center font-spectral">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-lg lg:text-3xl text-center font-funnelSans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </span>
      </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] bg-white mb-32">
          <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 2xl:px-40 py-16 z-10">
            <h1 className="leading-14 text-3xl lg:text-[3.5rem] font-bold text-dark mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="text-secondary mb-6 font-funnelSans text-2xl lg:text-[1.5rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-burlyWood hover:bg-saddleBrown transition-colors duration-300 text-light px-6 py-3 rounded-md w-fit">
              Kontakt →
            </button>
          </div>

          <div className="relative hidden lg:block">
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
                backgroundImage: "url('/hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

