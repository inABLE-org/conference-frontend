import Conferencecard from "../Cardutilities/Conferencecard"
export default function PreviousConference()
{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-white">
                <h3>2022</h3>
                <img src="assets/img/conference2022.png" />
                <h5 >Live Watch Parties in</h5>
                <p>Live Watch Parties in:
                    Uganda, Ethiopia, Ghana, Nigeria, Malawi, Zambia, South Africa,<br />
                    Gabon, Central African Republic, Togo,<br /> Cameroon, Burundi, Rwanda,
                    Tanzania</p>
                <a>Knowledge Document - Day one</a>
                <a>Knowledge Document - Day two</a>
            </div>
            <div className="py-5">
                <button className="text-white rounded border-4 border-white p-3">2022 Gallery</button>
                <div className="container grid sm:grid-cols-1 xl:grid-cols-2 py-16 ">
                    <Conferencecard
                        title={
                            <div>
                                <h3 className="text-2xl font-semibold">6300</h3>
                                <p>Registrations</p>
                            </div>
                        }
                    />
                    <Conferencecard
                        title={
                            <>
                                <h3 className="text-2xl font-semibold">8</h3>
                                <p>Country partners</p>
                            </>
                        }
                    />
                </div>
                <div className="container grid sm:grid-cols-1 xl:grid-cols-2  py-16 ">
                    <Conferencecard
                        title={
                            <div>
                                <h3 className="text-2xl font-semibold">302</h3>
                                <p>Watch Parties <br />Attendance</p>
                            </div>
                        }
                    />
                    <Conferencecard
                        title={
                            <>
                                <h3 className="text-2xl font-semibold">70</h3>
                                <p>Watch Parties <br /> Attendance</p>
                            </>
                        }
                    />
                </div>
                <Conferencecard
                    title={
                        <>
                            <h3 className="text-2xl font-semibold">27 / 14</h3>
                            <p>Speakers Countries</p>
                        </>
                    }
                />
            </div>
        </div>
    )
}
