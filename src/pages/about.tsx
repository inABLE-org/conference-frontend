import ImpactsCard from "@/components/CTACard/Impactscard"
import Layout from "@/components/Layout"
import TwoTabs from "@/components/Tabs/TwoTabs"
export default function About()
{
    return(
        <>
        <Layout>
            <div className="bg-primary grid grid-cols-1 md:grid-cols-2 py-10">
                <div className="mt-5">
                    <h1 className="text-center text-white fw-semibold">The Annual <br></br>Inclusive Africa <br></br>Conference</h1>
                </div>
                <div>
                    <p className="text-white text-start">To take digital accessibility and assistive technology in Africa to the next level, inABLE <br></br>has begun organizing the fourth annual Inclusive Africa Conference scheduled on <br></br>May 29 – 31, 2023 in Nairobi, Kenya, and virtually. The agenda discussions will focus <br></br>on promoting the advancement of digital accessibility and assistive technology for persons with disabilities in Africa.</p>
                </div>
            </div>
            <TwoTabs
            linkOne={<span className="text-white">About The Organizer</span>}
            linkTwo={<span className="text-white">About the Previous Conference</span>}
            tab1content={
                  <div className="bg-body">
                    <h1 className="my-10">Organizer</h1>
                    <p className="text-start mx-10 px-10">inABLE.org was established in 2009 to address the urgent need to connect blind and low-vision students to the rest of the world by breaking down <br></br> the barriers to communication, education and employment. The priority was the creation of a computer-assistive-technology program for blind <br></br>and low-vision youth in Kenya to provide digital skills training to the disadvantaged youth. </p>
                    <h2>Inables Impact</h2>
                    <div className="container grid sm:grid-cols-2 xl:grid-cols-4 mx-auto gap-6 my-16">
                        <ImpactsCard
                        number="8"
                        title= <>Computer <br></br>Technology</>
                        description=<>
                        Established eight (8) assistive
                         computer technology labs in
                         <br></br>six (6) special schools for the
                          <br></br>
                           blind.  
                        </>
                        />

                    </div>
                  </div>
                  
            }
            tab2Content =
            {
                     <div></div>
            }
            
            />
        </Layout>
        
        </>
    )
}