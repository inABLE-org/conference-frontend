export default function Conferencecard(
    props:{
        title?:JSX.Element,
    }
)
{
    return(
        <div className="rounded-lg bg-white shadow text-center py-5 mb-5">
          {props.title}
        </div>
    )
}