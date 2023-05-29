import { DirectusFile } from "@/utils/searcher";
import NextImage from "../NextImage";

export type DirectusImage = {
  id: string;
  title: string;
};

export type Sponsor = {
  id: string;
  name: string;
  level: {
    name: string;
  };
  main: boolean;
  logo: DirectusFile;
  website: string;
  country: string;
};

type SponsorsProps = {
  title: string;
  sponsors: Sponsor[];
  border?: Boolean;
};
export default function Sponsors({ title, sponsors, border }: SponsorsProps) {
  return (
    <>
      {sponsors.length > 0 && (
        <div className="mt-16">
          {border && <hr className="border-black border-opacity-50 -mb-4" />}
          <h3 className="font-semibold text-xl bg-primary-2 w-fit mx-auto px-6">
            {title}
          </h3>
          <ul
            role="list"
            className={`grid gap-y-11 md:flex md:space-x-16 mx-auto justify-center pt-12 pb-20 ${
              sponsors.length > 1 ? "sm:grid-cols-2" : ""
            }`}
            aria-label={title}
          >
            {sponsors.map((sponsor: Sponsor, key: number) => {
              return (
                <li key={key}>
                  <a href={sponsor.website} target={"_blank"}>
                    <NextImage
                      src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${sponsor.logo.id}`}
                      alt={`${sponsor.name} logo(Opens in a new tab)`}
                      className="h-64 w-64 flex-grow mx-auto"
                      imgClass="object-contain"
                      unoptimized
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
