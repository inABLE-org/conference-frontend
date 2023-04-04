import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export type FAQProps = {
  order: number;
  question: string;
  answer: string;
};

export default function FAQ({ order, question, answer }: FAQProps) {
  const [show, setShow] = useState(false);
  return (
    <li className="shadow-gi-card bg-white py-7 px-11 mb-8">
      <div className="flex justify-between">
        <h3
          id={`question-${order}`}
          className="font-semibold"
        >{`${order}. ${question}`}</h3>
        <button
          onClick={() => setShow(!show)}
          aria-expanded={show}
          aria-label={`${show ? "hide answer" : "show answer"}`}
          aria-describedby={`question-${order}`}
        >
          {show ? (
            <ChevronUpIcon className="h-9 w-9" stroke="currentColor" />
          ) : (
            <ChevronDownIcon className="h-9 w-9" stroke="currentColor" />
          )}
        </button>
      </div>
      <div aria-live="polite">
        <p className={`py-6 ${show ? "" : "hidden"}`}>{answer}</p>
      </div>
    </li>
  );
}
