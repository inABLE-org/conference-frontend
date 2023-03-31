export default function ObjectiveCard(
    props:{
    objectiveNumber:JSX.Element
    objectiveName: JSX.Element
}) {
    return(
      <div className="grid grid-cols-5 mb-8 mt-4">
            <div className="col-span-1 bg-secondary text-white text-[64px] text-center">
                {props.objectiveNumber}
            </div>
            <div className="col-span-4 text-start border border-gray-200 pr-5 bg-white">
                <p className="mx-6">{props.objectiveName}</p>
            </div>
        </div>
    )
}