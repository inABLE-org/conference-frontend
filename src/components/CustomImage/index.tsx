import Image from "next/image";

type CustomImageProps = {
  src: string;
  alt?: string;
  id?: string;
  className?: string;
};

export default function CustomImage({
  src,
  alt = "",
  id = "",
  className = "",
}: CustomImageProps) {
  return (
    <>
      <div className={`relative ${className}`}>
        <Image
          id={id}
          src={src}
          alt={alt}
          fill
          className="object-fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </>
  );
}
