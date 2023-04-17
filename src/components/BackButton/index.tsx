import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <>
      <div className="font-medium text-xl">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Back to previous page"
        >
          <ArrowLeftIcon
            className="h-5 w-5 inline-flex stroke-[1.5] mr-4"
            stroke="currentColor"
          />
          Go Back
        </button>
      </div>
    </>
  );
}
