import Conferencecard from "@/components/Cardutilities/Conferencecard"
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function PreviousConference() {
    return (
        <>
            <h4 className="text-5xl font-semibold py-8 container mt-10">
                About Previous Conferences
            </h4>
            <div>
                <div className="bg-gradient-to-b from-primary to-primary-1">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-5">
                            <div>
                                <h3 className="text-white font-semibold text-[64px] mb-10">2022</h3>
                                <img src="../assets/img/conference2022.png" />
                                <h4 className="text-white font-bold text-xl my-3">Live Watch parties In</h4>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-[-30px] mt-3 text-white lg:w-[430px] ml-5">
                                    <div>
                                        <ul className="list-disc">
                                            <li>Uganda</li>
                                            <li>Ethiopia</li>
                                            <li>Ghana</li>
                                            <li>Togo</li>
                                            <li>Rwanda</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-disc">
                                            <li>Nigeria</li>
                                            <li>Malawi</li>
                                            <li>Zambia</li>
                                            <li>Cameroon</li>
                                            <li>Tanzania</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-disc">
                                            <li>South Africa</li>
                                            <li>Gabon</li>
                                            <li className="whitespace-nowrap">Central Africa Republic</li>
                                            <li>Burundi</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 ">
                                <a href="#" className="text-white border-b border-b-2 border-b-secondary font-medium">Knowledge Document - Day one</a> <br /> <br />
                                <a href="#" className="text-white  border-b border-b-2 border-b-secondary font-medium ">Knowledge Document - Day two</a>
                                </div>
                            </div>
                            <div>
                                <div className="flex mb-14">
                                    <button className="text-white rounded border-4 border-white p-3 ml-auto rounded-full mt-7">
                                        2022 Gallery
                                        <ArrowRightIcon
                                            className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                                            stroke="currentColor"
                                        />
                                    </button>
                                </div>
                                <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-3">
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
                                            <h4 className="text-[32px] font-semibold mt-5">+2465</h4>
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
                                            <h4 className="text-[32px] font-semibold mt-5">522</h4>
                                            <p className="font-medium text-2xl">Watch Parties<br />Attendance</p>
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
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-10">
                            <div>
                                <h3 className="text-dark font-semibold text-[64px] mb-10">2021</h3>
                                <img src="../assets/img/conference2021.png" />
                                <h4 className="text-dark font-bold text-xl my-3">Live Watch parties In:</h4>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 my-4 text-dark lg:w-[450px] ml-5">
                                    <div className="lg:ml-5">
                                        <ul className="list-disc">
                                            <li>Kenya</li>
                                            <li>Uganda</li>
                                            <li>Ethiopia</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-disc">
                                            <li>Ghana</li>
                                            <li>Nigeria</li>
                                            <li>Malawi</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-disc">
                                            <li>Zambia</li>
                                            <li>South Africa</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="#" className="border-b border-b-2 border-b-secondary font-medium">Knowledge Document </a>
                            </div>
                            <div>
                                <div className="flex py-5">
                                    <button className="text-dark rounded border-4 border-primary p-3 ml-auto rounded-full mb-10">
                                        2022 Gallery
                                        <ArrowRightIcon
                                            className="ml-4 h-5 w-5 inline-flex stroke-[1.5] "
                                            stroke="currentColor"
                                        />
                                    </button>
                                </div>
                                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-3">
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">+1583</h4>
                                            <p className="font-medium text-2xl">Registration</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">8</h4>
                                            <p className="font-medium text-2xl">Country partners</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">375</h4>
                                            <p className="font-medium text-2xl">Watch Parties<br />Attendance</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">42</h4>
                                            <p className="font-medium text-2xl">Countries By Registrations</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">39 / 12 </h4>
                                            <p className="font-medium text-2xl">Speakers Countries</p>
                                        </>
                                    }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-primary to-primary-1">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-8">
                            <div>
                                <h3 className="text-white font-semibold text-[64px] mb-12">2020</h3>
                                <img src="../assets/img/conference2020.png" />
                                <h4 className="text-white font-bold text-xl my-3">Live Watch parties In:</h4>
                                <div>
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 my-3 text-dark lg:w-[450px] text-white ml-5">
                                        <div className="h-full">
                                            <ul className="list-disc lg:ml-6">
                                                <li>Kenya</li>
                                                <li>Uganda</li>
                                                <li>Ethiopia</li>
                                            </ul>
                                        </div>
                                        <div className="h-full">
                                            <ul className="list-disc">
                                                <li>Ghana</li>
                                                <li>Nigeria</li>
                                                <li>Malawi</li>
                                            </ul>
                                        </div>
                                        <div className="h-full">
                                            <ul className="list-disc">
                                                <li>Zambia</li>
                                                <li>South Africa</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="#" className="text-white  border-b border-b-2 border-b-secondary font-medium">Knowledge Document</a>
                                </div>
                            </div>
                            <div>
                                <div className="flex mb-16">
                                    <button className="text-white rounded border-4 border-white p-3 ml-auto rounded-full mt-5">
                                        2022 Gallery
                                        <ArrowRightIcon
                                            className="ml-4 h-5 w-5 inline-flex stroke-[1.5]"
                                            stroke="currentColor"
                                        />
                                    </button>
                                </div>
                                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-3">
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">6300</h4>
                                            <p className="font-medium text-2xl">Registrations</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">8</h4>
                                            <p className="font-medium text-2xl">Country partners</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">302</h4>
                                            <p className="font-medium text-2xl">Watch Parties <br />Attendance</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">70</h4>
                                            <p className="font-medium text-2xl">Countries By <br />Registrations</p>
                                        </>
                                    }
                                    />
                                    <Conferencecard title={
                                        <>
                                            <h4 className="text-[32px] font-semibold my-3">27/14</h4>
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