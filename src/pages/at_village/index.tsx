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
          <h1 className="text-2xl font-medium mt-9">Meet the AT Innovators</h1>
        </div>
      </Layout>
    </>
  );
}
