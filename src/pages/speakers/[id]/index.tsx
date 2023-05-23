import useSWR from "swr";
import Layout from "@/components/Layout";
import React from "react";
import { Fetcher } from "@/utils/fetcher";
import BackButton from "@/components/BackButton";
import CustomImage from "@/components/CustomImage";
import { useRouter } from "next/router";
import { AgendaInfo, formatDate } from "@/pages/agenda";
import AgendaPane from "@/components/AgendaPane";
import NextImage from "@/components/NextImage";

export default function Speakers() {
  const router = useRouter();
  const { id } = router.query;
  const { data }: any = useSWR(
    [
      `query fethSpeaker($id: GraphQLStringOrFloat) {
        conference_speakers(
          limit: 1
          filter: {
            status: { _eq: "published" }
            year: { _eq: 2023 }
            id: { _eq: $id }
          }
        ) {
          id
          first_name
          second_name
          organization
          key_note
          role
          linkedIn
          bio
          country
          photo {
            id
            title
          }
        }
        conference_agenda(
          sort: "start_time"
          filter: {
            status: { _eq: "published" }
            year: { _eq: 2023 }
            speakers: { conference_speakers_id: { id: { _eq: $id } } }
          }
        ) {
          id
          title
          no_speakers
          description
          start_time
          end_time
          venue {
            conference_venues_id {
              id
              name
            }
          }
          breakouts {
            conference_venues_id {
              id
              name
            }
          }
          moderator {
            id
            first_name
            second_name
            photo {
              id
              title
            }
          }
          speakers {
            conference_speakers_id {
              id
              first_name
              second_name
              organization
              role
              photo {
                id
                title
              }
            }
          }
        }
      }
      `,
      { id: Number(id) },
    ],
    ([url, token]) => Fetcher(url, token)
  );

  const speaker_name = data
    ? `${data.conference_speakers[0].first_name} ${data.conference_speakers[0].second_name}`
    : null;
  let days: string[] = [];

  if (data) {
    days = Array.from(
      new Set(
        data.conference_agenda.map((agenda: AgendaInfo) =>
          formatDate(agenda.start_time)
        )
      )
    );
  }

  return (
    <>
      <Layout pageTitle={speaker_name ? speaker_name : "Speaker"}>
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-white">
          <div className="container">
            <BackButton />
            {data && (
              <>
                <NextImage
                  src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${data.conference_speakers[0].photo.id}?key=thumb`}
                  alt={data.conference_speakers[0].first_name + " potrait"}
                  className="h-[28vw] w-[28vw] sm:h-[11.8vw] sm:w-[11.8vw] mx-auto rounded-full overflow-hidden mt-8"
                  imgClass="object-cover"
                  unoptimized
                />
                <p className="text-center mt-4 mb-9 text-xl flex space-y-3 flex-col">
                  <span className="flex items-center justify-center text-xl font-bold">
                    {`${data.conference_speakers[0].first_name} ${data.conference_speakers[0].second_name} `}
                    <a href={data.conference_speakers[0].linkedIn}>
                      <CustomImage
                        src={"/assets/icons/Group 6407.svg"}
                        alt={
                          data.conference_speakers[0].first_name +
                          " LinkedIn account(Opens in a new tab)"
                        }
                        className="h-6 w-7 ml-3"
                      />
                    </a>
                  </span>
                  <span>{data.conference_speakers[0].role}</span>
                  <span className="text-base font-semibold">
                    {data.conference_speakers[0].organization}
                  </span>
                  <span>{data.conference_speakers[0].country}</span>
                  <span className="bg-ash-4 rounded-3xl w-fit mx-auto text-black px-2 text-base">
                    {data.conference_speakers[0].key_note
                      ? "Keynote"
                      : "speaker"}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
        <div className="container pt-16">
          {data && data.conference_speakers[0].bio && (
            <div className="mt-3 bg-white rounded shadow-agenda-card pt-4 pb-8 px-12 mb-16">
              <h1 className="mt-1 font-medium text-[2rem] mb-5">Bio</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.conference_speakers[0].bio.replace(
                    /\n/g,
                    "<br />"
                  ),
                }}
              ></p>
            </div>
          )}
          <h1
            className={`font-semibold text-[2.5rem] mb-8 ${
              data && data.conference_speakers[0].bio ? "" : "text-center"
            }`}
          >
            Speaker&apos;s Sessions
          </h1>
          {data &&
            days.map((day: string, key: number) => {
              return (
                <AgendaPane
                  key={key}
                  date={day}
                  agendaList={data.conference_agenda.filter(
                    (agenda: AgendaInfo) =>
                      formatDate(agenda.start_time) === day
                  )}
                />
              );
            })}
        </div>
      </Layout>
    </>
  );
}
