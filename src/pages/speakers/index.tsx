import useSWR from "swr";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import Speaker from "@/components/Cardutilities/Speaker";
import { Fetcher } from "@/utils/fetcher";
import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle/BackButton";
import TopParagraph from "@/components/TopParagraph";
import Tabs from "@/components/Tabs";
import { DirectusImage } from "@/components/Sponsors";
import TabPanel from "@/components/Tabs/TabPanel";

export type SpeakerInfo = {
  id: string;
  first_name: string;
  second_name: string;
  organization: string;
  role: string;
  Country: string;
  key_note: Boolean;
  photo: DirectusImage;
};

export default function Speakers() {
  const [activeTab, setActiveTab] = useState(0);

  const { data }: any = useSWR(
    `query {
      conference_speakers(
        filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
      ) {
        id
        first_name
        second_name
        organization
        key_note
        role
        Country
        photo
        {
          id
          title
        }
      }
    }`,
    Fetcher
  );

  return (
    <>
      <Layout>
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-ash-1">
          <div className="container">
            <BackButton />
            <PageTitle title="Speakers" />
            <TopParagraph
              text='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud'
            />
          </div>
          <Tabs
            tabList={["All Speakers", "Keynote Speakers"]}
            className="flex mx-auto space-x-9 justify-center text-xl"
            onTabSwith={setActiveTab}
          />
        </div>
        <TabPanel className="container py-28" activeTab={activeTab}>
          <ul
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-16"
            aria-label="pageTitle"
          >
            {data &&
              data.conference_speakers
                .filter(
                  (speaker: SpeakerInfo) =>
                    (speaker.key_note && activeTab === 1) || activeTab === 0
                )
                .map((speaker: SpeakerInfo) => (
                  <li key={speaker.id}>
                    <Speaker
                      name={speaker.first_name + " " + speaker.second_name}
                      role={speaker.role}
                      organization={speaker.organization}
                      country={speaker.Country}
                      imgsource={`https://cms.inclusiveafrica.org/assets/${speaker.photo.id}:`}
                    />
                  </li>
                ))}
          </ul>
        </TabPanel>
      </Layout>
    </>
  );
}
