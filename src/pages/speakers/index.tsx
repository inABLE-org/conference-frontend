import useSWR from "swr";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import Speaker from "@/components/Speaker";
import { Fetcher } from "@/utils/fetcher";
import PageTitle from "@/components/PageTitle";
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
  moderator: Boolean;
  photo: DirectusImage;
  linkedin: string;
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
        country
        photo {
          id
          title
        }
      }
    }`,
    Fetcher
  );

  return (
    <>
      <Layout pageTitle="Speakers">
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-white">
          <div className="container">
            <PageTitle
              title="Speakers"
              underlineClass="border-4 border-secondary-2"
            />
            <TopParagraph
              text='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud'
            />
            <Tabs
              tabList={["Keynote Speakers", "All Speakers"]}
              className="text-center flex flex-col sm:flex-row mx-auto sm:space-x-9 space-y-9 sm:space-y-0 justify-center text-xl"
              onTabSwith={setActiveTab}
            />
          </div>
        </div>
        <TabPanel className="container py-28" activeTab={activeTab}>
          <ul
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-16"
            aria-labelledby={`tab-${activeTab}`}
          >
            {data &&
              data.conference_speakers
                .filter(
                  (speaker: SpeakerInfo) =>
                    (speaker.key_note && activeTab === 0) || activeTab === 1
                )
                .map((speaker: SpeakerInfo, key: number) => (
                  <li key={key}>
                    <Speaker {...speaker} />
                  </li>
                ))}
          </ul>
        </TabPanel>
      </Layout>
    </>
  );
}
