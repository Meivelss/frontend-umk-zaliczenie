export interface MenuImageProps {
  url: string;
}

export default function MenuImage({ image }: { image: MenuImageProps }) {
  return (
    <div className="w-full aspect-video overflow-hidden">
      <img src={image.url} alt="zdjęcie menu" className="w-full h-full object-cover" />
    </div>
  );
}
