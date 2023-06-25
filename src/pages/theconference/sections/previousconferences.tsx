import useSWR from "swr";
import { Fetcher } from "@/utils/fetcher";
import { DirectusFile } from "@/utils/searcher";
import ConferenceCard from "@/components/Cardutilities/ConferenceCard";

export type PreviousConferenceInfo = {
  id: string;
  year: number;
  banner: DirectusFile;
  theme: string;
  start_date: string;
  end_date: string;
  launch: string;
  registrations: number;
  country_partners: number;
  watch_parties: number;
  reg_countries: number;
  speakers: number;
  speaker_countries: number;
  knowledge_document: string;
  playlist: string;
  photos: string;
  watch_countries: string[];
};

export default function PreviousConference() {
  const { data }: any = useSWR(
    `query {
      conferences: conference_previuos(
        sort: "-year"
        filter: { status: { _eq: "published" } }
      ) {
        id
        year
        banner {
          id
          title
        }
        launch
        registrations
        country_partners
        watch_parties
        reg_countries
        speakers
		    speaker_countries
        knowledge_document
        photos
        watch_countries
      }
    }
    `,
    Fetcher
  );

  return (
    <div id="previous">
      <h2 className="text-5xl font-semibold mt-48 mb-14 container">
        About Previous Conferences
      </h2>
      <div className="container">
        {data && (
          <ul role="list">
            {data.conferences.map(
              (_conference: PreviousConferenceInfo, key: number) => (
                <ConferenceCard
                  conference={_conference}
                  key={key}
                  default_show={key === 1}
                />
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
