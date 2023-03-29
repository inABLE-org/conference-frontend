export default function Speaker(props: { name: string, imgsource: string })
{

    return (
        <div className="max-w-sm bg-white border border-gray-200  shadow hover:bg-primary hover:text-white">
            <div className="flex flex-col items-center py-10 hover:bg-primary hover:text-white">
                <img className="h-24 mb-3 rounded-full shadow-lg"
                    src={props.imgsource}
                    alt="Irene kirika" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                <p className="text-sm text-dark">Founder</p>
                <p className="text-sm text-dark">Inable</p>
            </div>
        </div>
    )
}





