import useSWR from "swr";
import { Fetcher } from "@/components/fetcher";

export type DirectusFile = {
  id: string;
  title: string;
  type: string;
};

type News = {
  id: number;
  title: string;
  link: string;
  owner: string;
  type: string;
  year: string;
};

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

  const NewsItems = ({ year, type }: { year: string; type: string }) => {
    return (
      <ul className="list-disc ml-8 space-y-3">
        {data.conference_news
          .filter((news: News) => news.year === year && news.type === type)
          .map((news: News, key: number) => {
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
                className="shadow-gi-card bg-white sm:ml-11 mb-20"
                aria-labelledby={year}
              >
                {data.conference_news.filter(
                  (news: News) => news.year === year && news.type === "tv").length > 0 && (
                  <li className="lg:flex border-b-[0.0625rem]">
                    <div className="font-semibold text-xl pr-11 pl-5 pt-6 lg:pb-10 lg:w-[30%] xl:w-[24%]">
                      <h3 className="text-center lg:text-end">TV Stories</h3>
                    </div>
                    <div className="font-medium border-l-[0.09375rem] py-6 px-2  lg:w-[70%] xl:w-[76%]">
                      <NewsItems year={year} type="tv" />
                    </div>
                  </li>
                )}
                {data.conference_news.filter(
                  (news: News) => news.year === year && news.type === "radio").length > 0 && (
                  <li className="lg:flex border-b-[0.0625rem]">
                    <div className="font-semibold text-xl pr-11 pl-5 pt-6 lg:pb-10 lg:w-[30%] xl:w-[24%]">
                      <h3 className="text-center lg:text-end">
                        Radio News Stories
                      </h3>
                    </div>
                    <div className="font-medium border-l-[0.09375rem] py-6 px-2  lg:w-[70%] xl:w-[76%]">
                      <NewsItems year={year} type="radio" />
                    </div>
                  </li>
                )}
                {data.conference_news.filter(
                  (news: News) => news.year === year && news.type === "print").length > 0 && (
                  <li className="lg:flex border-b-[0.0625rem]">
                    <div className="font-semibold text-xl pr-11 pl-5 pt-6 lg:pb-10 lg:w-[30%] xl:w-[24%]">
                      <h3 className="text-center lg:text-end">
                        Print News Stories
                      </h3>
                    </div>
                    <div className="font-medium border-l-[0.09375rem] py-6 px-2  lg:w-[70%] xl:w-[76%]">
                      <NewsItems year={year} type="print" />
                    </div>
                  </li>
                )}
                {data.conference_news.filter(
                  (news: News) => news.type === "digital").length > 0 && (
                  <li className="lg:flex border-b-[0.0625rem]">
                    <div className="font-semibold text-xl pr-11 pl-5 pt-6 lg:pb-10 lg:w-[30%] xl:w-[24%]">
                      <h3 className="text-center lg:text-end">
                        Digital News Stories
                      </h3>
                    </div>
                    <div className="font-medium border-l-[0.09375rem] py-6 px-2 lg:w-[70%] xl:w-[76%]">
                      <NewsItems year={year} type="digital" />
                    </div>
                  </li>
                )}
              </ul>
            </>
          );
        })}
    </>
  );
}
