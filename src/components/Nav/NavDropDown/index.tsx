import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type NavDropDownProps = {
  id: string;
  name: string;
  children: React.ReactNode;
  current?: Boolean;
};

export default function NavDropDown({
  id,
  name,
  children,
  current,
}: NavDropDownProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <li
        className={`pt-2 px-1`}
      >
        <div className="relative lg:inline-block">
          <div>
            <button
              type="button"
              className="flex my-5 lg:my-0 lg:inline-flex"
              id={id}
              aria-expanded={expanded}
              aria-haspopup="true"
              aria-controls={`MenuFor${id}`}
              onClick={() => setExpanded(!expanded)}
            >
              <span className={current ? "border-b-3 border-secondary-1 pb-2" : ""}>
                {name}
              </span>
              <ChevronDownIcon
                className="h-6 w-5 text-secondary-1 stroke-[1.5] ml-2"
                stroke="currentColor"
              />
            </button>
          </div>
          <ul
            id={`MenuFor${id}`}
            className={`${
              expanded ? "" : "hidden"
            } lg:absolute left-0 lg:left-auto md:right-0 z-10 mt-2 origin-top-right rounded-md bg-primary-2 shadow-lg ring-1 ring-primary ring-opacity-5 py-1`}
            role="menu"
            aria-labelledby={id}
          >
            {children}
          </ul>
        </div>
      </li>
    </>
  );
}
