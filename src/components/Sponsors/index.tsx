import CustomImage from "../CustomImage";

export type DirectusImage = {
  id: string;
  title: string;
};

export type Sponsor = {
  name: string;
  type: string;
  main: boolean;
  logo: DirectusImage;
  website: string;
};

type SponsorsProps = {
  title: string;
  sponsors: Sponsor[];
  border?: Boolean;
};
export default function Sponsors({ title, sponsors, border }: SponsorsProps) {
  return (
    <>
      {border && <hr className="border-black border-opacity-50 -mb-4" />}
      <h3 className="font-semibold text-xl bg-primary-2 w-fit mx-auto px-6">
        {title}
      </h3>
      <ul
        className="grid sm:grid-cols-2 gap-y-11 md:flex md:space-x-16 mx-auto justify-center pt-12 pb-20"
        aria-label={title}
      >
        {sponsors.map((sponsor: Sponsor, key: number) => {
          return (
            <li key={key}>
              <a href={sponsor.website} target={"_blank"}>
                <CustomImage
                  src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${sponsor.logo.id}`}
                  alt={`${sponsor.name} logo(Opens in a new tab)`}
                  className="h-12 w-36 flex-grow mx-auto"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
