export default  function ImpactsCard(props:{number?:string,title?:JSX.Element,description?:JSX.Element})
{
    return(
    <>
    <div className=" bg-white border border-gray  shadow pt-7  rounded min-h-[286px]">
        <p className="text-center text-5xl font-bold text-secondary">{props.number}</p>
        <h2 className="text-center mt-5 font-semibold text-xl">{props.title}</h2>
        <p className="mt-3 text-base leading-6  py-3 text-center">{props.description}</p>
        
    </div>
    </>
    )
}