import { JsxElement } from "typescript"
import Conferencecard from "../Cardutilities/Conferencecard"
export default function PreviousConference(
    props: {
        conferenceyear: JSX.Element,
        card1content: JSX.Element,
        card2content: JSX.Element,
        card3content: JSX.Element,
        card4content: JSX.Element,
        card5content: JSX.Element,
        card6content?:JSX.Element
        year:JSX.Element
        countrieslist:JsxElement

    }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
            <div className="py-1  xl:pl-12">
                <h3 className="font-bold text-[64px]">{props.year}</h3>
                <img src="assets/img/conference2022.png" />
                
                <div></div>{props.countrieslist}
                
            </div>
            <div className="py-5">
                <div className="flex pr-9">
                    <button className="text-white rounded border-4 border-white p-3 ml-auto rounded-full mr-12">
                        {props.conferenceyear}
                    </button>
                </div>
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 mt-5 sm:flex-col justify-center  pr-9">
                    <Conferencecard
                        title={
                            <div>
                                {props.card1content}
                            </div>
                        }
                    />
                    <Conferencecard
                        title={
                            <>
                                {props.card2content}
                            </>
                        }
                    />
                </div>
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 sm:flex-col  pr-9 ">
                    <Conferencecard
                        title={
                            <div>
                                {props.card3content}
                            </div>
                        }
                    />
                    <Conferencecard
                        title={
                            <>
                                {props.card4content}
                            </>
                        }
                    />
                </div>
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 sm:flex-col justify-center  pr-9">
                    <Conferencecard
                        title={
                            <div>
                                {props.card5content}
                            </div>
                        }
                        
                    />
                    {props.card6content}

                </div>
         </div>
        </div>
    )
}
