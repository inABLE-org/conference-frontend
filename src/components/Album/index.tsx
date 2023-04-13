import { Fetcher } from "@/components/fetcher";
import NextImage from "@/components/NextImage";
import { useEffect, useMemo, useState } from "react";
import { DirectusImage } from "../Sponsors";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

type AlbumPhotos = {
  id: string;
  directus_files_id: DirectusImage;
};

type ConferenceAlbum = {
  id: number;
  title: string;
  type: string;
  year: string;
  date_created: string;
  photos: AlbumPhotos[];
};

type CardProps = {
  title: string;
  onClick: any;
  src?: string;
  dateItems?: string;
  noTitle?: Boolean;
};

const formatDate = (_date: string | undefined) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    year: "numeric",
    month: "short",
  }).format(new Date(_date ? _date : 0));

const AlbumCard = ({
  title,
  onClick,
  src,
  dateItems = "",
  noTitle = false,
}: CardProps) => {
  return (
    <li
      className="flex flex-col space-y-5 justify-between hover:cursor-pointer"
      onClick={noTitle ? () => {} : onClick}
    >
      <button onClick={onClick}>
        <NextImage
          src={
            src
              ? `https://cms.inclusiveafrica.org/assets/${src}`
              : "/assets/icons/album.svg"
          }
          alt={title}
          className="h-[50vw] sm:max-h-[25vw] lg:max-h-[15.7vw] rounded-lg overflow-hidden"
          imgClass="object-cover"
          unoptimized
        />
      </button>
      {!noTitle && (
        <>
          <h3 className="text-xl text-left min-h-[3.5rem] flex items-start">
            {title}
          </h3>
          <p>{dateItems}</p>
        </>
      )}
    </li>
  );
};

const album_types = [
  { type: "main", title: "Inclusive Africa Conference" },
  {
    type: "pre-conference",
    title: "Inclusive Africa Pre Conference Activities",
  },
  { type: "dinner", title: "Inclusive Africa Conference Gala Dinner" },
  { type: "parties", title: "Watch Parties in Africa" },
];

