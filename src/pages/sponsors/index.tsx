import useSWR from "swr";
import { Fetcher } from "@/components/fetcher";
import Sponsors, { Sponsor } from "@/components/Sponsors";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle/BackButton";
import TopParagraph from "@/components/TopParagraph";

export default function Home() {
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
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-ash-1">
          <div className="container">
            <BackButton />
            <PageTitle
              title="Sponsors and partners"
              underlineClass="border-4 border-secondary-2 w-9/12 mx-auto"
            />
            <TopParagraph text="This conference is possible thanks to our sponsors and partners" />
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
              />
            )}
          </div>
          <h2 className="font-semibold text-5xl mt-24 mb-16">Partners</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {data &&
              data.conference_sponsors
                .filter((sponsor: Sponsor) => sponsor.type === "Partner")
                .map((partner: Sponsor, key: number) => {
                  return (
                    <div
                      key={key}
                      className="bg-white shadow-agenda-card p-6 h-full flex flex-col space-y-5 justify-between"
                    >
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src={`https://cms.inclusiveafrica.org/assets/${partner.logo.id}`}
                        alt={`${partner.name} logo`}
                        className="mx-auto mb-5"
                      />
                      <a
                        href={partner.website}
                        aria-label={`(Opens opens in a new tab)`}
                      >
                        {partner.name}
                      </a>
                    </div>
                  );
                })}
          </div>
        </div>
      </Layout>
    </>
  );
}
