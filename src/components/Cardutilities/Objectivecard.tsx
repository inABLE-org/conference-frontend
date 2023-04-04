export default function ObjectiveCard(
    props:{
    objectiveNumber:JSX.Element
    objectiveName: JSX.Element
}) {
    return(
        <div className="grid lg:grid-cols-7 mb-8  sm:grid-cols-1 ">
        <div className="bg-secondary-2 text-white text-[64px] flex items-center justify-center">
          {props.objectiveNumber}
        </div>
        <div className="col-span-6 text-start border border-gray-200 pr-5 bg-white ">
          <p className="mx-6">{props.objectiveName}</p>
        </div>
      </div>
    )
}