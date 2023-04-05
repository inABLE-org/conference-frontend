import { ArrowRightIcon } from "@heroicons/react/24/solid";

export type CTACardProps = {
  title: string;
  description: string;
  linkText: string;
  link: string;
};
export default function CTACard({
  title,
  description,
  linkText,
  link,
}: CTACardProps) {
  return (
    <>
      <div className="shadow-card shadow-[#1018284D] bg-white rounded border border-primary-4 hover:border-secondary hover:border-2 hover:cursor-pointer py-8 px-6 flex flex-col space-y-11 justify-between">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="mt-11 mb-14">{description}</p>
        <a
          href={link}
          className="rounded bg-secondary text-white text-sm font-semibold py-3 px-5 flex justify-between"
        >
          {linkText}
          <ArrowRightIcon
            className="h-5 w-5 inline-flex stroke-[1]"
            stroke="currentColor"
          />
        </a>
      </div>
    </>
  );
}
