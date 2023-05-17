import { SpeakerInfo } from "@/pages/speakers";
import { useRouter } from "next/router";
import NextImage from "../NextImage";

export default function Speaker({ ...speaker }: SpeakerInfo) {
  const router = useRouter();
  const viewSpeaker = () => {
    router.push(`/speakers/${speaker.id}`);
  };
  return (
    <li
      className=" bg-white rounded-lg shadow-agenda-card hover:bg-primary hover:text-white py-6 hover:cursor-pointer h-full flex flex-col justify-between"
      onClick={() => viewSpeaker()}
    >
      <div>
        <NextImage
          src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${speaker.photo.id}?key=potrait`}
          alt={speaker.first_name + " potrait"}
          className="h-[38vw] w-[38vw] sm:h-[17vw] sm:w-[17vw] lg:h-28 lg:w-28 rounded-full border-secondary-2 border-4 overflow-hidden mx-auto"
          imgClass="object-cover"
          unoptimized
        />
        <h3 className="font-medium text-xl text-center mt-6">
          <a href={`/speakers/${speaker.id}`}>
            {speaker.first_name + " " + speaker.second_name}
          </a>
        </h3>
        <p
          className="text-center mt-4 text-base flex space-y-4 flex-col mb-4"
          role="text"
        >
          <span>{speaker.role}</span>
          <span>{speaker.organization}</span>
        </p>
      </div>

      <span className="text-center">{speaker.country}</span>
    </li>
  );
}