export default function Album() {
  const [albumList, setAlbumList] = useState<ConferenceAlbum[] | []>([]);
  const [selectedType, setSelectedType] = useState<{
    type: string;
    title: string;
  } | null>(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState<ConferenceAlbum | null>(
    null
  );
  const [selectedPhoto, setSelectedPhoto] = useState<DirectusImage | null>(
    null
  );

  useEffect(() => {
    (async () => {
      try {
        const { conference_album }: any = await Fetcher(
          `query {
          conference_album(sort: "-year", filter: { status: { _eq: "published" } }) {
            id
            title
            type
            year
            date_created
            photos {
              id
              directus_files_id {
                id
                title
              }
            }
          }
        }
        `
        );

        setAlbumList(conference_album);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let years: string[] = [];

  if (selectedType) {
    years = Array.from(
      new Set(
        albumList
          .filter((_album) => _album.type === selectedType.type)
          .map((_album) => _album.year)
      )
    );
  }

  const albums = useMemo(() => {
    const new_list = albumList.filter(
      (_album) =>
        _album.type === selectedType?.type && _album.year === selectedYear
    );
    if (new_list.length === 1) {
      setSelectedAlbum(new_list[0]);
    }
    return new_list;
  }, [selectedYear, albumList, selectedType]);

  const shufflePhoto = (direction = "next") => {
    const currentIndex = selectedAlbum?.photos.findIndex(
      (_album) => _album.directus_files_id.id === selectedPhoto?.id
    );
    let nextIndex =
      direction === "prev" ? currentIndex! - 1 : currentIndex! + 1;
    if (nextIndex >= selectedAlbum!?.photos.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = selectedAlbum!?.photos.length - 1;
    }

    setSelectedPhoto(
      selectedAlbum?.photos[nextIndex].directus_files_id || null
    );
  };

  const ShuffleButton = ({ direction = "next" }: { direction?: string }) => {
    return (
      <button
        className="bg-ash-3 rounded-full h-fit p-3 "
        onClick={() => shufflePhoto(direction === "prev" ? "prev" : "next")}
      >
        {direction === "prev" ? (
          <ChevronLeftIcon
            className="h-7 w-7 inline-flex stroke-[1.5]"
            stroke="currentColor"
          />
        ) : (
          <ChevronRightIcon
            className="h-7 w-7 inline-flex stroke-[1.5]"
            stroke="currentColor"
          />
        )}
      </button>
    );
  };

  return (
    <>
      {!selectedType && selectedYear === "" && (
        <>
          <h2 className="font-semibold text-5xl mb-2">Photo Album</h2>
          <p className="font-medium">
            Here are some photo Highlights of previous Meetings & Conferences
          </p>
        </>
      )}

      {selectedType && !selectedPhoto && (
        <>
          <nav aria-label="Breadcrumb">
            <ul className="flex font-medium items-center">
              <li>
                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    setSelectedAlbum(null);
                    setSelectedYear("");
                    setSelectedType(null);
                  }}
                >
                  Photo Album
                </button>
              </li>
              <li className="inline-flex">
                <span className="text-secondary-2 pb-2 px-2 font-bold text 3xl">
                  .
                </span>
                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    setSelectedAlbum(null);
                    setSelectedYear("");
                  }}
                >
                  {selectedType.title}
                </button>
              </li>
              {selectedYear && (
                <li className="inline-flex">
                  <span className="text-secondary-2 pb-2 px-2 font-bold text 3xl">
                    .
                  </span>
                  <button
                    onClick={() => {
                      setSelectedPhoto(null);
                      setSelectedAlbum(null);
                    }}
                  >
                    {selectedYear}
                  </button>
                </li>
              )}
              {selectedAlbum && (
                <li className="inline-flex">
                  <span className="text-secondary-2 pb-2 px-2 font-bold text 3xl">
                    .
                  </span>
                  <button
                    onClick={() => {
                      setSelectedAlbum(null);
                    }}
                  >
                    {selectedAlbum.title}
                  </button>
                </li>
              )}
            </ul>
            <h2 className="font-medium text-[2rem] mb-8 mt-4">
              {selectedType.title} {selectedYear ? ` - ${selectedYear}` : ""}{" "}
              {selectedAlbum ? `, ${selectedAlbum.title}` : ""}
            </h2>
          </nav>
        </>
      )}

      {albumList.length > 0 && !selectedPhoto && (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 font-medium mt-11 gap-5">
          {!selectedType &&
            album_types.map((_type, key: number) => (
              <AlbumCard
                key={key}
                title={_type.title}
                src={
                  albumList.find(
                    (album: ConferenceAlbum) => album.type === _type.type
                  )?.photos[0]?.directus_files_id!.id
                }
                dateItems={`${formatDate(
                  albumList.find(
                    (album: ConferenceAlbum) => album.type === _type.type
                  )?.date_created
                )} . ${albumList
                  .filter((album: ConferenceAlbum) => album.type === _type.type)
                  .reduce(
                    (sum: number, album: ConferenceAlbum) =>
                      sum + album.photos.length,
                    0
                  )} items`}
                onClick={() => {
                  setSelectedType(_type);
                }}
              />
            ))}
          {selectedType &&
            !selectedYear &&
            years.map((year, key: number) => (
              <AlbumCard
                key={key}
                title={`${selectedType.title} ${year}`}
                src={
                  albumList.find(
                    (album: ConferenceAlbum) =>
                      album.type === selectedType.type && album.year === year
                  )?.photos[0]?.directus_files_id!.id
                }
                dateItems={`${formatDate(
                  albumList.find(
                    (album: ConferenceAlbum) =>
                      album.type === selectedType.type && album.year === year
                  )?.date_created
                )} . ${albumList
                  .filter(
                    (album: ConferenceAlbum) =>
                      album.type === selectedType.type && album.year === year
                  )
                  .reduce(
                    (sum: number, album: ConferenceAlbum) =>
                      sum + album.photos.length,
                    0
                  )} items`}
                onClick={() => {
                  setSelectedYear(year);
                }}
              />
            ))}
          {selectedType &&
            !selectedAlbum &&
            albums.length > 1 &&
            albums.map((_album, key: number) => (
              <AlbumCard
                key={key}
                title={`${_album.title}`}
                src={_album?.photos[0]?.directus_files_id!.id}
                dateItems={`${formatDate(_album?.date_created)} . ${
                  _album.photos.length
                } items`}
                onClick={() => {
                  setSelectedAlbum(_album);
                }}
              />
            ))}
          {selectedAlbum &&
            selectedAlbum.photos.map(({ directus_files_id }, key: number) => (
              <AlbumCard
                key={key}
                title={`${directus_files_id.title}`}
                src={directus_files_id.id}
                noTitle
                onClick={() => {
                  setSelectedPhoto(directus_files_id);
                }}
              />
            ))}
        </ul>
      )}
      {selectedPhoto && (
        <>
          <div className="font-medium text-xl">
            <ArrowLeftIcon
              className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
              stroke="currentColor"
            />
            <button
              className="ml-4"
              type="button"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Back to Album"
            >
              Go Back
            </button>
          </div>
          <h2 className="font-medium text-[2rem] mb-8 mt-4">
            {selectedPhoto.title}
          </h2>
          <div className="flex justify-between items-center">
            <ShuffleButton direction="prev" />
            <div className="flex-grow px-14">
              <NextImage
                src={`https://cms.inclusiveafrica.org/assets/${selectedPhoto.id}`}
                alt={selectedPhoto.title}
                className="h-[50vw] sm:h-[35vw] rounded overflow-hidden"
                imgClass="object-cover"
              />
            </div>
            <ShuffleButton />
          </div>
          <div className="flex justify-center mt-5 space-x-3 sm:hidden">
            <ShuffleButton direction="prev" />
            <ShuffleButton />
          </div>
        </>
      )}
    </>
  );
}
