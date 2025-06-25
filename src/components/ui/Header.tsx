"use client";
import Separator from "@components/Separator";
import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


export default function Header({ title }: { title: string }) {
  const { width } = useWindowDimensions();

  return (
    <>
      {width < 1024 ? (
        <h2 className="font-spectral text-center text-4xl lg:text-5xl xl:text-[4rem] leading-10 text-saddleBrown pb-2 mb-4 border-b-2 border-saddleBrown/50 lg:border-b-0">
          {title}
        </h2>
      ) : (
        <div className="w-full flex items-center justify-center mb-12">
          <Separator />
          <h2 className="font-spectral text-center text-4xl lg:text-5xl xl:text-[4rem] leading-12 text-saddleBrown mx-8 max-w-fit">
            {title}
          </h2>
          <Separator />
        </div>
      )}
    </>
  );
}