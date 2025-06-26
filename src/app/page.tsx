import AboutUs from "@components/AboutUs";
import HeroSection from "@components/HeroSection";
import MenuList from "@components/menu/MenuList";
import { JSX } from "react";
import Forms from "@components/ui/forms/Forms";
import Location from "@components/Location";
import { MainLayout } from "./MainLayout";

const mainPageSections: JSX.Element[] = [
  <MenuList key="menu" />, 
  <AboutUs key="about" />, 
  <Location key="location" />, 
  <Forms key="forms" />
];

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-light pt-[64px] pb-8">
      <HeroSection />
      <div className="flex flex-col gap-y-10 md:gap-y-24 xl:gap-y-32 2xl:gap-y-40 bg-light">
        {mainPageSections.map((section, idx) => (
          <MainLayout key={idx}>{section}</MainLayout>
        ))}
      </div>
    </main>
  );
}
