export default function RelevanceCard(
    props: {
        impactname: JSX.Element,
        impactdescription: JSX.Element
    }) {
    return (
        <>
        <div className="lg:grid lg:grid-cols-9 mb-16 sm:grid-cols-1 md:grid">
        <div className="bg-primary text-white text-[64px] flex col-span-2 ">
          {props.impactname}
        </div>
        <div className="col-span-7  border border-gray-200  bg-white ">
          <span className="mx-6">{props.impactdescription}</span>
        </div>
      </div>
        </>
    )
}