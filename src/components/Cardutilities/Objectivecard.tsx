export default function ObjectiveCard(
    props:{
    objectiveNumber:JSX.Element
    objectiveName: JSX.Element
}) {
    return(
        <div className="lg:grid lg:grid-cols-9 mb-8  sm:grid-cols-1 md:grid">
        <div className="bg-secondary-2 text-white text-[64px] flex items-center col-span-2 justify-center">
          {props.objectiveNumber}
        </div>
        <div className="col-span-7 text-start border border-gray-200 pr-5 bg-white py-3">
          <p className="mx-6">{props.objectiveName}</p>
        </div>
      </div>
    )
}