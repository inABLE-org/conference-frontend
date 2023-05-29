import { Press } from "@/components/PressList";
import { AgendaInfo } from "@/pages/agenda";
import Link from "next/link";
import { ReactNode } from "react";
import { Fetcher } from "./fetcher";
import { Innovation } from "@/pages/at_village";
import { SpeakerInfo } from "@/pages/speakers";
import { Sponsor } from "@/components/Sponsors";
import { FAQProps } from "@/components/FAQ";

export type DirectusFile = {
  id: string;
  title: string;
  type: string;
};

export type SiteSearch = {
  title: string;
  breadcrumb?: ReactNode;
  link: string;
  desc?: string;
  banner?: DirectusFile;
};

export const Searcher = async (searchWord: string, page: number = 1) => {
  const data: any = await Fetcher(
    `query searchSite($search: String) {
              conference_information(
                search: $search
                limit: 1
                filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
              ) {
                location
                directions
                dates
                hours
                contact
              }
              conference_agenda(
                search: $search
                filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
              ) {
                id
                title
                start_time
              }
              conference_speakers(
                search: $search
                filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
              ) {
                id
                first_name
                second_name
                photo {
                  id
                  title
                  type
                }
              }
              conference_sponsors(
                search: $search
                filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
              ) {
                name
                logo {
                  id
                  title
                  type
                }
              }
              conference_innovators(
                search: $search
                filter: { status: { _eq: "published" } }
              ) {
                title
                description
                banner {
                  id
                  title
                  type
                }
              }
              conference_press(
                search: $search
                sort: "-date"
                filter: { status: { _eq: "published" } }
              ) {
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
              conference_faqs(search: $search, filter: { status: { _eq: "published" } }) {
                question
                answer
                order
              }
            }
            `,
    {
      search: searchWord,
    }
  );

  let searchResults: SiteSearch[] = [];

  if (data.conference_agenda) {
    data.conference_information.forEach((info: any) => {
      const search_item: SiteSearch = {
        title: "Conference Information",
        link: "/theconference/generalinformation",
        desc: "Conference General Information",
      };
      searchResults.push(search_item);
    });
  }

  if (data.conference_agenda) {
    data.conference_agenda.forEach((_agenda: AgendaInfo) => {
      const desc = _agenda.description ? _agenda.description : "";
      const search_item: SiteSearch = {
        title: "Agenda",
        link: "/agenda",
        desc: _agenda.title,
      };
      searchResults.push(search_item);
    });
  }

  if (data.conference_speakers) {
    data.conference_speakers.forEach((_speaker: SpeakerInfo) => {
      const search_item: SiteSearch = {
        title: _speaker.first_name + " " + _speaker.second_name,
        breadcrumb: (
          <Link href="/speakers" className="hover:underline">
            Home . Speakers
          </Link>
        ),
        link: "/speakers/" + _speaker.id,
        desc: _speaker.role,
        banner: _speaker.photo,
      };
      searchResults.push(search_item);
    });
  }

  if (data.conference_sponsors) {
    data.conference_sponsors.forEach((_sponsor: Sponsor) => {
      const search_item: SiteSearch = {
        title: _sponsor.name,
        breadcrumb: (
          <Link href="/sponsors" className="hover:underline">
            Home . Sponsors
          </Link>
        ),
        link: "/sponsors",
        desc: _sponsor.name,
        banner: _sponsor.logo,
      };
      searchResults.push(search_item);
    });
  }

  if (data.conference_innovators) {
    data.conference_innovators.forEach((_innovation: Innovation) => {
      const search_item: SiteSearch = {
        title: _innovation.title,
        breadcrumb: (
          <Link href="/at_village" className="hover:underline">
            Home . AT Innovation Village
          </Link>
        ),
        link: "/at_village",
        desc: _innovation.description,
        banner: _innovation.banner,
      };
      searchResults.push(search_item);
    });
  }

  if (data.conference_press) {
    data.conference_press.forEach((_press: Press) => {
      const search_item: SiteSearch = {
        title: _press.title,
        breadcrumb: (
          <Link href="/media/press_release" className="hover:underline">
            Media . Press Releases
          </Link>
        ),
        link: "/media/press_release?press=" + _press.id,
        desc:
          _press.excerpt.substring(0, 113) +
          (_press.excerpt.length > 113 ? "..." : ""),
        banner: _press.banner,
      };
      searchResults.push(search_item);
    });
  }

  if (data.conference_faqs) {
    data.conference_faqs.forEach((_faq: FAQProps) => {
      const search_item: SiteSearch = {
        title: _faq.question,
        link: "/theconference/generalinformation?info=3",
        desc: _faq.answer,
      };
      searchResults.push(search_item);
    });
  }

  return searchResults;
};
