import Layout from "@/components/Layout";
import ImpactSection from "@/components/Sections/ImpactSection";
import RelevanceCard from "@/components/Cardutilities/RelevanceCard";
import ObjectiveCard from "@/components/Cardutilities/Objectivecard";
import { useState } from "react";
import Conferencecard from "@/components/Cardutilities/Conferencecard";
export default function About() {
    const [openTab, setOpenTab] = useState(1);
    return (
        <Layout>
            <div className="w-100 bg-primary">
                <div className=" lg:px-[270px] sm:px-0 ">
                    <div className="flex flex-wrap py-12">
                        <div className="w-full sm:w-1/2">
                            <h1 className="text-white text-5xl text-start">
                                The Annual <br />
                                Inclusive Africa <br />
                                Conference
                            </h1>
                        </div>
                        <div className="w-full sm:w-1/2">

                        </div>
                    </div>
                    <div className="text-white py-6">
                        <div className="flex flex-col items-center justify-center pt-6 ">
                            <ul className="flex space-x-2">
                                <li><a href="#organizer" onClick={() => setOpenTab(1)} className={` ${openTab === 1 ? "border-b-4 border-secondary" : ""} inline-block px-4 py-2`}>The organizer</a>
                                </li>
                                <li>
                                    <a href="#conference" onClick={() => setOpenTab(2)} className={` ${openTab === 2 ? "border-b-4 border-secondary" : ""} inline-block px-4 py-2`}
                                    >
                                        About the Conference
                                    </a>
                                </li>
                                <li>
                                    <a href="#previous" onClick={() => setOpenTab(3)} className={` ${openTab === 3 ? "border-b-4 border-secondary" : ""} inline-block px-4 py-2`}>
                                        About Previous Conference
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="organizer" className={`lg:px-[270px] sm:px-0 ${openTab === 1}`}>
                <h1 className="my-10  text-5xl font-semibold font-semibold text-4xl">
                    Organizer
                </h1>
                <p className="text-start ">
                    inABLE.org was established in 2009 to address the urgent need to
                    connect blind and low-vision students to the rest of the world by
                    breaking down the barriers to communication, education and employment.
                    The priority was the creation of a computer-assistive-technology
                    program for blind and low-vision youth in Kenya to provide digital
                    skills training to the disadvantaged youth.{" "}
                </p>
                <h2 className="mt-10 text-[32px] font-semibold">Inables Impact</h2>
                <ImpactSection />
            </div>
            <h2 className="text-5xl font-semibold mb-10 lg:px-[270px] sm:px-0">
                Relevance
            </h2>
            <div className="lg:px-[270px] sm:px-0">
                <RelevanceCard
                    impactname={
                        <h3 className="text-4xl px-4 pt-8 pb-16 mb-10 ">
                            Covid 19 impact on PwD
                        </h3>
                    }
                    impactdescription={
                        <p className="ml-10 py-8">
                            The failure to provide accessible products and services in
                            education, employment, financial services and other sectors is a
                            global issue. During the COVID-19 pandemic, people were asked to
                            stay home and go online to access vital public health information,
                            work-from-home, and remote education. This magnified the
                            inequalities and alienation that prevent inclusion and protection
                            of PWDs. For many of the estimated 300 million Persons with
                            Disabilities (PWDs) in Africa, digital services and products are
                            just not usable. They were never designed with their diverse needs
                            in mind. Today, more than any other time, digital accessibility
                            urgently needs to be addressed, which is why inABLE organizes the
                            Annual Inclusive Africa Conference in the first place.
                        </p>
                    }
                />

                <RelevanceCard
                    impactname={
                        <h3 className="text-4xl px-4 pt-8  mb-10">
                            UNCRPD <br />
                            <span className="text-xl">
                                (UN Convention on the Rights of Persons with disabilities)
                            </span>
                        </h3>
                    }
                    impactdescription={
                        <p className="ml-10 py-8">
                            {" "}
                            The UN Convention on the Rights of Persons with disabilities
                            addresses accessibility in its resolution adopted by the General
                            Assembly in 1993 by recognizing “the importance of accessibility
                            to the physical,social, economic and cultural environment, to
                            health and education and to information and communication, in
                            enabling persons with disabilities to fully enjoy all human rights
                            and fundamental freedoms.”
                        </p>
                    }
                />
                <RelevanceCard
                    impactname={<h3 className="text-4xl">SDG</h3>}
                    impactdescription={
                        <span className="py-8">
                            <p className="ml-10">
                                Goal 10 of the SDGs aims to ensure equal opportunity and reduced
                                inequalities for all by 2030, to empower and promote the social,
                                economic and political inclusion of all, irrespective of age,
                                sex, disability, race, ethnicity, origin, religion or economic
                                or other status.
                            </p>
                            <p className="mt-5 ml-10">
                                During this Post- Covid period, how do we take advantage of the
                                lesson learned in the last three years to ensure that no one is
                                left behind?
                            </p>
                        </span>
                    }
                />
            </div>
            <div className="lg:px-[270px] sm:px-0">
                <h3 className="text-5xl font-semibold  my-5">Impact</h3>
                <p className="text-start">
                    Since the first Inclusive Africa Conference in 2020, the purpose of
                    this annual event is to promote the advancement of digital
                    accessibility and <br />
                    assistive technology for persons with disabilities in Africa. Over the
                    last three years this event has created a platform for disability{" "}
                    <br />
                    and accessibility experts, people with lived experiences, policy
                    makers, researchers, innovators, entrepreneurs, businesses,
                    governments and others to <br /> share knowledge and created awareness
                    across Africa about the importance of leaving no one behind. The
                    discussions include employment, <br />
                    education innovations and more. The event has also received global
                    attention through sponsorships and partnerships with global tech
                    leaders, <br />
                    influential keynote speakers, and disability leaders throughout
                    Africa.
                </p>
            </div>
            <div className="lg:px-[270px] sm:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                    <div className="">
                        <h3 className="text-5xl font-semibold">Objectives</h3>
                        <p className="my-5">
                            Since the first Inclusive Africa Conference in 2020, the purpose
                            of this annual event is to promote the advancement of digital
                            accessibility and assistive technology for persons with
                            disabilities in Africa. Over the last three years this event has
                            created a platform for disability and assistive technology for
                            persons with disabilities in Africa. Over the last three years
                            this event has created a platform for disability
                        </p>
                        <img className="mt-7" src="assets/img/spiner.png" />
                    </div>
                    <div className="mt-10">
                        <ObjectiveCard
                            objectiveNumber={<h5>01</h5>}
                            objectiveName={
                                <>
                                    Ensure that African youth with disabilities are at the centre
                                    of digital accessibility conversations. By provide a forum for
                                    disability rights and support groups across Africa to bring
                                    PWDs to the centre of inclusive design and digital
                                    accessibility.
                                </>
                            }
                        />
                        <ObjectiveCard
                            objectiveNumber={<h5>02</h5>}
                            objectiveName={
                                <>
                                    Share regional and global best practices in implementing
                                    accessibility standards and policies and influence delegates
                                    to become accessibility ambassadors and lead the development
                                    of: Accessible ICT policies, solutions, and products anchored
                                    under the universal/inclusive design guidelines so that PWDs
                                    can participate in and benefit from the digital economy.
                                </>
                            }
                        />
                        <ObjectiveCard
                            objectiveNumber={<h5>03</h5>}
                            objectiveName={
                                <>
                                    Focus attention on the best way forward for implementing
                                    accessibility of digital products and services in Africa and
                                    increase public awareness for the needs and rights of PWDs to
                                    access digital information.
                                </>
                            }
                        />
                        <ObjectiveCard
                            objectiveNumber={<h5>04</h5>}
                            objectiveName={
                                <span id="previous">
                                    Highlight assistive technology innovations in Africa and
                                    create a platform to share knowledge and expertise on product
                                    design and go to market, mentorship and funding opportunities.
                                    Award the annual Inclusive Africa Innovations winner.
                                </span>
                            }
                        />
                        <ObjectiveCard
                            objectiveNumber={<h5>05</h5>}
                            objectiveName={
                                <span className="pt-7">
                                    Demonstrate inclusive events’ "best-practices", including
                                    attendees with lived experience, interpreters, and captioners.
                                </span>
                            }
                        />
                    </div>
                </div>
            </div>
            <h4 className="text-5xl font-semibold py-8 lg:px-[270px] sm:px-0">
                About Previous Conferences
            </h4>
            <div>
                <div className="bg-primary lg:px-[270px] sm:px-0">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-5">
                        <div>
                            <h3 className="text-white font-semibold text-[64px]">2022</h3>
                            <img src="assets/img/conference2022.png" />
                            <div>

                            </div>
                        </div>
                        <div>
                            <div className="flex pr-9 mb-5">
                                <button className="text-white rounded border-4 border-white p-3 ml-auto rounded-full mr-12">
                                    2022 Gallerly
                                </button>
                            </div>
                            <div className="grid  lg:grid-cols-2  sm:grid-cols-1 grid-rows-3">
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
                <div>
                    <div className="lg:px-[270px] sm:px-0">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-5">
                            <div>
                                <h3 className="text-dark font-semibold text-[64px]">2022</h3>
                                <img src="assets/img/conference2022.png" />
                                <div className="grid lg:grid-cols-3 lg:mr-16 py-5">
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
                            <div>
                                <div className="flex pr-9 mb-5">
                                    <button className="text-dark rounded border-4 border-primary p-3 ml-auto rounded-full mr-12">
                                        2022 Gallerly
                                    </button>
                                </div>
                                <div className="grid  lg:grid-cols-2  sm:grid-cols-1 grid-rows-3">
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
                    <div className="lg:px-[270px] sm:px-0">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 py-5">
                            <div>
                                <h3 className="text-white font-semibold text-[64px]">2022</h3>
                                <img src="assets/img/conference2022.png" />
                                <div>
                                <div className="grid lg:grid-cols-3 lg:mr-16 py-5 text-white">
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
                                    </button>
                                </div>
                                <div className="grid  lg:grid-cols-2  sm:grid-cols-1 grid-rows-3">
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

            <div className="mt-10 py-10 text-center">
                <h2 className="text-5xl">Other Meetings & conferences</h2>
                <p className="mt-10 mb-12">
                    The organization has organized similar meetings and conferences in the
                    previous years
                </p>
                <div className="flex justify-center">
                    <div className="grid md:grid-cols-3 lg:gap-[100px]">
                        <div className="mb-4">
                            <img
                                src="assets/img/conferencelogo.png"
                                alt="Inclusive Africa Logo"
                            />
                        </div>
                        <div className="mb-4">
                            <img
                                src="assets/img/conferencelogo.png"
                                alt="Inclusive Africa Logo"
                            />
                        </div>
                        <div>
                            <img
                                src="assets/img/conferencelogo.png"
                                alt="Inclusive Africa Logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
