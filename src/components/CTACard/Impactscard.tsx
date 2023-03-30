export default  function ImpactsCard(props:{number:string,title:JSX.Element,description:JSX.Element})
{
    return(
    <>
    <div className="max-w-sm w-[279px] bg-white border border-gray-200  shadow">
        {props.number}
        {props.title}
        {props.description}
    </div>
    </>
    )
}