import NextImage from "@/components/NextImage";
import { DirectusFile } from "@/utils/searcher";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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

const ConferenceNum = (props: { title: string; text: string }) => {
  return (
    <div className="rounded bg-white flex items-center justify-center py-5 px-1 xl:px-5 text-black text-center">
      <p role="text">
        <span className="text-2xl font-semibold block">{props.title} </span>
        {props.text}
      </p>
    </div>
  );
};

export default function ConferenceCard({
  conference,
  default_show,
}: {
  conference: PreviousConferenceInfo;
  default_show: boolean;
}) {
  const [show, setShow] = useState(default_show);

  let listSize = conference.watch_countries.length / 3;
  if (conference.watch_countries.length / 3 > 0) {
    listSize += 1;
  }
  return (
    <li className="bg-gradient-to-b from-primary to-primary-1 px-7 text-white py-7 mb-10">
      <div className="flex justify-between">
        <h3
          id={`conference-${conference.year}`}
          className="font-medium text-2xl block"
        >
          Inclusive Africa Conference {conference.year}
        </h3>
        <button
          onClick={() => setShow(!show)}
          aria-expanded={show}
          aria-labelledby={`conference-${conference.year}`}
        >
          {show ? (
            <ChevronUpIcon className="h-9 w-9" stroke="currentColor" />
          ) : (
            <ChevronDownIcon className="h-9 w-9" stroke="currentColor" />
          )}
        </button>
      </div>
      <div aria-live="polite">
        <div
          className={`lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-16 pt-14 pb-12 xl:px-11 ${
            show ? "grid" : "hidden"
          }`}
        >
          <div>
            <NextImage
              className="h-[50vw] max-h-[27vw] w-full"
              src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${conference.banner.id}`}
              imgClass="object-cover"
            />
            <h4 className="text-white font-bold text-xl my-5">
              Live Watch parties In:
            </h4>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-[-30px] mt-3 text-white lg:w-[430px] ml-5">
              <div>
                <ul className="list-disc">
                  {conference.watch_countries
                    .slice(0, listSize)
                    .map((_country, key) => (
                      <li key={key}>{_country}</li>
                    ))}
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  {conference.watch_countries
                    .slice(listSize, listSize * 2 - 1)
                    .map((_country, key) => (
                      <li key={key}>{_country}</li>
                    ))}
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  {conference.watch_countries
                    .slice(listSize * 2 - 1)
                    .map((_country, key) => (
                      <li key={key} className="xl:whitespace-nowrap">
                        {_country}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 flex flex-col space-y-4">
              {conference.knowledge_document && (
                <a
                  href={conference.knowledge_document}
                  className="text-white border-b-2 border-b-secondary font-medium w-fit"
                  target={"_blank"}
                  aria-describedby={`conference-${conference.year} newTab`}
                >
                  Knowledge Document
                </a>
              )}
            </div>
          </div>
          <div>
            {conference.photos && (
              <a
                href={conference.photos}
                className="border border-white py-2 px-4 mb-7 w-full rounded block text-center font-medium"
              >
                {conference.year} Conference Photos
              </a>
            )}
            <div className="grid gap-x-9 gap-y-7 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-3">
              {conference.launch && (
                <ConferenceNum title="Launch" text={conference.launch} />
              )}
              <ConferenceNum
                title={`${conference.registrations}`}
                text="Registrations"
              />
              <ConferenceNum
                title={`${conference.country_partners}`}
                text="Country partners"
              />
              <ConferenceNum
                title={`${conference.watch_parties}`}
                text="Watch Parties Attendance"
              />
              <ConferenceNum
                title={`${conference.reg_countries}`}
                text="Countries by registration"
              />
              <ConferenceNum
                title={`${conference.speakers} / ${conference.speaker_countries}`}
                text="Speakers Countries"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
