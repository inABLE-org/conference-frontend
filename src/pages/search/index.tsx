import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { SpeakerInfo } from "../speakers";
import BackButton from "@/components/BackButton";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import NextImage from "@/components/NextImage";
import { Searcher, SiteSearch } from "@/utils/searcher";

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

export const formatDate = (_date: string) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(_date));

export default function Search() {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("search");
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<SiteSearch[]>([]);

  const search_box = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSearchText(searchWord || "");
    if (searchWord) {
      (async () => {
        try {
          const search_results: Promise<SiteSearch[]> = Searcher(searchWord);

          setSearchResults(await search_results);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [searchWord]);

  return (
    <>
      <Layout pageTitle={`${searchWord || ""} Search Results`}>
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-white">
          <div className="container">
            <div className="mb-14">
              <BackButton />
              <PageTitle title="Search Results" />
              <form
                className="sm:flex items-center justify-center"
                role="search"
                aria-label="Site"
                action="/search"
              >
                <label
                  htmlFor="siteSearch"
                  className="mr-3 font-semibold text-xl mb-3 sm:mb-0 block"
                >
                  Search:
                </label>
                <div className="flex md:w-[27.625rem]">
                  <div className="flex-grow md:h-11 relative">
                    <input
                      id="siteSearch"
                      type="text"
                      name="search"
                      value={searchText || ""}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="rounded-s-3xl text-ash-8 py-3 px-5 w-full h-full"
                      aria-label="Enter search keyword"
                      required
                      aria-required="true"
                      ref={search_box}
                    />
                    <button
                      type="reset"
                      aria-label="clear search"
                      className={`absolute right-7 top-1/2 -translate-y-1/2 ${
                        searchText ? "" : "hidden"
                      }`}
                      onClick={() => {
                        setSearchText("");
                        search_box.current?.focus();
                      }}
                    >
                      <XMarkIcon
                        className="h-6 w-6 text-black stroke-[1.5]"
                        stroke="currentColor"
                      />
                    </button>
                  </div>
                  <button
                    type="submit"
                    aria-label="search"
                    className="bg-secondary rounded-e-3xl ps-4 pe-7"
                  >
                    <MagnifyingGlassIcon
                      className="h-4 w-4 md:h-6 md:w-6 stroke-[1.5]"
                      stroke="currentColor"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="xl2:px-14 xl:mx-1">
            <h2 className="font-semibold text-xl my-12">
              About {searchResults.length} Search Results for ”{searchWord}”
            </h2>
            {searchResults.length > 0 && (
              <ul>
                {searchResults.map((_searchItem: SiteSearch, key: number) => {
                  return _searchItem.banner ? (
                    <li
                      key={key}
                      className="bg-white sm:flex px-6 py-5 space-x-6 mb-9"
                    >
                      <div>
                        {_searchItem.banner.type.includes("image") && (
                          <NextImage
                            src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${_searchItem.banner.id}`}
                            alt={_searchItem.banner.title}
                            className="h-52 w-64"
                            imgClass="object-cover"
                            unoptimized
                          />
                        )}
                        {_searchItem.banner.type.includes("video") && (
                          <div className="h-52 w-64">
                            <video
                              className="w-full max-h-full"
                              controls
                              aria-label={`${_searchItem.banner.title} video`}
                            >
                              <source
                                src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${_searchItem.banner.id}`}
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="w-11/12">
                          {_searchItem.breadcrumb}
                          <h3 className="font-semibold text-xl mt-2">
                            <a
                              href={_searchItem.link}
                              className="hover:underline"
                            >
                              {_searchItem.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li className="bg-white p-9 pt-4 mb-9" key={key}>
                      <h3 className="font-semibold text-xl my-2">
                        <a href={_searchItem.link} className="hover:underline">
                          {_searchItem.title}
                        </a>
                      </h3>
                      <p className="font-light">{_searchItem.desc}</p>
                    </li>
                  );
                })}
              </ul>
            )}
            {searchResults.length === 0 && (
              <p className="text-center">No Results Found</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
