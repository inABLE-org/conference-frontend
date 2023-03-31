import Conferencecard from "../Cardutilities/Conferencecard"
export default function PreviousConference() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
            <div className="text-white py-1  xl:pl-12">
                <h3 className="font-bold text-[64px]">2022</h3>
                <img src="assets/img/conference2022.png" />
                <h5 >Live Watch Parties in</h5>
                <div className="container grid sm:grid-cols-2 md:grid-cols-3">
                    <div>
                        <ul>
                            <li>Uganda</li>
                            <li>Ethipia</li>
                            <li>Ghana</li>
                            <li>Nigeria</li>
                            <li>Malawi</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Zambia</li>
                            <li>South Africa</li>
                            <li>Gabon</li>
                            <li>Cameroon</li>
                            <li>Togo</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Burundi</li>
                            <li>Rwanda</li>
                            <li>Tanzania</li>
                            <li className="whitespace-nowrap text-base">Central African Republic</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-5">
                <div className="flex pr-9 mx-12">
                    <button className="text-white rounded border-4 border-white p-3 ml-auto rounded-full mr-12">2022 Gallery</button>
                </div>
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-0 mt-5 sm:flex-col justify-center mx-12 pr-12">
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
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 sm:flex-col justify-center mx-12 pr-12 ">
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
                <div className=" container grid sm:grid-cols-1 sm:flex-col justify-center mx-12 pr-12">
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
        </div>
    )
}
