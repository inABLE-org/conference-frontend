import useSWR from "swr";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/router";
import { Fetcher } from "@/components/fetcher";

export default function Transcript() {
  const router = useRouter();
  const { media } = router.query;
  const { data }: any = useSWR(
    [
      `query fetch_transcript($id: GraphQLStringOrFloat) {
        conference_press(filter: { id: { _eq: $id } }) {
          banner {
            id
            title
            description
          }
        }
      }`,
      { id: Number(media) },
    ],
    ([url, token]) => Fetcher(url, token)
  );

  return (
    <Layout
      pageTitle={`${
        data ? data.conference_press[0].banner.title : ""
      } - Transcript`}
    >
      <div className="container pt-10 pb-36">
        <BackButton />
        <h1 className="font-medium text-2xl my-8">
          Video Transcript - {data && data.conference_press[0].banner.title}
        </h1>
        <div
          className="my-7"
          dangerouslySetInnerHTML={{
            __html: data
              ? data.conference_press[0].banner.description.replace(
                  /\n/g,
                  "<br />"
                )
              : "",
          }}
        ></div>
      </div>
    </Layout>
  );
}
