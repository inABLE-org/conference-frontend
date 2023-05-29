import useSWR from "swr";
import { Fetcher } from "@/utils/fetcher";

type News = {
  id: number;
  title: string;
  link: string;
  owner: string;
  type: string;
  year: string;
};

const news_types = [
  { title: "TV Stories", type: "tv" },
  { title: "Radio News Stories", type: "radio" },
  { title: "Print News Stories", type: "print" },
  { title: "Digital News Stories", type: "digital" },
];

export default function NewsLinks() {
  const { data }: any = useSWR(
    `query {
      conference_news(sort: "-year", filter: { status: { _eq: "published" } }) {
        id
        title
        link
        owner
        type
        year
      }
    }`,
    Fetcher
  );

  let years: string[] = [];

  if (data) {
    years = Array.from(
      new Set(data.conference_news.map((news: News) => news.year))
    );
  }

  const NewsItems = ({
    year,
    type,
  }: {
    year: string;
    type: { title: string; type: string };
  }) => {
    const type_news = data.conference_news.filter(
      (news: News) => news.year === year && news.type === type.type
    );
    return (
      <>
        {type_news.length > 0 && (
          <li className="lg:flex border-b-[0.0625rem]">
            <div className="font-semibold text-xl pr-11 pl-5 pt-6 lg:pb-10 lg:w-[30%] xl:w-[24%]">
              <h3 className="text-center lg:text-end">{type.title}</h3>
            </div>
            <div className="font-medium border-l-[0.09375rem] py-6 px-2  lg:w-[70%] xl:w-[76%]">
              <ul role="list" className="list-disc ml-8 space-y-3">
                {type_news.map((news: News, key: number) => {
                  return (
                    <li key={key}>
                      <span className="font-bold">{news.owner}</span> -{" "}
                      <a
                        href={news.link}
                        target={"_blank"}
                        className="text-link underline"
                        aria-label={`${news.title}(Opens in a new tab)`}
                      >
                        {news.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        )}
      </>
    );
  };

  return (
    <>
      {years.length > 0 &&
        years.map((year: string) => {
          return (
            <>
              <h2 className="font-semibold text-2xl mb-7" id={year}>
                {year} NEWS STORIES
              </h2>
              <ul
                role="list"
                className="shadow-gi-card bg-white sm:ml-11 mb-20"
                aria-labelledby={year}
              >
                {news_types.map((_type, key) => {
                  return <NewsItems key={key} year={year} type={_type} />;
                })}
              </ul>
            </>
          );
        })}
    </>
  );
}
