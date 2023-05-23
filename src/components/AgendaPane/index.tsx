import { AgendaInfo, ConferenceSpeaker, ConferenceVenue } from "@/pages/agenda";
import NextImage from "../NextImage";

type AgendaPaneProps = {
  date: string;
  agendaList: AgendaInfo[];
  draft?: Boolean | null;
};

const formatTime = (_date: string) =>
  new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(_date));

export default function AgendaPane({
  date,
  agendaList,
  draft,
}: AgendaPaneProps) {
  return (
    <>
      <div className="font-medium">
        <h2 className="text-[2em]" id={`${new Date(date).getTime()}`}>
          {date}
        </h2>
        {draft && (
          <p>
            Please note that this is a draft agenda and is subject to change
          </p>
        )}
      </div>
      <dl className="mt-10" aria-labelledby={`${new Date(date).getTime()}`}>
        {agendaList.map((conference_agenda: AgendaInfo, key: number) => {
          const time_now = new Date();
          const ongoing =
            new Date(conference_agenda.start_time) <= time_now &&
            new Date(conference_agenda.end_time) > time_now;
          return (
            <div
              key={key}
              className={`md:flex bg-white shadow-agenda-card mb-16 hover:border-2 border-secondary-2 ${
                ongoing ? "border-2" : ""
              }`}
            >
              <dt className="relative flex flex-col items-start md:items-center justify-between text-2xl px-4 xl:px-0 pt-11 md:w-[30%]">
                <div className="w-fit md:mx-auto py-3">
                  {ongoing && (
                    <span className="absolute top-0 bg-sucess-1 text-white flex px-3 py-1 font-semibold">
                      <NextImage
                        src="/assets/icons/live.svg"
                        alt="transcript"
                        className="h-8 w-8 inline-flex mr-3"
                        imgClass="object-none"
                        unoptimized
                      />
                      Ongoing
                    </span>
                  )}
                  {conference_agenda.start_time !=
                  conference_agenda.end_time ? (
                    <>
                      {formatTime(conference_agenda.start_time)} -{" "}
                      <span className="sr-only">to</span>
                      {formatTime(conference_agenda.end_time)}
                    </>
                  ) : (
                    formatTime(conference_agenda.start_time)
                  )}
                </div>
              </dt>
              <dd className="border-l-[0.015625rem] py-9 w-full">
                <div className="mx-auto  max-w-[93%]">
                  <h3 className="font-medium text-[1.75rem]">
                    {conference_agenda.title}
                  </h3>
                  <p className="my-9">{conference_agenda.description}</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-12">
                    {conference_agenda.moderator && (
                      <div className="flex flex-col space-y-2 items-center sm:items-start text-center sm:text-start">
                        <h3 className="font-medium text-xl">Moderator</h3>
                        <NextImage
                          src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${conference_agenda.moderator.photo.id}?key=potrait`}
                          alt={
                            conference_agenda.moderator.first_name + " potrait"
                          }
                          className="h-[25vw] w-[25vw] md:h-[11vw] md:w-[11vw] xl:h-20 xl:w-20 rounded-full overflow-hidden"
                          imgClass="object-cover"
                          unoptimized
                        />
                        <a
                          href={`/speakers/${conference_agenda.moderator.id}`}
                        >{`${conference_agenda.moderator.first_name} ${conference_agenda.moderator.second_name}`}</a>
                      </div>
                    )}
                    <div className="flex flex-col space-y-2 justify-end sm:col-span-3">
                      <div>
                        {conference_agenda.venue.length > 0 && (
                          <p role="text" className="mb-4">
                            <span className="font-semibold mb-6">Venue: </span>
                            {
                              conference_agenda.venue[0].conference_venues_id
                                ?.name
                            }
                          </p>
                        )}
                        {conference_agenda.breakouts.length > 0 && (
                          <p role="text">
                            <span className="font-semibold mb-6">
                              Breakout Sessions:
                            </span>{" "}
                            {conference_agenda.breakouts
                              .map(
                                ({ conference_venues_id }: ConferenceVenue) =>
                                  conference_venues_id?.name
                              )
                              .join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  {conference_agenda.title !== "Entertainment" && (
                    conference_agenda.speakers.length > 0 && (
                      <h3
                        className="font-medium text-xl mb-6"
                        id={`speakerTitle-${conference_agenda.id}`}
                      >
                        SPEAKER{conference_agenda.speakers.length > 1 ? "S" : ""}
                      </h3>
                    )
                  )}
                  <ul
                    role="list"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
                    aria-label={`speakerTitle-${conference_agenda.id}`}
                  >
                    {conference_agenda.speakers.map(
                      (
                        { conference_speakers_id }: ConferenceSpeaker,
                        key: number
                      ) => {
                        if (!conference_speakers_id.moderator) {
                          return (
                            <li
                              key={key}
                              className="flex flex-col space-y-2 items-center sm:items-start text-center sm:text-start"
                            >
                              <NextImage
                                src={`${process.env.NEXT_PUBLIC_MEDIA_LINK}/${conference_speakers_id.photo.id}?key=potrait`}
                                alt={
                                  conference_speakers_id.first_name + " potrait"
                                }
                                className="h-[25vw] w-[25vw] md:h-[11vw] md:w-[11vw] xl:h-20 xl:w-20 rounded-full overflow-hidden"
                                imgClass="object-cover"
                                unoptimized
                              />
                              <h4>
                                <a
                                  href={`/speakers/${conference_speakers_id.id}`}
                                  className="font-semibold"
                                >
                                  {`${conference_speakers_id.first_name} ${conference_speakers_id.second_name}`}
                                </a>
                              </h4>
                              <p>{conference_speakers_id.role}</p>
                              <p>{conference_speakers_id.organization}</p>
                            </li>
                          );
                        }
                      }
                    )}
                  </ul>
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    </>
  );
}
