import useSWR from "swr";
import Layout from "@/components/Layout";
import { Fetcher } from "@/utils/fetcher";
import PageTitle from "@/components/PageTitle";
import { DirectusImage } from "@/components/Sponsors";
import NextImage from "@/components/NextImage";

export default function ATVillage() {
  const { data }: any = useSWR(
    `query {
      conference_innovators(filter: { status: { _eq: "published" } }) {
        id
        first_name
        last_name
        title
        description
        banner {
          id
          title
        }
      }
    }`,
    Fetcher
  );

  return (
    <>
      <Layout pageTitle="AT Village">
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-12 text-white">
          <div className="container">
            <PageTitle title="Assistive Technology Innovation Village" />
            <h2 id="pageTitle" className="text-4xl -mt-6 text-center">
              (AT Village)
            </h2>
          </div>
        </div>
        <div className="container py-28">
          <p className="mb-6">
            One in three people or more than 2.5 billion globally need at least
            one assistive product. As the global population ages and the
            prevalence of noncommunicable diseases increases, this figure will
            rise to 3.5 billion (2050-Global Report on Assistive Technology,
            2022 WHO). Access to Assistive Technology (AT) for many Africans
            with disabilities is difficult and the cost can be high. Innovators
            and startup entrepreneurs in Africa are disrupting this market and
            developing a wide range of new and innovative solutions.
          </p>
          <p>
            Inclusive Africa’s AT Village will have around 30 accessibility and
            assistive technology innovations from across Africa, chosen from
            over 100 applications. The AT Village is a unique opportunity for
            pitching and B2B networking; startups, experts, corporates, and
            investors will also come together in a closed-door event during the
            Conference.
          </p>
          <h1 className="text-2xl font-medium mt-9" id="atTitle">
            Meet the AT Innovators
          </h1>
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 sm:gap-y-20 space-y-20 sm:space-y-0 pt-16 px-2">
            {data &&
              data.conference_innovators.map(
                (
                  innovator: {
                    first_name: string;
                    last_name: string;
                    title: string;
                    description: string;
                    banner: DirectusImage;
                  },
                  key: number
                ) => {
                  return (
                    <li
                      key={key}
                      className="shadow-agenda-card pb-7 bg-white space-y-5 hover:cursor-pointer h-full"
                    >
                      {!innovator.banner && (
                        <NextImage
                          src="/assets/icons/album.svg"
                          className="h-[50vw] sm:max-h-[25vw] lg:max-h-[15.7vw]  2xl:max-h-[12vw]"
                          imgClass="object-cover"
                        />
                      )}
                      {innovator.banner && (
                        <NextImage
                          src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${innovator.banner.id}`}
                          alt={innovator.banner.title}
                          className="h-[50vw] sm:max-h-[25vw] lg:max-h-[15.7vw] 2xl:max-h-[12vw]"
                          imgClass="object-cover"
                          unoptimized
                        />
                      )}
                      <div className="p-4 pt-0  space-y-3">
                        <h2 className="font-medium">{`${innovator.first_name} ${innovator.last_name}`}</h2>
                        <h3 className="font-medium">{innovator.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: innovator.description,
                          }}
                        ></p>
                      </div>
                    </li>
                  );
                }
              )}
          </ul>
        </div>
      </Layout>
    </>
  );
}
