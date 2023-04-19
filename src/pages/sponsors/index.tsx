import useSWR from "swr";
import { Fetcher } from "@/components/fetcher";
import Sponsors, { Sponsor } from "@/components/Sponsors";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import { useRef } from "react";

export default function Home() {
  const linkButton = useRef<HTMLAnchorElement>(null);

  const { data }: any = useSWR(
    `query {
      conference_sponsors(
        filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
      ) {
        name
        type
        main
        logo {
          id
          description
        }
        website
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
          <div className="mt-16">
            {data && (
              <Sponsors
                title="Platinum Sponsors"
                sponsors={data.conference_sponsors.filter(
                  (sponsor: Sponsor) => sponsor.type === "Platinum"
                )}
                border
              />
            )}
          </div>
          <div className="mt-16">
            {data && (
              <Sponsors
                title="Gold Sponsors"
                sponsors={data.conference_sponsors.filter(
                  (sponsor: Sponsor) => sponsor.type === "Gold"
                )}
                border
              />
            )}
          </div>
          <div className="mt-16">
            {data && (
              <Sponsors
                title="Silver Sponsors"
                sponsors={data.conference_sponsors.filter(
                  (sponsor: Sponsor) => sponsor.type === "Silver"
                )}
                border
              />
            )}
          </div>
          <h2 className="font-semibold text-5xl mt-24 mb-16" id="partnersTitle">
            Partners
          </h2>
          <ul
            className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
            aria-labelledby="partnersTitle"
          >
            {data &&
              data.conference_sponsors
                .filter((sponsor: Sponsor) => sponsor.type === "Partner")
                .map((partner: Sponsor, key: number) => {
                  return (
                    <li
                      key={key}
                      className="bg-white shadow-agenda-card p-6 h-full flex flex-col space-y-5 justify-between hover:cursor-pointer"
                      onClick={() => linkButton.current?.click()}
                    >
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${partner.logo.id}`}
                        alt={`${partner.name} logo`}
                        className="mx-auto mb-5"
                      />
                      <a
                        ref={linkButton}
                        href={partner.website}
                        target={"_blank"}
                        aria-label={`${partner.name} (Opens in a new tab)`}
                      >
                        {partner.name}
                      </a>
                    </li>
                  );
                })}
          </ul>
        </div>
      </Layout>
    </>
  );
}
