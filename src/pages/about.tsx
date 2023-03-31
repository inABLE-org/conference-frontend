import ImpactsCard from "@/components/CTACard/Impactscard"
import Layout from "@/components/Layout"
import ImpactSection from "@/components/Sections/ImpactSection"
import RelevanceCard from "@/components/Cardutilities/RelevanceCard"
import TwoTabs from "@/components/Tabs/TwoTabs"
import Conferencecard from "@/components/Cardutilities/Conferencecard"
import PreviousConference from "@/components/Sections/PreviousConference"
export default function About() {
    return (
        <>
            <Layout>


                <TwoTabs
                    linkOne={<span className="text-white">About The Organizer</span>}
                    linkTwo={<span className="text-white">About the Previous Conference</span>}
                    tab1content={
                        <div className="bg-body">
                            <h1 className="my-10">Organizer</h1>
                            <p className="text-start mx-10 px-10">inABLE.org was established in 2009 to address the urgent need to connect blind and low-vision students to the rest of the world by breaking down <br></br> the barriers to communication, education and employment. The priority was the creation of a computer-assistive-technology program for blind <br></br>and low-vision youth in Kenya to provide digital skills training to the disadvantaged youth. </p>
                            <h2 className="">Inables Impact</h2>
                            <ImpactSection />
                        </div>
                    }
                    tab2Content=
                    {
                        <div></div>
                    }

                />

                <h2>Relevance</h2>
                <RelevanceCard
                    impactname={
                        <div className="col-span-1 bg-primary text-white text-center py-10 text-3xl">
                            <h3>Covid 19 <br /> impact on <br />PwD</h3>
                        </div>
                    }
                    impactdescription={
                        <div className="col-span-4 p-10 bg-white">
                            <p className="ml-10">The failure to provide accessible products and services in education, employment, financial
                                <br />services and other sectors is a global issue. During the COVID-19 pandemic, people were asked
                                <br />to stay home and go online to access vital public health information, work-from-home, and <br />
                                remote education. This magnified the inequalities and alienation that prevent inclusion and
                                <br />protection of PWDs. For many of the estimated 300 million Persons with Disabilities (PWDs) in
                                <br />Africa, digital services and products are just not usable. They were never designed with their
                                <br /> diverse needs in mind. Today, more than any other time, digital accessibility urgently needs to
                                <br /> be addressed, which is why inABLE organizes the Annual Inclusive Africa Conference in the first place.</p>
                        </div>
                    } />
                <RelevanceCard
                    impactname={
                        <div className="col-span-1 bg-primary text-white text-center py-10">
                            <h3 className="text-3xl">UNCRPD</h3>
                            <p className="mt-3">(UN Convention on the<br />Rights of Persons with <br />disabilities)</p>
                        </div>
                    }
                    impactdescription={
                        <div className="col-span-4 p-10 bg-white">
                            <p>The UN Convention on the Rights of Persons with disabilities addresses accessibility in its
                                <br />resolution adopted by the General Assembly in 1993 by recognizing “the importance of
                                <br /> accessibility to the physical,social, economic and cultural environment, to health and
                                <br />education and to information and communication, in enabling persons with disabilities to fully
                                <br />enjoy all human rights and fundamental freedoms.”</p>
                        </div>
                    } />
                <RelevanceCard
                    impactname={
                        <div className="col-span-1 bg-primary text-white text-center py-10">
                            <h3 className="text-3xl">SDG</h3>
                        </div>
                    }
                    impactdescription={
                        <div className="col-span-5 p-10 bg-white">
                            The failure to provide accessible products and services in education, employment, financial
                            <br />services and other sectors is a global issue. During the COVID-19 pandemic, people were
                            <br />asked to stay home and go online to access vital public health information, work-from-home,
                            <br />and remote education. This magnified the inequalities and alienation that prevent inclusion
                            <br />and protection of PWDs. For many of the estimated 300 million Persons with Disabilities
                            <br />(PWDs) in Africa, digital services and products are just not usable. They were never designed
                            <br /> with their diverse needs in mind. Today, more than any other time, digital accessibility
                            <br />urgently needs to be addressed, which is why inABLE organizes the Annual Inclusive Africa
                            <br />Conference in the first place.
                        </div>
                    } />
                <h3 className="text-5xl">Impact</h3>
                <p className="text-start ml-12 w-full lg:w-2/3 xl:w-1/2 lg:pl-8 xl:pl-12">Since the first Inclusive Africa Conference in 2020, the purpose of this annual event is to promote the advancement of digital accessibility and
                    assistive technology for persons with disabilities in Africa. Over the last three years this event has created a platform for disability and
                    accessibility experts, people with lived experiences, policy makers, researchers, innovators, entrepreneurs, businesses, governments and others to
                    share knowledge and created awareness across Africa about the importance of leaving no one behind. The discussions include employment,
                    education innovations and more. The event has also received global attention through sponsorships and partnerships with global tech leaders,
                    influential keynote speakers, and disability leaders throughout Africa.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="mt-12 py-12 text-center">
                        <h3>Objectives</h3>
                        <p>Since the first Inclusive Africa Conference in 2020, the
                            purpose of this annual event is to promote the
                            advancement of digital accessibility and assistive
                            technology for persons with disabilities in Africa. Over the
                            last three years this event has created a platform for
                            disability and assistive technology for persons with
                            disabilities in Africa. Over the last three years this event
                            has created a platform for disability </p>
                        <img src="assets/img/spiner.png" />
                    </div>
                    <div>
                        <RelevanceCard
                            impactname={
                                <div className="col-span-1 bg-secondary text-white">
                                    01
                                </div>
                            }
                            impactdescription={
                                <div className="col-span-4">
                                    Ensure that African youth with disabilities are at the centre of
                                    digital accessibility conversations. By provide a forum
                                    for disability rights and support groups across Africa to bring PWDs
                                    <br /> to the centre of inclusive design and digital accessibility.
                                </div>
                            }
                        />
                        <RelevanceCard
                            impactname={
                                <div className="col-span-1 bg-secondary text-white py-auto">
                                    02
                                </div>
                            }
                            impactdescription={
                                <div className="col-span-4">
                                    Share regional and global best practices in implementing accessibility standards and policies and influence delegates to become accessibility ambassadors and lead the development of: Accessible ICT policies, solutions, and products anchored under the universal/inclusive design guidelines so that PWDs can participate in and benefit from the digital economy.
                                </div>
                            }
                        />
                        <RelevanceCard
                            impactname={
                                <div className="col-span-1 bg-secondary text-white">
                                    03
                                </div>
                            }
                            impactdescription={
                                <div className="col-span-4">
                                    Focus attention on the best way forward for implementing accessibility of digital products and services in Africa and increase public awareness for the needs and rights of PWDs to access digital information.
                                </div>
                            }
                        />
                        <RelevanceCard
                            impactname={
                                <div className="col-span-1 bg-secondary text-white">
                                    04
                                </div>
                            }
                            impactdescription={
                                <div className="col-span-4">
                                    Highlight assistive technology innovations in Africa and create a platform to share knowledge and expertise on product design and go to market, mentorship and funding opportunities. Award the annual Inclusive Africa Innovations winner.
                                </div>
                            }
                        />
                        <RelevanceCard
                            impactname={
                                <div className="col-span-1 bg-secondary text-white">
                                    05
                                </div>
                            }
                            impactdescription={
                                <div className="col-span-4">
                                    Demonstrate inclusive events’ "best-practices", including attendees with lived experience, interpreters, and captioners.
                                </div>
                            }
                        />
                    </div>
                </div>
                <h4 className="text-5xl font-semibold">About Previous Conferences</h4>
                <div className="bg-primary">
                    <PreviousConference />
                </div>
                <div>
                    <PreviousConference />
                </div>
                <div className="bg-primary">
                    <PreviousConference />
                </div>
                <div className="mt-10 py-10 text-center">
                    <h2 className="text-5xl">Other Meetings & conferences</h2>
                    <p className="mt-10">The organization has organized similar meetings and conferences in the previous years</p>
                    <div className="grid grid-cols-3 gap-1">
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

            </Layout>
        </>
    )
}