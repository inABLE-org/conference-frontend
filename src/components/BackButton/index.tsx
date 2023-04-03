import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <>
      <div className="font-medium text-xl">
        <ArrowLeftIcon
          className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
          stroke="currentColor"
        />
        <button
          className="ml-4"
          type="button"
          onClick={() => router.back()}
          aria-label="Back to previous page"
        >
          Go Back
        </button>
      </div>
    </>
  );
}
