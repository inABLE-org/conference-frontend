import ImpactsCard from "@/components/CTACard/Impactscard"
import Layout from "@/components/Layout"
import ImpactSection from "@/components/Sections/ImpactSection"
import RelevanceCard from "@/components/Cardutilities/RelevanceCard"
import TwoTabs from "@/components/Tabs/TwoTabs"
import Conferencecard from "@/components/Cardutilities/Conferencecard"
import PreviousConference from "@/components/Sections/PreviousConference"
import ObjectiveCard from "@/components/Cardutilities/Objectivecard"
import Tabs from "@/components/Tabs"
import { useState } from "react"
import TabPanel from "@/components/Tabs/TabPanel"
export default function About() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
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
                        <p className="text-white">To take digital accessibility and assistive technology in Africa to the next level, inABLE<br />has begun organizing the fourth annual Inclusive Africa Conference scheduled on<br />May 29 – 31, 2023 in Nairobi, Kenya, and virtually. The agenda discussions will focus <br />on promoting the advancement of digital accessibility and assistive technology for <br /> persons with disabilities in Africa.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-body lg:px-[270px] sm:px-0">
                    <h1 className="my-10  text-5xl font-semibold font-semibold text-4xl">Organizer</h1>
                    <p className="text-start ">inABLE.org was established in 2009 to address the urgent need to connect blind and low-vision students to the rest of the world by breaking down the barriers to communication, education and employment. The priority was the creation of a computer-assistive-technology program for blind and low-vision youth in Kenya to provide digital skills training to the disadvantaged youth. </p>
                    <h2 className=" mt-10 ">Inables Impact</h2>
                    <ImpactSection />
                </div>
                <h2 className="text-5xl font-semibold mb-10 lg:px-[270px] sm:px-0">Relevance</h2>
                <div className="ml-10">
                    <RelevanceCard
                        impactname={

                            <h3 className="text-4xl">Covid 19 impact on PwD</h3>

                        }
                        impactdescription={

                            <p className="ml-10">The failure to provide accessible products and services in education, employment, financial services and other sectors is a global issue. During the COVID-19 pandemic, people were asked to stay home and go online to access vital public health information, work-from-home, and remote education. This magnified the inequalities and alienation that prevent inclusion and protection of PWDs. For many of the estimated 300 million Persons with Disabilities (PWDs) in Africa, digital services and products are just not usable. They were never designed with their diverse needs in mind. Today, more than any other time, digital accessibility urgently needs to be addressed, which is why inABLE organizes the Annual Inclusive Africa Conference in the first place.</p>

                        } />

                    <RelevanceCard
                        impactname={

                            <h3 className="text-4xl">UNCRPD</h3>

                        }
                        impactdescription={

                            <p className="ml-10"> The UN Convention on the Rights of Persons with disabilities addresses accessibility in its resolution adopted by the General Assembly in 1993 by recognizing “the importance of accessibility to the physical,social, economic and cultural environment, to health and education and to information and communication, in enabling persons with disabilities to fully enjoy all human rights and fundamental freedoms.”</p>

                        } />
                    <RelevanceCard
                        impactname={

                            <h3 className="text-4xl">Covid 19 impact on PwD</h3>

                        }
                        impactdescription={

                            <p className="ml-10">The failure to provide accessible products and services in education, employment, financial services and other sectors is a global issue. During the COVID-19 pandemic, people were asked to stay home and go online to access vital public health information, work-from-home, and remote education. This magnified the inequalities and alienation that prevent inclusion and protection of PWDs. For many of the estimated 300 million Persons with Disabilities (PWDs) in Africa, digital services and products are just not usable. They were never designed with their diverse needs in mind. Today, more than any other time, digital accessibility urgently needs to be addressed, which is why inABLE organizes the Annual Inclusive Africa Conference in the first place.</p>

                        } />

                </div>
                <div className="lg:px-[270px] sm:px-0">
                    <h3 className="text-5xl font-semibold  my-5">Impact</h3>
                    <p className="text-start">Since the first Inclusive Africa Conference in 2020, the purpose of this annual event is to promote the advancement of digital accessibility and <br />assistive technology for persons with disabilities in Africa. Over the last three years this event has created a platform for disability <br />and accessibility experts, people with lived experiences, policy makers, researchers, innovators, entrepreneurs, businesses, governments and others to <br /> share knowledge and created awareness across Africa about the importance of leaving no one behind. The discussions include employment, <br />education innovations and more. The event has also received global attention through sponsorships and partnerships with global tech leaders, <br />influential keynote speakers, and disability leaders throughout Africa.</p>
                </div>
                <div className="lg:px-[270px] sm:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                    <div className="">
                        <h3 className="text-5xl font-semibold">Objectives</h3>
                        <p className="my-5">
                            Since the first Inclusive Africa Conference in 2020, the purpose of this annual event is to promote the advancement of digital accessibility and assistive technology for persons with disabilities in Africa. Over the last three years this event has created a platform for disability and assistive technology for persons with disabilities in Africa. Over the last three years this event has created a platform for disability
                        </p>
                        <img src="assets/img/spiner.png" />
                    </div>
                    <div>
                        <ObjectiveCard
                            objectiveNumber={
                                <h5>01</h5>
                            }
                            objectiveName={
                                <>
                                    Ensure that African youth with disabilities are at the centre of
                                    digital accessibility conversations. By provide a forum for disability rights and support groups across Africa to bring PWDs to the centre of inclusive design and digital accessibility.
                                </>

                            }
                        />
                        <ObjectiveCard
                            objectiveNumber={
                                <h5>02</h5>
                            }
                            objectiveName={
                                <>Share regional and global best practices in implementing accessibility standards and policies and influence delegates to become accessibility ambassadors and lead the development of: Accessible ICT policies, solutions, and products anchored under the universal/inclusive design guidelines so that PWDs can participate in and benefit from the digital economy.</>
                            }
                        />
                        <ObjectiveCard
                            objectiveNumber={
                                <h5>03</h5>
                            }
                            objectiveName={
                                <>Focus attention on the best way forward for implementing accessibility of digital products and services in Africa and increase public awareness for the needs and rights of PWDs to access digital information.</>
                            }
                        />
                        <ObjectiveCard
                            objectiveNumber={
                                <h5>04</h5>
                            }
                            objectiveName={
                                <>Highlight assistive technology innovations in Africa and create a platform to share knowledge and expertise on product design and go to market, mentorship and funding opportunities. Award the annual Inclusive Africa Innovations winner.</>
                            }
                        />
                        <ObjectiveCard
                            objectiveNumber={
                                <h5>05</h5>
                            }
                            objectiveName={
                                <>Demonstrate inclusive events’ "best-practices", including attendees with lived experience, interpreters, and captioners.</>
                            }
                        />


                    </div>
                </div>
                </div>
                <h4 className="text-5xl font-semibold py-8 lg:px-[270px] sm:px-0">About Previous Conferences</h4>
                <div className="bg-primary lg:px-[270px] sm:px-0">
                    <PreviousConference
                        year={
                            <span className="text-white">2022</span>
                        }
                        conferenceyear={
                            <>2022 Gallery</>
                        }
                        card1content={
                            <>
                                <h3>Launch</h3>
                                <p>KS2952 ICT Accessibility
                                    Standards for products
                                    & services</p>
                            </>
                        }
                        card2content={
                            <>
                                <h3>+2465</h3>
                                <p>Registrations</p>
                            </>
                        }
                        card3content={
                            <>
                                <h3>14</h3>
                                <p>County partners</p>
                            </>
                        }
                        card4content={
                            <>
                                <h3>522</h3>
                                <p>Watch Parties Attendance</p>
                            </>
                        }
                        card5content={
                            <>
                                <h3>64</h3>
                                <p>Watch Parties Attendance</p>
                            </>
                        }
                        card6content={
                            <>
                                <h3>63/17</h3>
                                <p>Speakers Countries</p>
                            </>
                        }

                    />
                </div>
                <div>
                    <div className="lg:px-[270px] sm:px-0">
                    <PreviousConference
                        year={
                            <span className="text-dark">2021</span>
                        }
                        conferenceyear={
                            <span className="">2021 Gallery</span>
                        }
                        card1content={
                            <>
                                <h3>+1583</h3>
                                <p>Registartion</p>
                            </>
                        }
                        card2content={
                            <>
                                <h3>8</h3>
                                <p>Country Partners</p>
                            </>
                        }
                        card3content={
                            <>
                                <h3>375</h3>
                                <p>Watch Parties <br />Attendance</p>
                            </>
                        }
                        card4content={
                            <>
                                <h3>42</h3>
                                <p>Watch Parties <br /> Attendance</p>
                            </>
                        }
                        card5content={
                            <>
                                <h3>39/12</h3>
                                <p>Speakers Countries</p>
                            </>
                        }


                    />
                </div>
                </div>
                <div className="bg-primary">
                    <div className="lg:px-[270px] sm:px-0">
                    <PreviousConference
                        year={
                            <span className="text-white">2020</span>
                        }
                        conferenceyear={
                            <>2020 Gallery</>
                        }
                        card1content={
                            <>
                                <h3>6300</h3>
                                <p>Registartion</p>
                            </>
                        }
                        card2content={
                            <>
                                <h3>8</h3>
                                <p>Country partners</p>
                            </>
                        }
                        card3content={
                            <>
                                <h3>302</h3>
                                <p>Watch Parties <br />Attendance</p>
                            </>
                        }
                        card4content={
                            <>
                                <h3>302</h3>
                                <p>Watch Parties <br />Attendance</p>
                            </>
                        }
                        card5content={
                            <>
                                <h3>27/14</h3>
                                <p>Speakers Countries</p>
                            </>
                        }
                    />
                </div>
                </div>
                <div className="mt-10 py-10 text-center">
                    <h2 className="text-5xl">Other Meetings & conferences</h2>
                    <p className="mt-10 mb-12">The organization has organized similar meetings and conferences in the previous years</p>
                    <div className="flex justify-center">
                    <div className="grid grid-cols-3 lg:gap-[100px]">
                        <div>
                            <img src="assets/img/conferencelogo.png" alt="Inclusive Africa Logo" />
                        </div>
                        <div>
                            <img src="assets/img/conferencelogo.png" alt="Inclusive Africa Logo" />
                        </div>
                        <div>
                            <img src="assets/img/conferencelogo.png" alt="Inclusive Africa Logo" />
                        </div>
                    </div>
                    </div>
                </div>
            
            </Layout>
        </>
    )
}