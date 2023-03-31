import useSWR from "swr";
import CustomImage from "@/components/CustomImage";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import { Fetcher } from "@/components/fetcher";
import { DirectusImage } from "@/components/Sponsors";
import { useRouter } from "next/router";
import { useState } from "react";
import BackButton from "@/components/BackButton/BackButton";

type Speaker = {
  id: string;
  first_name: string;
  second_name: string;
  organization: string;
  role: string;
  Country: string;
  key_note: Boolean;
  photo: DirectusImage;
};

type ConferenceSpeaker = {
  conference_speakers_id: Speaker;
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
  let conference_agenda: AgendaInfo[] = [];

  if (data) {
    days = Array.from(
      new Set(
        data.conference_agenda.map((agenda: AgendaInfo) =>
          formatDate(agenda.start_time)
        )
      )
    );

    conference_agenda = data.conference_agenda.filter((agenda: AgendaInfo) => {
      if (formatDate(agenda.start_time) === days[activeTab]) {
        return agenda;
      }
    });
  }

  const switchTab = (e: any, currentTab: number) => {
    if (e.key === "ArrowRight") {
      currentTab++;
      const activeTab = currentTab >= days.length ? 0 : currentTab;
      setActiveTab(activeTab);
      document.getElementById(`tab-${activeTab}`)?.focus();
    } else if (e.key === "ArrowLeft") {
      currentTab--;
      const activeTab = currentTab < 0 ? days.length - 1 : currentTab;
      setActiveTab(activeTab);
      document.getElementById(`tab-${activeTab}`)?.focus();
    }
  };

  console.log(data);
  return (
    <>
      <Layout>
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-ash-1">
          <div className="container">
            <BackButton />
            <h1
              id="pageTitle"
              className="mt-7 text-5xl pb-4 border-b-8 border-secondary-2 mx-auto w-fit mb-6"
            >
              Agenda
            </h1>
            <p className="text-center font-medium w-7/12 sm:px-2 pb-9 mb-8 mx-auto">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <ul
              className="flex mx-auto space-x-9 justify-center text-xl"
              role={"tablist"}
              aria-labelledby="pageTitle"
            >
              {days.map((day: string, key: number) => {
                return (
                  <li
                    role={"tab"}
                    aria-selected={key === activeTab}
                    aria-controls="agendaPanel"
                    tabIndex={key === activeTab ? 0 : -1}
                    id={`tab-${key}`}
                    key={key}
                    className={`px-8 pb-1 hover:cursor-pointer ${
                      key === activeTab ? "border-b-5 border-secondary-2" : ""
                    }`}
                    onKeyDown={(e) => switchTab(e, key)}
                    onClick={() => setActiveTab(key)}
                  >
                    {week_day(day)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          id="agendaPanel"
          role={"tabpanel"}
          className="container pt-20"
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
        >
          <h2 className="font-medium text-[2em]" id="dayTitle">
            {data && days[activeTab]}
          </h2>
          <dl className="mt-16" aria-labelledby="dayTitle">
            {conference_agenda &&
              conference_agenda.map(
                (conference_agenda: AgendaInfo, key: number) => {
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
                }
              )}
          </dl>
        </div>
      </Layout>
    </>
  );
}
