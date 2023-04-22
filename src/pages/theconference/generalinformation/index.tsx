import useSWR from "swr";
import Layout from "@/components/Layout";
import { Fetcher } from "@/components/fetcher";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Tabs from "@/components/Tabs";
import TabPanel from "@/components/Tabs/TabPanel";
import ConferenceInformation from "@/components/ConferenceInfomation";
import GeneralInformation from "@/components/GeneralInfomation";
import FAQ, { FAQProps } from "@/components/FAQ";
import { useRouter } from "next/router";

export default function Agenda() {
  const router = useRouter();
  let default_tab = Number(router.query.info);
  const [activeTab, setActiveTab] = useState(0);
  const { data }: any = useSWR(
    `query {
        conference_information(
          limit: 1
          filter: { status: { _eq: "published" }, year: { _eq: 2023 } }
        ) {
          location
          directions
          dates
          hours
          contact
        },
        conference_faqs(
          sort: "order"
          filter: { status: { _eq: "published" }}
        ) {
          question
          answer
          order
        }
      }`,
    Fetcher
  );

  useEffect(() => {
    if (
      typeof default_tab === "number" &&
      default_tab >= 0 &&
      default_tab <= 3
    ) {
      setActiveTab(default_tab);
    }
  }, [default_tab]);

  return (
    <>
      <Layout pageTitle="General Information">
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-white">
          <div className="container">
            <div className="mb-16">
              <PageTitle title="General Information" />
            </div>
            <Tabs
              tabList={[
                "Conference information",
                "Hotel And Travel Info",
                "Health And Safety Info",
                "FAQs",
              ]}
              className="text-center flex flex-col lg:flex-row mx-auto space-x-9 space-y-9 lg:space-y-0 justify-center text-xl"
              onTabSwith={setActiveTab}
              selectedTab={activeTab}
            />
          </div>
        </div>
        <TabPanel className="container pt-20 pb-28" activeTab={activeTab}>
          {activeTab === 0 && (
            <dl
              className="mt-16 shadow-gi-card bg-white"
              aria-labelledby="dayTitle"
            >
              {data && data.conference_information[0] && (
                <>
                  <ConferenceInformation
                    title="Location"
                    info={data.conference_information[0].location}
                    background="bg-ash-3 bg-opacity-15"
                  />
                  <ConferenceInformation
                    title="Detailed Directions"
                    info={data.conference_information[0].directions}
                  />
                  <ConferenceInformation
                    title="Conference Dates"
                    info={data.conference_information[0].dates}
                    background="bg-ash-3 bg-opacity-15"
                  />
                  <ConferenceInformation
                    title="Conference Hours"
                    info={data.conference_information[0].hours}
                  />
                  <ConferenceInformation
                    title="Hotel Contact"
                    info={data.conference_information[0].contact}
                    background="bg-ash-3 bg-opacity-15"
                  />
                </>
              )}
            </dl>
          )}
          {activeTab === 1 && (
            <>
              <GeneralInformation title="Radisson Blu Hotel">
                <p>
                  Radisson Blu Hotel is on Elgon Road, in Upper Hill, 16 km from
                  Jomo Kenyatta International Airport. Accessible Shuttle
                  Service is available upon request.
                </p>
                <p>Hotel reservations can be made at the Radisson Blu Hotel</p>
                <ul className="list-disc ml-8 media-links">
                  <li>
                    <strong>Group:</strong> Inclusive Africa Conference
                  </li>
                  <li>
                    <strong>Rate: *$140 USD</strong> Bed & Breakfast/night
                  </li>
                </ul>
                <p>Book Here </p>
                <ul className="list-disc ml-8 media-links">
                  <li>
                    <strong>Contact:</strong> Stella at Radisson Blu Hotel
                  </li>
                  <li>
                    <strong>Phone Number:</strong> +254 708 177 111
                  </li>
                  <li>
                    <strong>E-mail:</strong>{" "}
                    <a href="mailto:reservations.nairobi@radissonblunairobi.com">
                      reservations.nairobi@radissonblunairobi.com
                    </a>
                  </li>
                </ul>
              </GeneralInformation>
              <GeneralInformation title="Services Available">
                <ul className="list-disc ml-8 space-y-3">
                  <li>
                    There will be a dedicated Accessibility Desk at Radisson Blu
                    Hotel lobby and a Registration Desk, outside the conference
                    hall on the ground floor. They will offer several services,
                    including signages on all levels, sighted conference guiding
                    by ushers, and Sign Language Interpretation during
                    registration, breaks and showcase Area visits. The ushers,
                    Sign Language interpreters and French interpreters will be
                    identified by uniform and badges.
                  </li>
                  <li>
                    The Conference Agenda in accessible format will be available
                    for download on the website and sent to all registered
                    participants via email the week of the conference.
                  </li>
                  <li>
                    Universal Sign Language interpretation will be provided at
                    all levels of the conference (lobby registration desk and
                    all sessions).
                  </li>
                  <li>
                    Live Captioning will be available in all sessions on screen.
                  </li>
                  <li>
                    Should you have a service animal, kindly let us know in
                    advance for planning purposes.
                  </li>
                  <li>
                    Language translations (French and English) will be
                    available.
                  </li>
                </ul>
              </GeneralInformation>
              <GeneralInformation title="Wheelchair Accessible Taxi Services">
                <p>
                  For accessible pick-up services from Jomo Kenyatta
                  International Airport (JKIA), kindly contact us a week in
                  advance because there are a limited number of wheelchair
                  accessible taxis. You may reserve your trip a week in advance.
                </p>
              </GeneralInformation>
              <GeneralInformation title="Parking">
                <ul className="list-disc ml-8 space-y-3">
                  <li>
                    On-site parking is available for free. Radisson Blu Upper
                    Hill offers valet parking upon request and is available at
                    the hotel entrance.
                  </li>
                  <li>To book, kindly reach them on +254 709 810 000</li>
                </ul>
              </GeneralInformation>
              <GeneralInformation title="Currency & Exchange">
                <ul className="list-disc ml-8 space-y-3">
                  <li>
                    The unit currency is the Kenya Shilling. Bank notes are
                    available in denominations of Kes. 50, 100, 200, 500 and
                    1000. Kes. 1, 5, 10, 20 and 40 are available in coins.
                  </li>
                  <li>
                    Currency can be exchanged in foreign exchange bureaus or
                    banks.
                  </li>
                  <li>
                    Banks operate between 9 am- 3pm weekdays and 9-11am
                    weekends.
                  </li>
                  <li>
                    Easiest currencies to exchange are the US Dollar, Sterling
                    pounds, and Euro.
                  </li>
                  <li>
                    Currently the exchange is between Kes118 - 125 to the US$
                    1.00
                  </li>
                </ul>
              </GeneralInformation>
              <GeneralInformation title="Credit cards">
                <p>
                  Major international credit cards are accepted in Kenya & most
                  ATMs. Most establishments & service providers accept them.
                </p>
              </GeneralInformation>
              <GeneralInformation title="Dialing codes">
                <p>
                  +254 is the international dialing code for Kenya, and 020 is
                  the area code for Nairobi.
                </p>
              </GeneralInformation>
            </>
          )}
          {activeTab === 2 && (
            <>
              <GeneralInformation title="Covid-19 protocols and relevant information">
                <ul className="list-disc ml-8 space-y-3">
                  <li>
                    The Inclusive Africa Conference is committed to working with
                    the venue, service providers, and vendors to customize a
                    “health safety first” approach throughout all phases of
                    event production and on site execution. We will be following
                    the recommended local government and Ministry of Health
                    (MoH) guidelines.
                  </li>
                  <li>
                    Proof of Covid-19 vaccination and negative test is required.
                  </li>
                  <li>
                    The Inclusive Africa Conference will feature
                    hand-sanitization units, daily temperature screenings,
                    enhanced cleaning, and additional measures implemented by
                    the Trademark Hotel.
                  </li>
                  <li>
                    The Inclusive Africa Conference will require all
                    participants to give notice and show proof that they have
                    been vaccinated. Participants must be able to show valid
                    proof of vaccination in order to attend in-person sessions.
                  </li>
                  <li>
                    If you have traveled outside of Kenya within 14 days of the
                    conference, or you are an international participant, please
                    come prepared to show a valid negative COVID test result
                    upon entering. Please note, should you test positive, you
                    may be required to self-quarantine for 14 days at your own
                    cost.
                  </li>
                  <li>
                    All participants should follow MoH and Kenyan government
                    guidance.
                  </li>
                </ul>
              </GeneralInformation>
              <GeneralInformation title="Masks and Social Distancing">
                <p>
                  <strong className="font-bold">Note:</strong> Masks will be
                  optional during the conference sessions. However, the
                  panelists will be socially distanced and will not be required
                  to wear face masks during the presentations. The Inclusive
                  Africa Conference will observe social distance protocols for
                  all participants at all times.
                </p>
              </GeneralInformation>
              <GeneralInformation title="MOH Guidelines">
                <p>
                  See{" "}
                  <a
                    className="underline"
                    href="https://www.health.go.ke/#1621662557011-eed9a789-33ec"
                  >
                    latest news
                  </a>
                  &nbsp; and &nbsp;
                  <a
                    className="underline"
                    href="https://www.health.go.ke/#1621662557011-eed9a789-33ec"
                  >
                    current MoH
                  </a>
                  &nbsp; protocols and guidelines on COVID-19.
                </p>
              </GeneralInformation>
            </>
          )}
          {activeTab === 3 && (
            <>
              <GeneralInformation title="FAQs on Accessibility">
                <ul className="pt-9">
                  {data &&
                    data.conference_faqs.map((faq: FAQProps, key: number) => (
                      <FAQ
                        key={key}
                        order={key + 1}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))}
                </ul>
              </GeneralInformation>
            </>
          )}
        </TabPanel>
      </Layout>
    </>
  );
}
