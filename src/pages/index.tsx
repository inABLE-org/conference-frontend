import useSWR from "swr";
import CTACard, { CTACardProps } from "@/components/CTACard";
import CustomImage from "@/components/CustomImage";
import Layout from "@/components/Layout";
import {
  ArrowRightIcon,
  CalendarIcon,
  HomeIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { Inter } from "next/font/google";
import { Fetcher } from "@/components/fetcher";
import Sponsors, { Sponsor } from "@/components/Sponsors";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-inter",
});

type CTAInfo = CTACardProps & {
  link_text: string;
};

export default function Home() {
  const { data }: any = useSWR(
    `query fetchConerenceInfo {
      config: conference_config(
        limit: 1
        filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
      ) {
        date
        time
        venue
        location
        type
        host
        host_website
        hero_image {
          id
          title
        }
      }
      CTA: conference_call_to_action(
        limit: 4
        sort: "order"
        filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
      ) {
        title
        description
        link_text
        link
      }
      platinum: conference_sponsors(
        limit: 4
        filter: {
          status: { _eq: "published" }
          type: { _eq: "Platinum" }
          year: { _eq: 2023 }
        }
      ) {
        name
        logo {
          id
          description
        }
        website
      }
      gold: conference_sponsors(
        limit: 4
        filter: {
          status: { _eq: "published" }
          type: { _eq: "Gold" }
          year: { _eq: 2023 }
        }
      ) {
        name
        logo {
          id
          title
        }
        website
      }
      silver: conference_sponsors(
        limit: 4
        filter: {
          status: { _eq: "published" }
          type: { _eq: "Silver" }
          year: { _eq: 2023 }
        }
      ) {
        name
        logo {
          id
          title
        }
        website
      }
      bronze: conference_sponsors(
        limit: 4
        filter: {
          status: { _eq: "published" }
          type: { _eq: "Bronze" }
          year: { _eq: 2023 }
        }
      ) {
        name
        logo {
          id
          title
        }
        website
      }
      jubilee: conference_sponsors(
        limit: 4
        filter: {
          status: { _eq: "published" }
          type: { _eq: "Jubilee" }
          year: { _eq: 2023 }
        }
      ) {
        name
        logo {
          id
          title
        }
        website
      }
    }
    `,
    Fetcher
  );

  const SponsorsDisplay = () => {
    let title = "Platinum Sponsors";
    let _list: Sponsor[] = data.platinum;

    if (!_list.length) {
      title = "Gold Sponsors";
      _list = data.gold;
    }

    if (!_list.length) {
      title = "Silver Sponsors";
      _list = data.silver;
    }

    if (!_list.length) {
      title = "Bronze Sponsors";
      _list = data.bronze;
    }

    if (!_list.length) {
      title = "Jubilee Sponsors";
      _list = data.bronze;
    }

    return <Sponsors title={title} sponsors={_list} />;
  };

  return (
    <>
      <Layout>
        <div className="bg-gradient-to-b from-primary to-primary-1">
          <div className="lg:grid grid-cols-2">
            <div className="pl-14 flex items-center">
              <div>
                <h1
                  id="pageTitle"
                  className={`${inter.variable} font-sans-2 font-bold text-4xl sm:text-5xl md:text-6xl xl:text-[4em] text-white mb-9 sm:leading-[4.840625rem] md:mt-3 lg:mt-0`}
                >
                  Inclusive{" "}
                  <span className="text-secondary-1 inline-block">
                    Africa
                    <CustomImage
                      src={"/assets/icons/Vector.png"}
                      alt=""
                      className="inline-flex h-7 w-5 absolute -top-3 sm:-top-5 md:-top-8 -right-1 sm:-right-2 md:-right-2 lg:-right-4 2xl:-right-2"
                    />
                  </span>{" "}
                  Conference 2023
                </h1>
                <p className="text-white text-2xl mb-16 pr-12">
                  Taking digital accessibility & assistive technology in Africa
                  to the next level.
                </p>
                <div className="text-xs sm:text-xl font-semibold text-white pb-5 flex">
                  <a
                    href="#"
                    className="rounded-3xl bg-secondary py-2 px-3 sm:px-12 mr-9"
                    aria-describedby="pageTitle"
                  >
                    Register
                  </a>
                  <a
                    href="#"
                    className="rounded-3xl border-2 py-2 px-5"
                    aria-describedby="pageTitle"
                  >
                    Read More{" "}
                    <ArrowRightIcon
                      className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                      stroke="currentColor"
                    />
                  </a>
                </div>
                <div className="min-h-[7rem] xl:min-h-[10rem]"></div>
              </div>
            </div>
            <div className="overflow-clip">
              {data && (
                <CustomImage
                  src={`https://cms.inclusiveafrica.org/assets/${data.config[0].hero_image.id}`}
                  alt={data.config[0].hero_image.title}
                  className="hidden lg:block min-h-[50vw] 2xl:min-h-[45vw] w-full"
                />
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 bg-white py-12 pl-11 pr-8 -mt-20 shadow-md">
            <div className="flex items-center text-sm font-medium">
              <CalendarIcon
                className="h-8 w-8 text-primary-3 stroke-[0.8] mr-3"
                stroke="currentColor"
              />
              <div>
                {data ? data.config[0].date : ""} <br />{" "}
                {data ? data.config[0].time : ""}
              </div>
            </div>
            <div className="flex items-center text-sm font-medium">
              <MapPinIcon
                className="h-8 w-8 text-primary-3 stroke-[0.8] mr-3"
                stroke="currentColor"
              />
              <div>
                {data ? data.config[0].venue : ""} <br />
                {data ? data.config[0].location : ""}
              </div>
            </div>
            <div className="lg:flex items-center text-sm font-medium hidden">
              <UserGroupIcon
                className="h-8 w-8 text-primary-3 stroke-[0.8] mr-3"
                stroke="currentColor"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: `${data ? data.config[0].type : ""} ${
                    data && data.config[0].type === "Hybrid"
                      ? "Conference <br /> (In person + Virtual)"
                      : "<br />"
                  }`,
                }}
              ></div>
            </div>
            <div className="flex items-center text-sm font-medium">
              <HomeIcon
                className="h-8 w-8 text-primary-3 stroke-[0.8] mr-3"
                stroke="currentColor"
              />
              <div>
                Hosted By <br />
                <a
                  className="underline"
                  href={`${data ? data.config[0].host_website : ""} `}
                >
                  {data ? data.config[0].host : ""}{" "}
                </a>
              </div>
            </div>
            <div className="md:col-span-full xl:col-span-1">
              <h2 className="text-sm font-semibold text-center mb-3">
                Follow us on Social Media
              </h2>
              <ul className="flex space-x-6 items-center justify-center">
                <li>
                  <a
                    href="https://www.instagram.com/inableorg/"
                    target={"_blank"}
                  >
                    <CustomImage
                      src={"/assets/icons/instagram.png"}
                      alt="Our instagram(opens in a new tab)"
                      className="h-5 w-6"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@inABLEvideos"
                    target={"_blank"}
                  >
                    <CustomImage
                      src={"/assets/icons/Youtube.png"}
                      alt="Our youtube channel(opens in a new tab)"
                      className="h-5 w-6"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/inABLEorg" target={"_blank"}>
                    <CustomImage
                      src={"/assets/icons/Twitter.png"}
                      alt="Our twitter account(opens in a new tab)"
                      className="h-5 w-6"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/InABLE" target={"_blank"}>
                    <CustomImage
                      src={"/assets/icons/FacebookBlue.png"}
                      alt="Our facebook page(opens in a new tab)"
                      className="h-5 w-6"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/inable/"
                    target={"_blank"}
                  >
                    <CustomImage
                      src={"/assets/icons/LinkedinDark.png"}
                      alt="Our linkedIn account(opens in a new tab)"
                      className="h-5 w-6"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container grid sm:grid-cols-2 xl:grid-cols-4 gap-6 my-16">
          {data && data.CTA.length && (
            <>
              {data.CTA.map((cta: CTAInfo, key: number) => {
                return (
                  <CTACard
                    key={key}
                    title={cta.title}
                    description={cta.description}
                    linkText={cta.link_text}
                    link={cta.link}
                  />
                );
              })}
            </>
          )}
        </div>
        <div className="bg-gradient-to-b from-primary to-primary-1 py-32">
          <div className="container grid sm:grid-cols-2 text-ash gap-24">
            <div>
              <iframe
                className="w-full h-full rounded-3xl"
                src="https://www.youtube.com/embed/0CqvRPeU52w"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="py-3">
              <h2 className="text-secondary-1 text-5xl font-bold mb-10">
                Register Now!
              </h2>
              <h3 className="text-2xl font-bold mb-1" id="inclusiveAfricaTitle">
                The Annual Inclusive Conference 2023
              </h3>
              <p className="font-medium mb-12">
                We at inABLE are pleased to invite you to the 4th Annual
                Inclusive Africa Conference. Register Now! Limited slots
                available!
              </p>

              <a
                href="#"
                className="rounded-3xl border-2 py-2 px-5 font-medium text-xl"
                aria-describedby="inclusiveAfricaTitle"
              >
                Read More
                <ArrowRightIcon
                  className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                  stroke="currentColor"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container py-40 text-center">
          <h2 className="font-semibold text-5xl">Sponsors</h2>
          <p className="text-xl py-9">
            This conference is possible thanks to our sponsors and partners
          </p>
          {data && <SponsorsDisplay />}
          <a href="#" className="border-b-3 border-secondary font-medium">
            View all Partners and sponsors
          </a>
        </div>
      </Layout>
    </>
  );
}
