export default function PageTitle({ title }: { title: string }) {
  return (
    <>
      <h1
        id="pageTitle"
        className="mt-7 text-5xl pb-4 border-b-8 border-secondary-2 mx-auto w-fit mb-6"
      >
        {title}
      </h1>
    </>
  );
}
