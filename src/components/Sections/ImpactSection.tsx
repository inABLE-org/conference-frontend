import ImpactsCard from "../CTACard/Impactscard"
export default function ImpactSection()
{
    return(
        <>
         <div className="grid sm:grid-cols-2 xl:grid-cols-4  gap-6 my-16 sm:align-center">
                        <ImpactsCard
                        number="8"
                        title= {<>Computer <br></br>Technology</>}
                        description={<>
                        Established eight (8) assistive
                         computer technology labs in
                         <br></br>six (6) special schools for the
                          <br></br>
                           blind.  
                        </>
                        }
                        />
                         <ImpactsCard
                        number="14,500"
                        title=<>
                         Visually impaired <br /> Students & teachers
                        </>
                        description=<>
                        Enrolled over 14,500 blind and <br />visually impaired students and <br/>teachers
                        </>
                        />
                         <ImpactsCard
                        number="150"
                        title=<>
                        Assistive <br />Technology
                        </>
                        description=<>
                        Hired 150 assistive <br /> technology computer <br /> instructors.  
                        </>
                        />
                         <ImpactsCard
                        number="44,000"
                        title=<>
                        Assistive technology <br /> Training Hours
                        </>
                        description=<>
                        Provided more than 43,000 <br /> hours of assistive technology computer skills training
                        </>
                        />

                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-16 my-16">
                        <ImpactsCard
                        title=<>
                            Computer Labs for <br /> the Blind Program
                        </>
                        description=<>
                          currently in partnership with <br />schools for the blind in Siaya,<br />Thika, Meru and Mombasa counties
                        </>
                        />
                         <ImpactsCard
                        title=<>
                         Digital Accessibility <br /> Awareness
                        </>
                        description=<>
                            (Inclusive Africa Conference <br />and Advocacy) <br />Facilitated first-ever ICT <br />Accessibility Standard in Africa
                        </>
                        />
                         <ImpactsCard
                        title=<div className="py-5">
                            Digital Accessibility <br />Research and <br />Development
                        </div>
                        />
                         <ImpactsCard
                        title=<>
                        Assistive technology <br /> Training Hours
                        </>
                        description=<>
                        Provided more than 43,000 <br /> hours of assistive technology computer skills training
                        </>
                        />
                    </div>           
        </>
    )

}