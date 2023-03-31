export default function RelevanceCard(
    props: { 
        impactname: JSX.Element, 
        impactdescription: JSX.Element
     }) {
    return (
        <>
            <div className="mx-[160px] grid grid-cols-6 gap-0 bg-white border border-gray-200  shadow mt-[60px]">
                    {props.impactname}
                    {props.impactdescription}
            </div>
        </>
    )
}