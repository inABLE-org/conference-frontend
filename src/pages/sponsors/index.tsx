import useSWR from "swr";
import { Fetcher } from "@/utils/fetcher";
import Sponsors, { Sponsor } from "@/components/Sponsors";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  const visitPartner = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const { data }: any = useSWR(
    `query {
      conference_sponsor_types(
        sort: "level"
        filter: { status: { _eq: "published" }, name: { _neq: "Partner" } }
      ) {
        name
        level
      }
      conference_sponsors(
        filter: {  status: { _eq: "published" }, year: { _eq: 2023 } }
      ) {
        id
        name
        level {
          name
        }
        main
        logo {
          id
          description
        }
        website
        country
      }
    }
    `,
    Fetcher
  );

  return (
    <>
      <Layout pageTitle="Sponsors">
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-white">
          <div className="container">
            <div className="mb-12">
              <PageTitle title="Sponsors and partners" />
            </div>
          </div>
        </div>
        <div className="container py-40 text-center">
          <h2 className="font-semibold text-5xl">Sponsors</h2>
          {data &&
            data.conference_sponsor_types.map(
              (
                _type: {
                  name: string;
                },
                key: number
              ) => (
                <Sponsors
                  key={key}
                  title={`${_type.name} Sponsors`}
                  sponsors={data.conference_sponsors.filter(
                    (sponsor: Sponsor) => sponsor.level.name === _type.name
                  )}
                  border
                />
              )
            )}
          <h2 className="font-semibold text-5xl mt-24 mb-16" id="partnersTitle">
            Partners
          </h2>
          <ul
            role="list"
            className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
            aria-labelledby="partnersTitle"
          >
            {data &&
              data.conference_sponsors
                .filter((sponsor: Sponsor) => sponsor.level.name === "Partner")
                .map((partner: Sponsor, key: number) => {
                  return (
                    <li
                      key={key}
                      className="bg-white shadow-agenda-card p-6 h-full flex flex-col space-y-5 justify-between hover:cursor-pointer hover:underline"
                      onClick={() => visitPartner(partner.website)}
                    >
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${partner.logo.id}`}
                        alt={`${partner.name} logo`}
                        className="mx-auto mb-5"
                      />
                      <a
                        id={`partner-${partner.id}`}
                        href={`#partner-${partner.id}`}
                        aria-label={`${partner.name} (Opens in a new tab)`}
                      >
                        {partner.name}
                      </a>
                      <p className="font-semibold">{partner.country}</p>
                    </li>
                  );
                })}
          </ul>
        </div>
      </Layout>
    </>
  );
}
