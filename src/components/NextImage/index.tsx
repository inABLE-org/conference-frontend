import Image from "next/image";

type NextImageProps = {
  src: string;
  alt?: string;
  id?: string;
  className?: string;
  imgClass?: string;
  unoptimized?: boolean | undefined;
};

export default function NextImage({
  src,
  alt = "",
  id = "",
  className = "",
  imgClass = "",
  unoptimized=false
}: NextImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        id={id}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`w-full ${imgClass}`}
        unoptimized={unoptimized}
        placeholder="blur"
        blurDataURL="/assets/icons/album.svg"
      />
    </div>
  );
}
