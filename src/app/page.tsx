import AboutUs from "@components/AboutUs";
import HeroSection from "@components/HeroSection";
import MenuList from "@components/menu/MenuList";
import { JSX } from "react";
import Forms from "@components/ui/forms/Forms";
import Location from "@components/Location";

export function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="px-12 lg:px-32 xl:px-40 2xl:px-80">{children}</section>
  );
}

const mainPageSections: JSX.Element[] = [
  <MenuList />, <AboutUs/>, <Location />, <Forms />
]

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
