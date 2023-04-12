import { AgendaInfo, ConferenceSpeaker } from "@/pages/agenda";
import CustomImage from "../CustomImage";

type AgendaPaneProps = {
  date: string;
  agendaList: AgendaInfo[];
};

const formatTime = (_date: string) =>
  new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(_date));

export default function AgendaPane({ date, agendaList }: AgendaPaneProps) {
  return (
    <>
      <h2 className="font-medium text-[2em]" id={`${new Date(date).getTime()}`}>
        {date}
      </h2>
      <dl className="mt-16" aria-labelledby={`${new Date(date).getTime()}`}>
        {agendaList.map((conference_agenda: AgendaInfo, key: number) => {
          const moderator = conference_agenda.speakers.filter(
            ({ conference_speakers_id }: ConferenceSpeaker) =>
              conference_speakers_id.moderator
          );

          return (
            <div
              key={key}
              className="md:flex bg-white shadow-agenda-card mb-16 hover:border-2 hover:border-secondary-2"
            >
              <dt className="relative flex flex-col items-center justify-between text-2xl px-4 xl:px-0 py-11 lg:w-[30%]">
                <div className="w-fit mx-auto pb-3">
                  {formatTime(conference_agenda.start_time)} -{" "}
                  <span className="sr-only">to</span>
                  {formatTime(conference_agenda.end_time)}
                </div>
                {moderator.length > 0 && (
                  <div className="mx-auto sm:mx-0 sm:pb-11 text-center sm:text-left">
                    <CustomImage
                      src={`https://cms.inclusiveafrica.org/assets/${moderator[0].conference_speakers_id.photo.id}`}
                      alt={`${moderator[0].conference_speakers_id.first_name}`}
                      className="min-h-[25vw] w-[25vw] md:min-h-[5.1vw] md:w-[5.1vw] rounded-full overflow-hidden mx-auto sm:mx-0"
                    />
                    <h3 className="font-semibold">Moderator</h3>
                    <a
                      href={`/speakers/${moderator[0].conference_speakers_id.id}`}
                    >{`${moderator[0].conference_speakers_id.first_name} ${moderator[0].conference_speakers_id.second_name}`}</a>
                  </div>
                )}
              </dt>
              <dd className="border-l-[0.015625rem] py-9 w-full">
                <div className="mx-auto  max-w-[93%]">
                  <h3 className="font-medium text-[1.75rem]">
                    {conference_agenda.title}
                  </h3>
                  <p className="my-9">{conference_agenda.description}</p>
                  {conference_agenda.speakers.length > 0 && (
                    <h3 className="font-medium text-2xl mb-6">
                      {conference_agenda.speakers.length - moderator.length}
                      <span id={`speakerTitle-${conference_agenda.id}`}>
                        {" "}
                        SPEAKERS
                      </span>
                    </h3>
                  )}
                  <ul
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
                              className="flex flex-col space-y-2 items-center sm:items-start"
                            >
                              <CustomImage
                                src={`https://cms.inclusiveafrica.org/assets/${conference_speakers_id.photo.id}`}
                                alt={`${conference_speakers_id.first_name}`}
                                className="min-h-[25vw] w-[25vw] md:min-h-[5.1vw] md:w-[5.1vw] rounded-full overflow-hidden"
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
