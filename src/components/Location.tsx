import Header from "./ui/Header";

export default function Location() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-x-8 md:gap-x-12 mt-8 lg:mt-0">
      <img src="/map.png" alt="Mapa Polski" className="max-w-64 xl:max-w-[52rem] inline self-center lg:flex lg:self-auto order-1 md:order-0"/>
      <div className="w-full order-0 md:order-1">
        <Header title="Lokalizacja i zasięg"/>
        <span className="font-funnelSans text-dark lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla auctor eros nulla, sit amet posuere arcu porta eget.
          Donec eu pharetra neque. Nullam egestas ac diam quis pulvinar.
          Fusce quis tortor ultrices justo ullamcorper dictum. In tempus justo est, ac convallis orci pellentesque ut.
          Mauris quis fringilla enim. 
        </span>
      </div>
    </div>
  )
}