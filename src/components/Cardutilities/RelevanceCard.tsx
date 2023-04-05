export default function RelevanceCard(
    props: {
        impactname: JSX.Element,
        impactdescription: JSX.Element
    }) {
    return (
        <>
        <div className="lg:grid lg:grid-cols-9 mb-8  sm:grid-cols-1 md:grid">
        <div className="bg-primary text-white text-[64px] flex items-center col-span-2 justify-center">
          {props.impactname}
        </div>
        <div className="col-span-7 text-start border border-gray-200 pr-5 bg-white ">
          <p className="mx-6">{props.impactdescription}</p>
        </div>
      </div>
        </>
    )
}