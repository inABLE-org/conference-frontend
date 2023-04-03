import useSWR from "swr";
import CustomImage from "@/components/CustomImage";
import Layout from "@/components/Layout";
import { Fetcher } from "@/components/fetcher";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle/BackButton";
import TopParagraph from "@/components/TopParagraph";
import Tabs from "@/components/Tabs";
import TabPanel from "@/components/Tabs/TabPanel";
import { SpeakerInfo } from "../speakers";

type ConferenceSpeaker = {
  conference_speakers_id: SpeakerInfo;
};

type AgendaInfo = {
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  speakers: ConferenceSpeaker[];
};

const week_day = (_date: string) =>
  new Intl.DateTimeFormat("en", { weekday: "long" }).format(new Date(_date));

const formatTime = (_date: string) =>
  new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(_date));

const formatDate = (_date: string) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(_date));

export default function Agenda() {
  const [activeTab, setActiveTab] = useState(0);
  const { data }: any = useSWR(
    `query {
      conference_agenda(
        sort: "start_time"
        filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
      ) {
        title
        description
        start_time
        end_time
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
    }`,
    Fetcher
  );

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
      <Layout>
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-ash-1">
          <div className="container">
            <BackButton />
            <PageTitle title="Agenda" />
            <TopParagraph
              text='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud'
            />
            <Tabs
              tabList={days.map((day) => week_day(day))}
              className="flex mx-auto space-x-9 justify-center text-xl"
              onTabSwith={setActiveTab}
            />
          </div>
        </div>
        <TabPanel className="container pt-20" activeTab={activeTab}>
          <h2 className="font-medium text-[2em]" id="dayTitle">
            {data && days[activeTab]}
          </h2>
          <dl className="mt-16" aria-labelledby="dayTitle">
            {data &&
              data.conference_agenda
                .filter(
                  (agenda: AgendaInfo) =>
                    formatDate(agenda.start_time) === days[activeTab]
                )
                .map((conference_agenda: AgendaInfo, key: number) => {
                  return (
                    <div
                      key={key}
                      tabIndex={0}
                      className="md:flex bg-white shadow-agenda-card mb-16 hover:border-2 hover:border-secondary-2"
                    >
                      <dt className="relative text-2xl px-4 xl:px-0 py-11 lg:w-[30%]">
                        <div className="w-fit mx-auto">
                          {formatTime(conference_agenda.start_time)} -{" "}
                          {formatTime(conference_agenda.end_time)}
                        </div>
                      </dt>
                      <dd className="border-l-[0.015625rem] py-9 w-full">
                        <div className="mx-auto  max-w-[93%]">
                          <h3 className="font-medium text-[1.75rem]">
                            {conference_agenda.title}
                          </h3>
                          <p className="my-9">
                            {conference_agenda.description}
                          </p>
                          {conference_agenda.speakers.length > 0 && (
                            <h3 className="font-medium text-2xl mb-6">
                              {conference_agenda.speakers.length}
                              <span id="speakerTitle"> SPEAKERS</span>
                            </h3>
                          )}
                          <ul
                            className="grid md:grid-cols-2 gap-y-10"
                            aria-label="speakerTitle"
                          >
                            {conference_agenda.speakers.map(
                              (
                                { conference_speakers_id }: ConferenceSpeaker,
                                key: number
                              ) => {
                                return (
                                  <li
                                    key={key}
                                    className="flex items-center space-x-4 lg:space-x-6"
                                  >
                                    <CustomImage
                                      src={`https://cms.inclusiveafrica.org/assets/${conference_speakers_id.photo.id}`}
                                      alt={`${conference_speakers_id.first_name}`}
                                      className="min-h-[85%] lg:min-h-[5.1vw] min-w-[13%] md:min-w-[24%] lg:min-w-[5vw] rounded-full overflow-hidden"
                                    />
                                    <div>
                                      <h4 className="font-semibold">
                                        {`${conference_speakers_id.first_name} ${conference_speakers_id.second_name}`}
                                      </h4>
                                      {conference_speakers_id.role} <br />
                                      <span>
                                        {conference_speakers_id.organization}
                                      </span>
                                    </div>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </dd>
                    </div>
                  );
                })}
          </dl>
        </TabPanel>
      </Layout>
    </>
  );
}
