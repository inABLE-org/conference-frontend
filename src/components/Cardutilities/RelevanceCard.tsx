export default function RelevanceCard(
    props: { 
        impactname: JSX.Element, 
        impactdescription: JSX.Element
     }) {
    return (
        <>
            
                    <div className="flex justify-center mb-10">
                        <div className="flex flex-wrap container">
                            <div className="w-40 md:w-auto bg-primary text-white px-12 py-12">
                               <div className="mx-12">{props.impactname}</div>
                            </div>
                            <div className="w-60 md:w-auto bg-white pr-12 py-4 border border-gray-200">
                               <div className="mx-12">{props.impactdescription}</div>
                            </div>
                        </div>
                    </div>
            
        </>
    )
}