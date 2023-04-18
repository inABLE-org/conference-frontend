export default function RelevanceCard(props: {
  impactname: string;
  impactdescription: JSX.Element;
  subtitle?: string;
}) {
  return (
    <dl className="sm:flex">
      <dt className="bg-primary text-white sm:w-5/12 lg:w-3/12 py-11 pl-9">
        <h3 className="text-4xl font-semibold">
          {props.impactname} <br />{" "}
          <span className="text-xl font-medium">{props.subtitle}</span>
        </h3>
      </dt>
      <dd className="shadow-agenda-card  bg-white sm:w-7/12 lg:w-9/12">
        <span className="mx-6">{props.impactdescription}</span>
      </dd>
    </dl>
  );
}
