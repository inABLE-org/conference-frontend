export default function TopParagraph({ text }: { text: string }) {
  return (
    <>
      <p className="text-center font-medium w-7/12 sm:px-2 pb-9 mb-8 mx-auto">
        {text}
      </p>
    </>
  );
}
