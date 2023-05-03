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
import NextImage from "@/components/NextImage";
import Link from "next/link";

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
      conference_sponsors(
        limit: 4
        sort: "level"
        filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
      ) {
        name
        level {
          name
        }
        logo {
          id
          description
        }
        website
      }
      conference_press(
        sort: "-date"
        limit: 1
        filter: { status: { _eq: "published" }, main: { _eq: true } }
      ) {
        id
        title
        excerpt
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
                    target="_blank"
                    href="https://hopin.com/events/inclusive-africa-2023/registration"
                    className="rounded-3xl bg-secondary pt-3 sm:py-2 px-3 sm:px-12 mr-9"
                    aria-describedby="pageTitle newTab"
                  >
                    Register
                  </a>
                  <a
                    href={`/media${
                      data
                        ? `/press_release?press=${data.conference_press[0].id}`
                        : ""
                    }`}
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
            <div className="overflow-clip lg:min-h-[45vw]">
              {data && (
                <CustomImage
                  src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${data.config[0].hero_image.id}`}
                  alt={data.config[0].hero_image.title}
                  className="hidden lg:block min-h-[50vw] 2xl:min-h-[45vw] w-full"
                />
              )}
            </div>
          </div>
        </div>
        <div className="container xl2:px-28 xl:px-20 2xl:px-24">
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
                  target="_blank"
                  aria-describedby="newTab"
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
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 my-16">
            {data && data.CTA.length > 0 && (
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
        </div>
        <div className="bg-gradient-to-b from-primary to-primary-1 py-32">
          {data && (
            <div className="container grid lg:grid-cols-2 text-ash gap-5 lg:gap-28 xl:px-0">
              <div className="md:flex items-center">
                <div className="w-full">
                  {!data.conference_press[0].banner && (
                    <NextImage
                      src="/assets/icons/album.svg"
                      className="h-[50vw] lg:max-h-[24.5vw] rounded overflow-hidden"
                      imgClass="object-cover"
                    />
                  )}
                  {data.conference_press[0].banner &&
                    data.conference_press[0].banner.type.includes("image") && (
                      <NextImage
                        src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${data.conference_press[0].banner.id}`}
                        alt={data.conference_press[0].banner.title}
                        className="h-[50vw] lg:max-h-[24.5vw] rounded overflow-hidden"
                        imgClass="object-cover"
                      />
                    )}
                  {data.conference_press[0].banner &&
                    data.conference_press[0].banner.type.includes("video") && (
                      <>
                        <div className="h-[50vw] lg:max-h-[24.5vw] xl2:max-h-[23vw] 2xl:max-h-[15vw]">
                          <video
                            className="w-full max-h-full rounded"
                            controls
                            aria-label={`${data.conference_press[0].banner.title} video`}
                          >
                            <source
                              src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${data.conference_press[0].banner.id}`}
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="2xl:mt-5">
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
              </div>
              <div className="pt-10">
                <h2
                  className="text-secondary-1 text-5xl font-bold mb-10"
                  id="inclusiveAfricaTitle"
                >
                  {data.conference_press[0].title}
                </h2>
                <div
                  className="font-medium mb-24 all-underline"
                  dangerouslySetInnerHTML={{
                    __html: data.conference_press[0].excerpt,
                  }}
                ></div>
                <a
                  href={`/media/press_release?press=${data.conference_press[0].id}`}
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
          )}
        </div>
        <div className="container py-40 text-center">
          <h2 className="font-semibold text-5xl">Sponsors</h2>
          <p className="text-xl py-9">
            This conference is possible thanks to our sponsors and partners
          </p>
          {data && (
            <Sponsors
              title={`${data.conference_sponsors[0]?.level.name} Sponsors`}
              sponsors={data.conference_sponsors.filter(
                (sponsor: Sponsor) =>
                  sponsor.level.name === data.conference_sponsors[0]?.level.name
              )}
            />
          )}
          <Link
            href={"/sponsors"}
            className="border-b-3 border-secondary font-medium"
          >
            View all Partners and sponsors
          </Link>
        </div>
      </Layout>
    </>
  );
}
