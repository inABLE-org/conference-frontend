import Image from "next/image";

type NextImageProps = {
  src: string;
  alt?: string;
  id?: string;
  className?: string;
  imgClass?: string;
};

export default function NextImage({
  src,
  alt = "",
  id = "",
  className = "",
  imgClass = "",
}: NextImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        id={id}
        src={src}
        alt={alt}
        fill
        className={`w-full ${imgClass}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
