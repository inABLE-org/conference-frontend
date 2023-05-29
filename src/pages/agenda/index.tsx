import useSWR from "swr";
import Layout from "@/components/Layout";
import { Fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Tabs from "@/components/Tabs";
import TabPanel from "@/components/Tabs/TabPanel";
import { SpeakerInfo } from "../speakers";
import AgendaPane from "@/components/AgendaPane";
import { useSearchParams } from "next/navigation";

export type ConferenceSpeaker = {
  conference_speakers_id: SpeakerInfo;
};

export type Venue = {
  id: string;
  name: string;
};

export type ConferenceVenue = {
  conference_venues_id: Venue;
};

export type AgendaInfo = {
  id: string;
  title: string;
  no_speakers: Boolean;
  description: string;
  start_time: string;
  end_time: string;
  moderator: SpeakerInfo;
  speakers: ConferenceSpeaker[];
  venue: ConferenceVenue[];
  breakouts: ConferenceVenue[];
};

const week_day = (_date: string) =>
  new Intl.DateTimeFormat("en", { weekday: "long" }).format(new Date(_date));

export const formatDate = (_date: string) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(_date));

export default function Agenda() {
  const searchParams = useSearchParams();
  const day = Number(searchParams.get("day"));
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (typeof day === "number" && day >= 1 && day <= 3) {
      setActiveTab(day - 1);
    }
  }, [day]);

  const { data }: any = useSWR(
    `query {
      conference_config(
        limit: 1
        filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
      ) {
        draft_agenda
        agenda_link
      }
      conference_agenda(
        sort: "start_time"
        filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
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
          organization
          role
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
      <Layout pageTitle="Agenda">
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-white">
          <div className="container">
            <div className="mb-12">
              <PageTitle title="Agenda" />
            </div>
            <Tabs
              tabList={days.map((day) => week_day(day))}
              className="text-center flex flex-col sm:flex-row mx-auto sm:space-x-9 space-y-9 sm:space-y-0 justify-center text-xl"
              onTabSwith={setActiveTab}
              highlited={days.indexOf(formatDate(new Date().toISOString()))}
              selectedTab={activeTab}
            />
          </div>
        </div>
        <TabPanel className="container py-16" activeTab={activeTab}>
          {data && (
            <>
              <a
                href={`${data.conference_config[0].agenda_link}?download=`}
                className="mb-9 text-link-1 underline text-xl font-medium block"
                download
              >
                Click to download the agenda
              </a>
              <AgendaPane
                date={days[activeTab]}
                draft={data.conference_config[0].draft_agenda}
                agendaList={data.conference_agenda.filter(
                  (agenda: AgendaInfo) =>
                    formatDate(agenda.start_time) === days[activeTab]
                )}
              />
            </>
          )}
        </TabPanel>
      </Layout>
    </>
  );
}
