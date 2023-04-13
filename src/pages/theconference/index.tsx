import Layout from "@/components/Layout";
import ImpactSection from "./sections/impactsection";
import RelevanceCard from "@/components/Cardutilities/RelevanceCard";
import ObjectiveCard from "@/components/Cardutilities/Objectivecard";
import { useState } from "react";
import PreviousConference from "./sections/previousconferences";
export default function About() {
    const [openTab, setOpenTab] = useState(1);
    return (
        <>
            <Layout>
                <div className="w-100 bg-gradient-to-b from-primary to-primary-1">
                    <div className="sm:px-0">
                        <div className="container flex flex-wrap">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                <div>
                                    <h1 className="text-white text-5xl text-start font-semibold py-8">
                                        The Annual <br />  Inclusive Africa <br /> Conference
                                    </h1>
                                </div>
                                <div>
                                    <p className="text-white font-medium lg:-ml-20  py-8 text-base leading-29">To take digital accessibility and assistive technology in Africa to the next level, inABLE has begun organizing the fourth annual <a className="underline" href="https://inclusiveafrica.org/">Inclusive Africa Conference </a>scheduled on May 29 – 31, 2023 in Nairobi, Kenya, and virtually. The agenda discussions will focus on promoting the advancement of digital accessibility and assistive technology for persons with disabilities in Africa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-white pt-1 pb-3">
                            <div className="flex flex-col items-center justify-center ">
                                <ul className="lg:flex md:flex">
                                    <li className="text-center">
                                        <a href="#organizer" onClick={() => setOpenTab(1)} className={` text-xl font-normal ${openTab === 1 ? "border-b-4 border-secondary  mx-3" : ""} inline-block px-4 py-2`}>
                                            The organizer
                                        </a>
                                    </li>
                                    <li className="text-center">
                                        <a href="#conference" onClick={() => setOpenTab(2)} className={`text-xl font-normal ${openTab === 2 ? "border-b-4 border-secondary  mx-3" : ""} inline-block px-4 py-2`}>
                                            About the Conference
                                        </a>
                                    </li>
                                    <li className="text-center">
                                        <a href="#previous" onClick={() => setOpenTab(3)} className={`text-xl font-normal ${openTab === 3 ? "border-b-4 border-secondary  mx-3" : ""} inline-block px-4 py-2`}>
                                            About Previous Conference
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="organizer" className={`${openTab === 1}`}>
                        <div className="container">
                            <h1 className="mb-8 mt-10 text-5xl font-semibold font-semibold text-4xl">
                                Organizer
                            </h1>
                            <p className="text-start font-medium">
                                <a href="https://inable.org/" className="underline">inABLE.org </a>was established in 2009 to address the urgent need to
                                connect blind and low-vision students to the rest of the world by
                                breaking down the barriers to communication, education and employment.
                                The priority was the creation of a computer-assistive-technology
                                program for blind and low-vision youth in Kenya to provide digital
                                skills training to the disadvantaged youth.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <h2 className="mt-8 text-[32px] font-semibold">InABLE's Impact</h2>
                        <ImpactSection />
                    </div>
                </div>
                <div className="container" id="conference">
                    <h2 className="text-5xl font-semibold mb-8 mt-5">
                        Relevance
                    </h2>
                    <RelevanceCard
                        impactname={
                            <h3 className="text-4xl py-8 ml-8 font-semibold">
                                Covid 19 <br />impact on <br /> PwD
                            </h3>
                        }
                        impactdescription={
                            <p className="ml-16 mr-8 py-2">
                                The failure to provide accessible products and services in
                                education, employment, financial services and other sectors is a
                                global issue. During the COVID-19 pandemic, people were asked to
                                stay home and go online to access vital public health information,
                                work-from-home, and <a className="underline decoration-2" href="https://www.pd.co.ke/news/remote-learning-discriminatory-to-children-with-special-needs-47329/">remote education</a>. This magnified the
                                inequalities and alienation that prevent <a className="underline decoration-2" href="https://inable.org/2020/07/21/inclusive-education-leads-to-future-opportunities/">Inclusion </a> and protection
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
                            <h3 className="text-4xl px-9 py-6">
                                <span className="font-semibold">UNCRPD</span><br />
                                <span className="text-xl">
                                    (UN Convention on the <br />Rights of Persons with disabilities)
                                </span>
                            </h3>
                        }
                        impactdescription={
                            <p className="ml-16 mr-8 mt-3">
                                The <a className="underline decoration-2" href="https://www.un.org/disabilities/documents/accessibility_and_development_june2013.pdf">UN Convention on the Rights of Persons with disabilities </a>
                                addresses accessibility in its resolution adopted by the <a className="underline decoration-2" href="http://www.un-documents.net/a48r96.htm">General Assembly </a>
                                in 1993 by recognizing “the importance of accessibility
                                to the physical,social, economic and cultural environment, to
                                health and education and to information and communication, in
                                enabling persons with disabilities to fully enjoy all human rights
                                and fundamental freedoms.”
                            </p>
                        }
                    />
                    <RelevanceCard
                        impactname={<h3 className="text-5xl py-8 ml-8 text-5xl font-semibold">SDG</h3>}
                        impactdescription={
                            <span className="py-5">
                                <p className="ml-16 mr-8">
                                    Goal 10 of the SDGs aims to ensure equal opportunity and reduced
                                    inequalities for all by 2030, to empower and promote the social,
                                    economic and political inclusion of all, irrespective of age,
                                    sex, disability, race, ethnicity, origin, religion or economic
                                    or other status.
                                </p>
                                <p className="ml-16 mr-8 mt-3">
                                    During this Post- Covid period, how do we take advantage of the
                                    lesson learned in the last three years to ensure that no one is
                                    left behind?
                                </p>
                            </span>
                        }
                    />
                </div>
                <div className="container">
                    <h3 className="text-5xl font-semibold  my-5 mt-20">Impact</h3>
                    <p className="text-start font-medium">
                        Since the first Inclusive Africa Conference in 2020, the purpose of
                        this annual event is to promote the advancement of digital
                        accessibility and assistive technology for persons with disabilities in Africa. Over the
                        last three years this event has created a platform for disability
                        and accessibility experts, people with lived experiences, policy
                        makers, researchers, innovators, entrepreneurs, businesses,
                        governments and others to share knowledge and created awareness
                        across Africa about the importance of leaving no one behind. The
                        discussions include employment, education innovations and more. The event has also received global
                        attention through sponsorships and partnerships with global tech
                        leaders,influential keynote speakers, and disability leaders throughout Africa.
                    </p>
                </div>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-20">
                        <div className="">
                            <h3 className="text-5xl font-semibold">Objectives</h3>
                            <p className="mb-5 mt-8">
                                Since the first Inclusive Africa Conference in 2020, the <br /> purpose
                                of this annual event is to promote the <br />advancement of digital
                                accessibility and assistive< br />technology for persons with
                                disabilities in Africa. Over the <br /> last three years this event has
                                created a platform for <br />disability and assistive technology for
                                persons with <br />disabilities in Africa. Over the last three years
                                this event <br /> has created a platform for disability
                            </p>
                            <img className="mt-16 pt-16" src="../assets/img/spiner.png" />
                        </div>
                        <div >
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
                <PreviousConference />
                <div className="mt-10 py-10 text-center">
                    <h2 className="text-5xl font-semibold">Other Meetings & conferences</h2>
                    <p className="mt-10 mb-12 text-xl">
                        The organization has organized similar meetings and conferences in the
                        previous years
                    </p>
                    <div className="flex justify-center py-10">
                        <div className="grid gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            <div className="mb-4">
                                <img
                                    src="../assets/img/conferencelogo.png"
                                    alt="Inclusive Africa Logo"
                                />
                            </div>
                            <div className="mb-4">
                                <img
                                    src="../assets/img/conferencelogo.png"
                                    alt="Inclusive Africa Logo"
                                />
                            </div>
                            <div>
                                <img
                                    src="../assets/img/conferencelogo.png"
                                    alt="Inclusive Africa Logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
