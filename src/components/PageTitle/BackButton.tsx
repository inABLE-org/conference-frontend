type PageTitleProps = {
  title: string;
  underlineClass?: string;
};
export default function PageTitle({ title, underlineClass }: PageTitleProps) {
  return (
    <>
      <h1
        id="pageTitle"
        className="mt-7 text-5xl mx-auto w-fit mb-6 flex flex-col text-center"
        // className="mt-7 text-5xl pb-4 border-b-8 border-secondary-2 mx-auto w-fit mb-6"
      >
        <span className="mb-4">{title}</span>
        <span className={underlineClass}></span>
      </h1>
    </>
  );
}
