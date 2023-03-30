import CustomImage from "../CustomImage"
export default function Speaker(props: { name: string, imgsource: string, organization: string, role: string, country: string }) {

    return (
        <div className="max-w-sm w-[279px] bg-white border border-gray-200  shadow hover:bg-primary hover:text-white">
            <div className="flex flex-col items-center py-10 hover:bg-primary hover:text-white">
                <img className="h-28 w-28 mb-3 rounded-full shadow-lg border-4 border-secondary"
                    src={props.imgsource}
                    alt={props.name + "Potrait"} />
                <div className="flex items-center">
                    <p className="text-base text-dark font-semibold">{props.name}</p>
                    <CustomImage
                        src={"/assets/icons/Linkedin.png"}
                        alt={props.name+" Linked in image"}
                        className="h-5 w-6 text-white bg-sky-800 mt--1 ml-5 "
                    />
                </div>
                <p className="text-dark mt-4 text-base">{props.role}</p>
                <p className="text-dark mt-3 text-base font-semibold">{props.organization}</p>
                <p className="text-center text-dark mt-3">{props.country}</p>
            </div>
        </div>
    )
}





