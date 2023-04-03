import CustomImage from "../CustomImage";
export default function Speaker(props: {
  name: string;
  imgsource: string;
  organization: string;
  role: string;
  country: string;
}) {
  return (
    <div className=" bg-white rounded-lg shadow-agenda-card hover:bg-primary hover:text-white py-6">
      <div className="h-[18.2vw] w-[18vw] md:h-[7.75vw] md:w-[7.7vw] rounded-full border-secondary-2 border-4 overflow-hidden mx-auto flex items-center justify-center">
        <CustomImage
          src={props.imgsource}
          alt={props.name + " potrait"}
          className="min-h-[18.2vw] min-w-[18vw] md:min-h-[7.75vw] md:min-w-[7.7vw]"
        />
      </div>
      <h2 className="font-medium text-xl flex items-center justify-center mt-6">
        {props.name}
        <CustomImage
          src={"/assets/icons/Linkedin.svg"}
          alt={props.name + " LinkedIn account"}
          className="h-6 w-7 ml-3 inline-flex"
        />
      </h2>
      <p className="text-center mt-4 text-base flex space-y-4 flex-col">
        <span>{props.role}</span>
        <span>{props.organization}</span>
        <span>{props.country}</span>
      </p>
    </div>
  );
}
