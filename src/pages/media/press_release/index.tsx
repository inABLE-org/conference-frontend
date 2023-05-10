import useSWR from "swr";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/router";
import { Fetcher } from "@/utils/fetcher";
import NextImage from "@/components/NextImage";

export default function PressRelease() {
  const router = useRouter();
  const { press } = router.query;
  const { data }: any = useSWR(
    [
      `query fetch_press($id: GraphQLStringOrFloat) {
        conference_press(filter: { id: { _eq: $id } }) {
          id
          title
          excerpt
          content
          about_inable
          about_conference
          contacts
          date
          banner {
            id
            title
            type
          }
        }
        conference_config(
          limit: 1
          filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
        ) {
          about_inable
          about_conference
        }
      }`,
      { id: Number(press) },
    ],
    ([url, token]) => Fetcher(url, token)
  );

  return (
    <Layout pageTitle={data ? data.conference_press[0].title : ""}>
      <div className="container pt-10 pb-36">
        <BackButton />
        {data && (
          <>
            <h1 className="font-semibold text-2xl mt-8 mb-2">
              {data.conference_press[0].title}
            </h1>
            <p className="font-medium mb-8">
              {new Intl.DateTimeFormat("en").format(
                new Date(data.conference_press[0].date)
              )}
            </p>
            <div>
              {data.conference_press[0].banner &&
                data.conference_press[0].banner.type.includes("image") && (
                  <NextImage
                    src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${data.conference_press[0].banner.id}`}
                    alt={data.conference_press[0].banner.title}
                    className="h-[50vw] md:max-h-[40vw]"
                    imgClass="object-contain"
                  />
                )}
              {data.conference_press[0].banner &&
                data.conference_press[0].banner.type.includes("video") && (
                  <>
                    <div className="h-[50vw] md:max-h-[24.5vw]">
                      <video
                        className="w-full max-h-full"
                        controls
                        aria-label={`${data.conference_press[0].banner.title} video`}
                      >
                        <source
                          src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${data.conference_press[0].banner.id}`}
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="mt-8">
                      <a
                        href={`/media/transcript?media=${data.conference_press[0].id}`}
                        className="font-bold text-[0.8125em] border-b-2 pb-[0.125rem]"
                      >
                        Video Transcript
                      </a>
                    </div>
                  </>
                )}
            </div>
            <div
              className="my-7 media-links"
              dangerouslySetInnerHTML={{
                __html: data.conference_press[0].content,
              }}
            ></div>
            <div className="space-y-7 media-links">
              {data.conference_press[0].about_inable && (
                <div>
                  <h2 className="text-xl font-semibold">About inABLE</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.conference_config[0].about_inable,
                    }}
                  ></div>
                </div>
              )}
              {data.conference_press[0].about_conference && (
                <div>
                  <h2 className="text-xl font-semibold">
                    About the Annual Inclusive Africa Conference
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.conference_config[0].about_conference,
                    }}
                  ></div>
                </div>
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: data.conference_press[0].contacts,
                }}
              ></div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
