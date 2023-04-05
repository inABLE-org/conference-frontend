import Conferencecard from "@/components/Cardutilities/Conferencecard"
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function PreviousConference() {
    return (
        <>
            <h4 className="text-5xl font-semibold py-8 container">
                About Previous Conferences
            </h4>
            <div>
                <div className="bg-primary">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-5">
                            <div>
                                <h3 className="text-white font-semibold text-[64px]">2022</h3>
                                <img src="assets/img/conference2022.png" />
                                <h4 className="text-white font-bold text-xl my-3">Live Watch parties In</h4>
                                <div className="grid grid-cols-3 mt-3 text-white lg:w-[500px]">
                                    <div>
                                        <ul>
                                            <li>Uganda</li>
                                            <li>Ethiopia</li>
                                            <li>Ghana</li>
                                            <li>Togo</li>
                                            <li>Rwanda</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Nigeria</li>
                                            <li>Malawi</li>
                                            <li>Zambia</li>
                                            <li>Cameroon</li>
                                            <li>Tanzania</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>South Africa</li>
                                            <li>Gabon</li>
                                            <li>Central Africa Republic</li>
                                            <li>Burundi</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex pr-9 mb-5">
                                    <button className="text-white rounded border-4 border-white p-3 ml-auto rounded-full mr-12">
                                        2022 Gallerly
                                        <ArrowRightIcon
                                            className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                                            stroke="currentColor"
                                        />
                                    </button>
                                </div>
                                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-3">
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold mt-1">Launch</h4>
                                            <p className="font-medium mt-5">
                                                KS2952 ICT Accessibility <br />Standards for products<br />
                                                &services
                                            </p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">+2465</h4>
                                            <p className="font-medium text-2xl">Registrations</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">14</h4>
                                            <p className="font-medium text-2xl">Country partners</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">64</h4>
                                            <p className="font-medium text-2xl">Country by <br />registration</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">27/14</h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">27/14</h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-5">
                            <div>
                                <h3 className="text-dark font-semibold text-[64px]">2021</h3>
                                <img src="assets/img/conference2022.png" />
                                <h4 className="text-dark font-bold text-xl my-3">Live Watch parties In:</h4>
                                <div className="grid grid-cols-3 mt-3 text-dark lg:w-[500px]">
                                    <div>
                                        <ul>
                                            <li>Kenya</li>
                                            <li>Uganda</li>
                                            <li>Ethiopia</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Ghana</li>
                                            <li>Nigeria</li>
                                            <li>Malawi</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Zambia</li>
                                            <li>South Africa</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex pr-9 mb-5">
                                    <button className="text-dark rounded border-4 border-primary p-3 ml-auto rounded-full mr-12">
                                        2022 Gallerly
                                        <ArrowRightIcon
                                            className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                                            stroke="currentColor"
                                        />
                                    </button>
                                </div>
                                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-3">
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">+1583</h4>
                                            <p className="font-medium text-2xl">Registration</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">8</h4>
                                            <p className="font-medium text-2xl">Country partners</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">375</h4>
                                            <p className="font-medium text-2xl">Watch Parties<br />Attendance</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">42</h4>
                                            <p className="font-medium text-2xl">Countries By Registrations</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">39 / 12 </h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-5">
                            <div>
                                <h3 className="text-white font-semibold text-[64px]">2020</h3>
                                <img src="assets/img/conference2022.png" />
                                <h4 className="text-white font-bold text-xl my-3">Live Watch parties In:</h4>
                                <div>
                                    <div className="grid grid-cols-3 mt-3 text-white lg:w-[500px]">
                                        <div className="h-full">
                                            <ul>
                                                <li>Kenya</li>
                                                <li>Uganda</li>
                                                <li>Ethiopia</li>
                                            </ul>
                                        </div>
                                        <div className="h-full">
                                            <ul>
                                                <li>Ghana</li>
                                                <li>Nigeria</li>
                                                <li>Malawi</li>
                                            </ul>
                                        </div>
                                        <div className="h-full">
                                            <ul>
                                                <li>Zambia</li>
                                                <li>South Africa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex pr-9 mb-5">
                                    <button className="text-white rounded border-4 border-white p-3 ml-auto rounded-full mr-12">
                                        2022 Gallerly
                                        <ArrowRightIcon
                                            className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                                            stroke="currentColor"
                                        />
                                    </button>
                                </div>
                                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-3">
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">27/14</h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">27/14</h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">27/14</h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">27/14</h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-5">27/14</h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}