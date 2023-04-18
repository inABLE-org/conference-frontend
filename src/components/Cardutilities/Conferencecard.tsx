export default function Conferencecard(props: {
  title?: JSX.Element;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white flex flex-col items-center text-center py-6 space-y-3 ${props.className}`}
    >
      {props.title}
    </div>
  );
}
