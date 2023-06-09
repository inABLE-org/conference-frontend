import { ArrowRightIcon } from "@heroicons/react/24/solid";
import CustomImage from "../CustomImage";
import FooterNavItem from "./FooterNavItem";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-primary-1 to-primary text-white">
        <div className="container xl:px-0 pt-20 pb-14">
          <div className="md:flex md:justify-between">
            <div className="mr-24">
              <a href="https://www.inclusiveafrica.org/">
                <CustomImage
                  src={"/assets/img/Inclusive Africa logo.webp"}
                  alt="inclusive africa 2023 logo"
                  className="h-16 w-56"
                />
              </a>
              <a href="https://inable.org/" target={"_blank"}>
                <CustomImage
                  src={"/assets/img/inable-logo.png"}
                  alt="inable logo(Opens in a new tab)"
                  className="h-24 w-16 mt-8"
                />
              </a>
            </div>
            <div className="grid grid-cols-12 gap-1">
              <div className="my-5 md:my-0 col-span-12 sm:col-span-6 lg:col-span-5 xl:col-span-3">
                <h2 className="font-bold text-xl" id="footerTitle1">
                  The Conference
                </h2>
                <ul
                  className="mt-4 mb-8"
                  aria-labelledby="footerTitle1"
                  role="list"
                >
                  <FooterNavItem
                    href="/theconference"
                    name="About the conference"
                  />
                  <FooterNavItem href="/agenda" name="Agenda" />
                  <FooterNavItem href="/speakers" name="Speakers" />
                  <FooterNavItem href="/sponsors" name="Sponsors" />
                </ul>
                <a
                  target={"_blank"}
                  href="https://hopin.com/events/inclusive-africa-2023/registration"
                  className="rounded bg-secondary py-2 px-6"
                  aria-label="Register for Inclusive Africa 2023(Opens in a new tab)"
                >
                  Register
                </a>
              </div>
              <div className="hidden sm:block col-start-7 col-span-6 lg:col-span-3 xl:col-span-2">
                <h2 className="font-bold text-xl" id="footerTitle2">
                  Media
                </h2>
                <ul
                  className="mt-4 mb-8"
                  aria-labelledby="footerTitle2"
                  role="list"
                >
                  <FooterNavItem href="/media" name="Press Releases" />
                  <FooterNavItem href="/media?media=1" name="News Links" />
                  <FooterNavItem href="/media?media=2" name="Photo Albums" />
                  <FooterNavItem href="/media?media=3" name="Videos" />
                </ul>
              </div>
              <div className="hidden sm:block col-start-7 col-span-6 lg:col-span-4 xl:col-span-3">
                <h2 className="font-bold text-xl" id="footerTitle3">
                  General Information
                </h2>
                <ul
                  className="mt-4 mb-8"
                  aria-labelledby="footerTitle3"
                  role="list"
                >
                  <FooterNavItem
                    href="/theconference/generalinformation"
                    name="Conference Information"
                  />
                  <FooterNavItem
                    href="/theconference/generalinformation?info=1"
                    name="Hotel and Travel"
                  />
                  <FooterNavItem
                    href="/theconference/generalinformation?info=2"
                    name="Health & Safety Information"
                  />
                </ul>
              </div>

              <div className="col-span-12 lg:col-start-6 lg:col-span-7 xl:col-span-4 lg:pl-5 xl:pl-0">
                <Link href="/contactus" className="hover:underline">
                  Contact Us
                </Link>
                <h2 className="font-bold text-xl my-4">
                  Subscribe to our newsletter
                </h2>
                <p>
                  Taking Digital Accessibility & Assistive Technology in Africa
                  to the Next Level
                </p>
                <div className="flex justify-center mt-11">
                  <a
                    href="http://eepurl.com/ipkOew"
                    className="rounded-lg border-[2.5px] border-secondary py-2 px-4 text-sm"
                  >
                    Subscribe to our newsletter
                    <ArrowRightIcon
                      className="ml-6 h-5 w-5 inline-flex stroke-[2.5] text-secondary"
                      stroke="currentColor"
                    />
                  </a>
                </div>
                <p className="text-xs xl:px-1 pt-9">
                  By subscribing to our newsletter you agree to our privacy
                  policy and will get commercial communication.
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-16 mb-14 border-white" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="w-full lg:flex lg:w-auto">
              <div className="lg:flex-grow">
                <span className="mr-10">
                  © Inclusive Africa Conference 2023
                </span>
                <ul className="hidden" role="list">
                  {/* <ul className="md:inline-flex"> */}
                  <li>
                    <a
                      href="#responsive-header"
                      className="block lg:inline-block mr-6 my-5 lg:my-0"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#responsive-header"
                      className="block lg:inline-block mr-6 my-5 lg:my-0"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#responsive-header"
                      className="block lg:inline-block mr-6 my-5 lg:my-0"
                    >
                      Cookie Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="flex space-x-6 items-center" role="list">
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
                    src={"/assets/icons/Facebook.png"}
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
                    src={"/assets/icons/Linkedin.png"}
                    alt="Our linkedIn account(opens in a new tab)"
                    className="h-5 w-6"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
