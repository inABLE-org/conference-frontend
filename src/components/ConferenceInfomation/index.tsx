type ConferenceInformationProps = {
  title: string;
  info: any;
  background?: string;
};

export default function ConferenceInformation({
  title,
  info,
  background,
}: ConferenceInformationProps) {
  return (
    <>
      <div className={`lg:flex ${background ? background : ""}`}>
        <dt className="font-bold text-32px pr-11 pt-12 lg:py-12 lg:w-[40%]">
          <h2 className="text-center lg:text-end">{title}</h2>
        </dt>
        <dd
          className="font-medium text-xl border-l-[0.015625rem] py-12 px-2  lg:w-[60%]"
          dangerouslySetInnerHTML={{
            __html: info,
          }}
        ></dd>
      </div>
    </>
  );
}
