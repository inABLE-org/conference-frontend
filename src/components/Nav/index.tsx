import Head from "next/head";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CustomImage from "../CustomImage";
import NavItem from "./NavItem";
import NavDropDown from "./NavDropDown";
import DropDownItem from "./NavDropDown/DropDownItem";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = {
  pageTitle: string;
};

export default function Nav({ pageTitle }: NavProps) {
  const currentPath = usePathname();
  const [skipVisible, setSkipVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Inclusive Africa Conference" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="md:sticky top-0 z-10">
        <span className="hidden" id="newTab">
          Opens in a new Tab
        </span>
        <div className={`bg-primary ${skipVisible ? "" : "sr-only"}`}>
          <div className="container pb-6 pt-2">
            <a
              href="#mainContent"
              className="bg-ash-2 font-semibold text-black py-2 px-8"
              onFocus={() => setSkipVisible(true)}
              onBlur={() => setSkipVisible(false)}
            >
              Skip to content
            </a>
          </div>
        </div>
        <nav
          className="flex items-center justify-between flex-wrap bg-primary p-7 pt-4 xl:px-[1.806vw] text-white font-medium"
          aria-label="main"
        >
          <Link href={"/"}>
            <CustomImage
              src={"/assets/img/Inclusive Africa logo.webp"}
              alt="inclusive africa 2023 logo"
              className="h-14 w-44 lg:h-[3.7vw] lg:w-[12.6vw] 2xl:h-[3.8vw] 2xl:w-[12.2vw]"
            />
          </Link>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded"
              aria-expanded={expanded}
              aria-controls="mainNavigation"
              aria-label={"main menu"}
              onClick={() => setExpanded(!expanded)}
            >
              <Bars3Icon className="fill-current h-3 w-3" />
            </button>
          </div>
          <div
            id="mainNavigation"
            className={`${
              expanded ? "" : "hidden"
            } w-full lg:flex lg:flex-col-reverse xl:flex-row lg:w-auto lg:items-end`}
          >
            <ul
              role="list"
              className="lg:flex-grow lg:flex lg:space-x-10 mr-4 xl2:mr-20"
            >
              <NavItem href="/" name="Home" current={currentPath === "/"} />
              <NavDropDown
                id="TheConferenceMenu"
                name="The Conference"
                current={
                  currentPath != null && currentPath.includes("theconference")
                }
              >
                <DropDownItem
                  name="About the conference"
                  href="/theconference"
                />
                <DropDownItem
                  name="Conference Information"
                  href="/theconference/generalinformation"
                />
                <DropDownItem
                  name="Hotel and Travel"
                  href="/theconference/generalinformation?info=1"
                />
                <DropDownItem
                  name="Health & Safety Information"
                  href="/theconference/generalinformation?info=2"
                  className="sm:min-w-[16rem]"
                />
              </NavDropDown>
              <NavItem
                href="/agenda"
                name="Agenda"
                current={currentPath === "/agenda"}
              />
              <NavItem
                href="/speakers"
                name="Speakers"
                current={currentPath === "/speakers"}
              />
              <NavItem
                href="/sponsors"
                name="Sponsors"
                current={currentPath === "/sponsors"}
              />
              <NavDropDown
                id="mediaMenu"
                name="Media"
                current={currentPath === "/media"}
              >
                <DropDownItem
                  name="Press Releases"
                  href="/media"
                  className="sm:min-w-[10rem]"
                />
                <DropDownItem name="News Links" href="/media?media=1" />
                <DropDownItem name="Photo Albums" href="/media?media=2" />
              </NavDropDown>
            </ul>
            <div className="lg:flex lg:mb-6 xl:mb-0">
              <form
                className="flex border-b-2 w-fit lg:max-w-[9.125rem] my-6 lg:my-0 mr-9"
                role="search"
                aria-label="Sitewide"
                action="/search"
              >
                <div className="relative inline-flex max-w-[86%]">
                  <input
                    id="searchBox"
                    type="text"
                    name="search"
                    className="bg-inherit border-white min-w-0 peer px-1"
                    placeholder=" "
                    aria-label="Enter search keyword"
                    required
                    aria-required="true"
                  />
                  <label
                    htmlFor="searchBox"
                    className="absolute bg-primary text-gray-300 text-sm duration-300 transform -translate-y-4 scale-75 top-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white peer-placeholder-shown:bg-transparent peer-placeholder-shown:left-6 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4  peer-focus:bg-primary peer-focus:left-1"
                  >
                    Search
                  </label>
                </div>
                <button type="submit" aria-label="search">
                  <MagnifyingGlassIcon
                    className="h-4 w-4 stroke-[1.5]"
                    stroke="currentColor"
                  />
                </button>
              </form>
              <a
                target={"_blank"}
                href="https://hopin.com/events/inclusive-africa-2023/registration"
                className="rounded bg-secondary p-2"
                aria-label="Register for Inclusive Africa 2023"
                aria-describedby="newTab"
              >
                Register
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
