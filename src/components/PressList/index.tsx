import useSWR from "swr";
import { Fetcher } from "@/utils/fetcher";
import NextImage from "@/components/NextImage";
import { useRouter } from "next/router";
import { DirectusFile } from "@/utils/searcher";

export type Press = {
  id: number;
  title: string;
  excerpt: string;
  date: Date;
  banner: DirectusFile;
};

export default function PressList() {
  const router = useRouter();
  const { data }: any = useSWR(
    `query {
      conference_press(sort: "-date", filter: { status: { _eq: "published" } }) {
        id
        title
        excerpt
        date
        banner {
          id
          title
          type
        }
      }
    }
    `,
    Fetcher
  );

  return (
    <ul
      role="list"
      className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 sm:gap-y-20 space-y-20 sm:space-y-0"
    >
      {data &&
        data.conference_press.map((press: Press, key: number) => {
          return (
            <li
              key={key}
              className="shadow-agenda-card pb-7 flex flex-col justify-between bg-white space-y-5 hover:cursor-pointer"
              onClick={
                press.banner && press.banner.type.includes("image")
                  ? () => router.push(`/media/press_release?press=${press.id}`)
                  : () => {}
              }
            >
              {!press.banner && (
                <NextImage
                  src="/assets/icons/album.svg"
                  className="h-[50vw] sm:max-h-[25vw] lg:max-h-[15.7vw]  2xl:max-h-[12vw]"
                  imgClass="object-cover"
                />
              )}
              {press.banner && press.banner.type.includes("image") && (
                <NextImage
                  src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${press.banner.id}`}
                  alt={press.banner.title}
                  className="h-[50vw] sm:max-h-[25vw] lg:max-h-[15.7vw] 2xl:max-h-[12vw]"
                  imgClass="object-cover"
                  unoptimized
                />
              )}
              {press.banner && press.banner.type.includes("video") && (
                <div className="h-[50vw] sm:max-h-[25vw] lg:max-h-[15.7vw] 2xl:max-h-[12vw]">
                  <video
                    className="w-full max-h-full"
                    controls
                    aria-label={`${press.banner.title} video`}
                  >
                    <source
                      src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${press.banner.id}`}
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className="px-5 flex flex-row-reverse">
                {press.banner && press.banner.type.includes("video") && (
                  <a
                    href={`/media/transcript?media=${press.id}`}
                    className="border border-ash-5 px-2 py-2 h-10 w-10 ml-4"
                  >
                    <NextImage
                      src="/assets/icons/transcription 1.svg"
                      alt="transcript"
                      className="h-5 w-5"
                      imgClass="object-none"
                    />
                  </a>
                )}
                <p
                  className="font-medium line-clamp-4 overflow-hidden"
                  onClick={
                    press.banner && press.banner.type.includes("video")
                      ? () =>
                          router.push(`/media/press_release?press=${press.id}`)
                      : () => {}
                  }
                  dangerouslySetInnerHTML={{
                    __html: press.excerpt,
                  }}
                ></p>
              </div>
              <a
                href={`/media/press_release?press=${press.id}`}
                className="ml-5 font-bold border-b-2 border-secondary-2 w-fit max-w-[83%] text-[0.836875rem] capitalize truncate ..."
              >
                Read More About {press.title}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
