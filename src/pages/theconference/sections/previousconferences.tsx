import Conferencecard from "@/components/Cardutilities/Conferencecard";
import NextImage from "@/components/NextImage";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function PreviousConference() {
  return (
    <div id="previous">
      <h4 className="text-5xl font-semibold mt-48 mb-12 container">
        About Previous Conferences
      </h4>
      <div>
        <div className="bg-gradient-to-b from-primary to-primary-1">
          <div className="container py-20">
            <div className="flex flex-col sm:flex-row text-white justify-between items-center">
              <h3 className="font-semibold text-[64px]">
                <a href="https://www.inclusiveafrica.org/media/press_release?press=16">
                  2022
                </a>
              </h3>
              <Link
                href="/media?media=2&album=main&year=2022"
                className="border-2 border-white py-2 px-3 rounded-full font-medium text-xl h-fit"
              >
                2022 Gallery
                <ArrowRightIcon
                  className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                  stroke="currentColor"
                />
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-28 pt-12">
              <div>
                <NextImage
                  className="h-[50vw] max-h-[27vw] w-full rounded-2xl overflow-hidden"
                  src="/assets/img/conference2022.png"
                  imgClass="object-cover"
                />
                <h4 className="text-white font-bold text-xl my-5">
                  Live Watch parties In:
                </h4>
                <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-[-30px] mt-3 text-white lg:w-[430px] ml-5">
                  <div>
                    <ul className="list-disc">
                      <li>Uganda</li>
                      <li>Ethiopia</li>
                      <li>Ghana</li>
                      <li>Togo</li>
                      <li>Rwanda</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li>Nigeria</li>
                      <li>Malawi</li>
                      <li>Zambia</li>
                      <li>Cameroon</li>
                      <li>Tanzania</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li>South Africa</li>
                      <li>Gabon</li>
                      <li className="whitespace-nowrap">
                        Central Africa Republic
                      </li>
                      <li>Burundi</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5 flex flex-col space-y-4">
                  <a
                    href="https://inable.org/wp-content/uploads/2023/03/2022-Conference-Day-1-Knowledge-Document.pdf"
                    className="text-white border-b-2 border-b-secondary font-medium w-fit"
                    target={"_blank"}
                    aria-describedby="newTab"
                  >
                    Knowledge Document - Day one
                  </a>
                  <a
                    href="https://inable.org/wp-content/uploads/2023/03/2022-Conference-Day-2-Knowledge-Document.pdf"
                    className="text-white border-b-2 border-b-secondary font-medium w-fit"
                    target={"_blank"}
                    aria-describedby="newTab"
                  >
                    Knowledge Document - Day two
                  </a>
                </div>
              </div>
              <div>
                <div className="grid gap-x-5 gap-y-9 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-3">
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-2xl font-semibold">Launch:</h4>
                        <p className="text-xl xl:text-start px-1">
                          KS2952 ICT Accessibility Standards for products &
                          services
                        </p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">+2465</h4>
                        <p className="font-medium text-2xl">Registrations</p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">14</h4>
                        <p className="font-medium text-2xl">Country partners</p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">522</h4>
                        <p className="font-medium text-2xl">
                          Watch Parties Attendance
                        </p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">64</h4>
                        <p className="font-medium text-2xl xl:px-4">
                          Country by registration
                        </p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">63 / 17</h4>
                        <p className="font-medium text-2xl">
                          Speakers Countries
                        </p>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container py-20">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h3 className="font-semibold text-[64px]">
                <a href="https://www.inclusiveafrica.org/media/press_release?press=11">
                  2021
                </a>
              </h3>
              {/* <Link
                href="/media?media=1&album=main&year=2021"
                className="border-2 border-black py-2 px-3 rounded-full font-medium text-xl h-fit"
              >
                2021 Gallery
                <ArrowRightIcon
                  className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                  stroke="currentColor"
                />
              </Link> */}
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-28 pt-12">
              <div>
                <NextImage
                  className="h-[50vw] max-h-[27vw] w-full rounded-2xl overflow-hidden"
                  src="/assets/img/conference2021.png"
                  imgClass="object-cover"
                />
                <h4 className="text-dark font-bold text-xl my-5">
                  Live Watch parties In:
                </h4>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 my-4 text-dark lg:w-[450px] ml-5">
                  <div className="lg:ml-5">
                    <ul className="list-disc">
                      <li>Kenya</li>
                      <li>Uganda</li>
                      <li>Ethiopia</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li>Ghana</li>
                      <li>Nigeria</li>
                      <li>Malawi</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li>Zambia</li>
                      <li>South Africa</li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://inable.org/wp-content/uploads/2023/03/2021-Conference-Knowledge-Document.pdf"
                  className="border-b-2 border-b-secondary font-medium mt-5"
                  target={"_blank"}
                  aria-describedby="newTab"
                >
                  Knowledge Document
                </a>
              </div>
              <div>
                <div className="grid gap-x-5 gap-y-9 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-3">
                  <Conferencecard
                    className="shadow-about-card"
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">+1583</h4>
                        <p className="font-medium text-2xl">Registration</p>
                      </>
                    }
                  />
                  <Conferencecard
                    className="shadow-about-card"
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">8</h4>
                        <p className="font-medium text-2xl">Country partners</p>
                      </>
                    }
                  />
                  <Conferencecard
                    className="shadow-about-card"
                    title={
                      <>
                        <h4 className="text-[32px] font-semibold">375</h4>
                        <p className="font-medium text-2xl">
                          Watch Parties Attendance
                        </p>
                      </>
                    }
                  />
                  <Conferencecard
                    className="shadow-about-card"
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">42</h4>
                        <p className="font-medium text-2xl">
                          Countries By Registrations
                        </p>
                      </>
                    }
                  />
                  <Conferencecard
                    className="shadow-about-card"
                    title={
                      <>
                        <h4 className="text-[2rem] font-semibold">39 / 12</h4>
                        <p className="font-medium text-2xl">
                          Speakers Countries
                        </p>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-primary to-primary-1">
          <div className="container py-20">
            <div className="flex flex-col sm:flex-row text-white justify-between items-center">
              <h3 className="font-semibold text-[64px]">
                <a href="https://www.inclusiveafrica.org/media/press_release?press=3">
                  2020
                </a>
              </h3>
              {/* <Link
                href="/media?media=1&album=main&year=2020"
                className="border-2 border-white py-2 px-3 rounded-full font-medium text-xl h-fit"
              >
                2020 Gallery
                <ArrowRightIcon
                  className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                  stroke="currentColor"
                />
              </Link> */}
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-28 pt-12">
              <div>
                <NextImage
                  className="h-[50vw] max-h-[27vw] w-full rounded-2xl overflow-hidden"
                  src="/assets/img/conference2020.png"
                  imgClass="object-cover"
                />
                <h4 className="text-white font-bold text-xl my-5">
                  Live Watch parties In:
                </h4>
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 my-3 text-dark lg:w-[450px] text-white ml-5">
                    <div className="h-full">
                      <ul className="list-disc lg:ml-6">
                        <li>Kenya</li>
                        <li>Uganda</li>
                        <li>Ethiopia</li>
                      </ul>
                    </div>
                    <div className="h-full">
                      <ul className="list-disc">
                        <li>Ghana</li>
                        <li>Nigeria</li>
                        <li>Malawi</li>
                      </ul>
                    </div>
                    <div className="h-full">
                      <ul className="list-disc">
                        <li>Zambia</li>
                        <li>South Africa</li>
                      </ul>
                    </div>
                  </div>
                  <a
                    href="https://inable.org/wp-content/uploads/2023/03/2020-Conference-Knowledge-Document.pdf"
                    className="text-white border-b-2 border-b-secondary font-medium mt-5"
                    target={"_blank"}
                    aria-describedby="newTab"
                  >
                    Knowledge Document
                  </a>
                </div>
              </div>
              <div>
                <div className="grid gap-x-5 gap-y-9 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-3">
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[32px] font-semibold my-3">6300</h4>
                        <p className="font-medium text-2xl">Registrations</p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[32px] font-semibold my-3">8</h4>
                        <p className="font-medium text-2xl">Country partners</p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[32px] font-semibold my-3">302</h4>
                        <p className="font-medium text-2xl">
                          Watch Parties Attendance
                        </p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[32px] font-semibold my-3">70</h4>
                        <p className="font-medium text-2xl">
                          Countries By Registrations
                        </p>
                      </>
                    }
                  />
                  <Conferencecard
                    title={
                      <>
                        <h4 className="text-[32px] font-semibold my-3">
                          27 / 14
                        </h4>
                        <p className="font-medium text-2xl">
                          Speakers Countries
                        </p>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
