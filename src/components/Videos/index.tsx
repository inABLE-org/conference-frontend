import useSWR from "swr";
import { PlayIcon } from "@heroicons/react/24/solid";
import NextImage from "@/components/NextImage";
import { Fetcher } from "@/utils/fetcher";
import { PreviousConferenceInfo } from "@/pages/theconference/sections/previousconferences";

const formatDate = (_date: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(_date));

export default function Videos() {
  const { data }: any = useSWR(
    `query {
      vids: conference_previuos(
        sort: "-year"
        filter: { status: { _eq: "published" } }
      ) {
        id
        year
        banner {
          id
          title
        }
        theme
        start_date
        end_date
        playlist
      }
    }`,
    Fetcher
  );

  return (
    <div className="xl2:px-14 xl:mx-1">
      {data && (
        <ul role="list">
          {data.vids.map((_vid: PreviousConferenceInfo, key: number) => {
            return (
              <li
                key={key}
                className="border-b border-ash-9 sm:flex pb-11 sm:space-x-8 mb-8"
              >
                <div className="relative">
                  <NextImage
                    src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${_vid.banner.id}`}
                    alt=""
                    className="h-32 w-full sm:w-48"
                    imgClass="object-cover"
                    unoptimized
                  />
                  <a
                    href={_vid.playlist}
                    target="_blank"
                    aria-describedby="newTab"
                    className="absolute top-0 h-full w-full flex items-center justify-center bg-black bg-opacity-25"
                  >
                    <span className="rounded-full border border-white p-1 h-fit">
                      <PlayIcon
                        className="h-5 w-5 text-white"
                        aria-label={`Inclusive Africa Conference ${_vid.year} playlist`}
                        aria-hidden="false"
                      />
                    </span>
                  </a>
                </div>
                <div className="flex-grow">
                  <div className="w-11/12">
                    <h3 className="font-medium text-xl mb-2">
                      {`Inclusive Africa Conference ${_vid.year}`}
                    </h3>
                    <p className="xl:w-8/12">
                      <strong className="font-semibold">Theme : </strong>
                      {_vid.theme}
                    </p>
                    <p className="mt-6 text-ash-9">
                      {_vid.start_date === _vid.end_date ? (
                        formatDate(_vid.start_date)
                      ) : (
                        <>
                          {new Intl.DateTimeFormat("en-US", {
                            month: "long",
                            day: "numeric",
                          }).format(new Date(_vid.start_date))}{" "}
                          - <span className="sr-only">to</span>{" "}
                          {formatDate(_vid.end_date)}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
