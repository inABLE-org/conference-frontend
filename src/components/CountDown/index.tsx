import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const countDownDate = new Date("05/29/2023").getTime();

export default function CountDown() {
  const [hydrated, setHydrated] = useState(false);

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <>
      {hydrated && countDown > 0 && (
        <div className="bg-white font-semibold flex items-center justify-between py-1 px-1 sm:px-12 flex-col xs:flex-row space-y-6 xs:space-y-0">
          <div className="flex xl2:w-10/12 justify-between gap-6 sp flex-col md:flex-row">
            <div className="flex space-x-4 xl:space-x-14 items-center flex-col xl:flex-row">
              <p>The Inclusive Africa Conference will be here in :</p>
              <div
                className="flex font-bold text-[2rem] space-x-2"
                role="timer"
              >
                <p role="text" className="flex flex-col">
                  <span className="text-center">{days}</span>
                  <span className="font-semibold text-xs">Days</span>
                </p>
                <span>:</span>
                <p role="text" className="flex flex-col">
                  <span className="text-center">{hours}</span>
                  <span className="font-semibold text-xs">Hours</span>
                </p>
                <span>:</span>
                <p role="text" className="flex flex-col">
                  <span className="text-center">{minutes}</span>
                  <span className="font-semibold text-xs">Minutes</span>
                </p>
                <span>:</span>
                <p role="text" className="flex flex-col">
                  <span className="text-center">{seconds}</span>
                  <span className="font-semibold text-xs">Seconds</span>
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-4 xl:space-x-14 items-center flex-col lg:flex-row">
              <a
                target="_blank"
                href="https://hopin.com/events/inclusive-africa-2023/registration"
                className="rounded-[2.3125rem] bg-secondary px-6 py-2 text-white h-fit font-bold"
                aria-describedby="pageTitle newTab"
              >
                Register Now
              </a>
              <Link
                href="/contactus"
                className="border-b-2 border-secondary py-1 my-3 h-fit"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <button
            className="flex flex-col"
            onClick={() => setHydrated(false)}
            aria-label="close timer"
          >
            <span className="text-center w-full">
              <XMarkIcon
                className="h-7 w-7 stroke-[1.5] mx-auto"
                stroke="currentColor"
              />
            </span>
            <span className="font-medium text-xs">Cancel</span>
          </button>
        </div>
      )}
    </>
  );
}
