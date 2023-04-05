import { SpeakerInfo } from "@/pages/speakers";
import CustomImage from "../CustomImage";
export default function Speaker({ ...speaker }: SpeakerInfo) {
  return (
    <div className=" bg-white rounded-lg shadow-agenda-card hover:bg-primary hover:text-white py-6">
      <div className="h-[18.2vw] w-[18vw] md:h-[7.75vw] md:w-[7.7vw] rounded-full border-secondary-2 border-4 overflow-hidden mx-auto flex items-center justify-center">
        <CustomImage
          src={`https://cms.inclusiveafrica.org/assets/${speaker.photo.id}:`}
          alt={speaker.first_name + " potrait"}
          className="min-h-[18.2vw] min-w-[18vw] md:min-h-[7.75vw] md:min-w-[7.7vw]"
        />
      </div>
      <h2 className="font-medium text-xl flex items-center justify-center mt-6">
        <a href={`/speakers/${speaker.id}`}>
          {speaker.first_name + " " + speaker.second_name}
        </a>
        <a href={speaker.linkedin}>
          <CustomImage
            src={"/assets/icons/Linkedin.svg"}
            alt={speaker.first_name + " LinkedIn account(Opens in a new tab)"}
            className="h-6 w-7 ml-3 inline-flex"
          />
        </a>
      </h2>
      <p className="text-center mt-4 text-base flex space-y-4 flex-col">
        <span>{speaker.role}</span>
        <span>{speaker.organization}</span>
        <span>{speaker.Country}</span>
      </p>
    </div>
  );
}
