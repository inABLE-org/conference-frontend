export default function Conferencecard(
    props:{
        title?:JSX.Element,
    }
)
{
    return(
        <div className="rounded-lg bg-white shadow w-[280px] text-center py-12 mb-5 mr-12">
          {props.title}
        </div>
    )
}