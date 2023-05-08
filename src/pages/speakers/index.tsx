import useSWR from "swr";
import Layout from "@/components/Layout";
import React from "react";
import Speaker from "@/components/Speaker";
import { Fetcher } from "@/utils/fetcher";
import PageTitle from "@/components/PageTitle";
import { DirectusImage } from "@/components/Sponsors";

export type SpeakerInfo = {
  id: string;
  first_name: string;
  second_name: string;
  organization: string;
  role: string;
  country: string;
  key_note: Boolean;
  moderator: Boolean;
  photo: DirectusImage;
  linkedin: string;
};

export default function Speakers() {
  const { data }: any = useSWR(
    `query {
      conference_speakers(
        sort: "order"
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
            <div className="mb-12">
              <PageTitle title="Speakers" />
            </div>
          </div>
        </div>
        <div className="container py-28">
          <h2
            className="mb-12 text-5xl font-semibold text-center"
            id="keyNoteTitle"
          >
            KeyNote Speakers
          </h2>
          <ul
            role="list"
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-16"
            aria-labelledby="keyNoteTitle"
          >
            {data &&
              data.conference_speakers
                .filter((speaker: SpeakerInfo) => speaker.key_note)
                .map((speaker: SpeakerInfo, key: number) => (
                  <Speaker key={key} {...speaker} />
                ))}
          </ul>
          <h2
            className="mb-12 mt-28 text-5xl font-semibold text-center"
            id="sessionTittle"
          >
            Session Speakers
          </h2>
          <ul
            role="list"
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-16 my-9"
            aria-labelledby="sessionTittle"
          >
            {data &&
              data.conference_speakers
                .filter((speaker: SpeakerInfo) => !speaker.key_note)
                .map((speaker: SpeakerInfo, key: number) => (
                  <Speaker key={key} {...speaker} />
                ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
