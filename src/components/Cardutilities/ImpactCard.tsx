export default  function ImpactsCard(props:{number?:string,title?:JSX.Element,description?:JSX.Element})
{
    return(
    <>
    <div className=" bg-white border border-gray-200  shadow pt-7 pb-5">
        <p className="text-center text-5xl font-bold text-secondary">{props.number}</p>
        <h2 className="text-center mt-5 font-semibold">{props.title}</h2>
        <p className="mt-3 text-base leading-6 text-center">{props.description}</p>
        
    </div>
    </>
    )
}