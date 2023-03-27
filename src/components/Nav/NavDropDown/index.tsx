import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type NavDropDownProps = {
  name: string;
  children: React.ReactNode;
};

export default function NavDropDown({ name, children }: NavDropDownProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <li>
        <div className="relative inline-block">
          <div>
            <button
              type="button"
              className="my-5 lg:my-0 inline-flex"
              id="menu-button"
              aria-expanded={false}
              aria-haspopup="true"
              onClick={() => setExpanded(!expanded)}
            >
              {name}
              <ChevronDownIcon
                className="h-6 w-5 text-secondary stroke-[1.5] ml-2"
                stroke="currentColor"
              />
            </button>
          </div>
          <ul
            className={`${
              expanded ? "" : "hidden"
            } lg:absolute left-0 lg:left-auto md:right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-primary ring-opacity-5 py-1`}
            role="menu"
            aria-labelledby="menu-button"
          >
            {children}
          </ul>
        </div>
      </li>
    </>
  );
}
