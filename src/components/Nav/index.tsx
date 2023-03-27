import Head from "next/head";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CustomImage from "../CustomImage";
import NavItem from "./NavItem";
import NavDropDown from "./NavDropDown";
import DropDownItem from "./NavDropDown/DropDownItem";
import { useState } from "react";

type NavProps = {
  pageTitle?: string;
};

export default function Nav({
  pageTitle = "Inclusive Africa Conference 2023",
}: NavProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Inclusive Africa Conference" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav
          className="flex items-center justify-between flex-wrap bg-primary p-7 pt-4 text-white font-medium"
          aria-label="main"
        >
          <CustomImage
            src={"/assets/img/logo.png"}
            alt="inclusive africa 2023 logo"
            className="h-14 w-44"
          />
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded"
              aria-expanded={expanded}
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
            <ul className="lg:flex-grow lg:flex lg:space-x-10 mr-20">
              <NavItem href="/" name="Home" />
              <NavDropDown name="The Conference">
                <DropDownItem name="About the conference" href="#" />
                <DropDownItem name="Conference Information" href="#" />
                <DropDownItem name="Hotel and Travel" href="#" />
                <DropDownItem
                  name="Health & Safety Information"
                  href="#"
                  className="sm:min-w-[16rem]"
                />
              </NavDropDown>
              <NavItem href="/" name="Agenda" />
              <NavItem href="/" name="Speakers" />
              <NavItem href="/" name="Sponsors" />
              <NavDropDown name="Media">
                <DropDownItem
                  name="Press Releases"
                  href="#"
                  className="sm:min-w-[10rem]"
                />
                <DropDownItem name="Resources" href="#" />
                <DropDownItem name="Photo Albums" href="#" />
              </NavDropDown>
            </ul>
            <div className="lg:flex lg:mb-6 xl:mb-0">
              <form className="flex border-b-2 md:w-1/2 lg:max-w-[9.125rem] my-6 lg:my-0 mr-9">
                <div className="relative flex-auto">
                  <input
                    id="searchBox"
                    type="text"
                    role={"search"}
                    className="bg-inherit border-white w-full min-w-0 peer px-1"
                    placeholder=" "
                  />
                  <label
                    htmlFor="searchBox"
                    className="absolute bg-primary text-gray-300 duration-300 transform -translate-y-4 scale-75 top-0 z-1 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4  peer-focus:bg-primary left-1"
                  >
                    Search
                  </label>
                </div>
                <button type="submit" className="">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                </button>
              </form>
              <a href="#" className="rounded bg-secondary p-2">
                Register
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
