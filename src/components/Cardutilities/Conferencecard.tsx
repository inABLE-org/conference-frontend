export default function Conferencecard(
    props:{
        title?:JSX.Element,
    }
)
{
    return(
        <div className="rounded bg-white shadow w-[280px] text-center py-12 mb-8">
          {props.title}
        </div>
    )
}