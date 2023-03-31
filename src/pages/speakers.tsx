import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from 'react'
import CustomImage from "@/components/CustomImage";
import Speaker from "@/components/Cardutilities/Speaker";
import { Fetcher } from "@/utils/fetcher";
import TwoTabs from "@/components/Tabs/TwoTabs";



type Speaker = {
  id: string;
  first_name: string;
  second_name: string;
  organization: string;
  role: string;
  Country: string
  key_note: Boolean;
  photo: {
    id: string,
  }
};

export default function Speakers() {
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.back();
  }
  const [speakers, setSpeakers] = useState<Speaker[]>([])
  const fetchSpeakers = async () => {
    try {
      const data: any = await Fetcher(dataQuery);
      setSpeakers(data.conference_speakers);
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    (async () => await fetchSpeakers())();
  }, [])
  const dataQuery = `query 
  {
      conference_speakers
      {
          id
          first_name
          second_name
          organization
          key_note
          role
          Country
          photo
          {
              id   
          }
      }
      
  }`;
  return (
    <>
      <Layout>
          <div className="bg-primary pb-5">
            <button onClick={handleBackButtonClick} className="text-white mx-10 text-xl">
              <ArrowLeftIcon
                className="mx-4 h-5 w-5 inline-flex stroke-[2.5] text-white"
                stroke="currentColor"
              />
              Go back</button>
            <h1 className="text-center mt-5 mb-8 text-white text-6xl pb-5">
              <span className="border-b-6 border-secondary">Speakers</span>
            </h1>
            <p className="text-center text-white mx-7">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              <br></br>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
          <TwoTabs 
          linkOne={<span className="text-white">All Speakers</span>}
          linkTwo={<span className="text-white">Keynote Speakers</span>}
          tab1content = {
          <div className="container grid sm:grid-cols-2 xl:grid-cols-4 mx-auto gap-6 my-0 py-16">
          {speakers.map((speaker: Speaker) => (
            <div key={speaker.id}>
              <Speaker 
              name={speaker.first_name + " "+speaker.second_name}
              role={speaker.role} 
              organization={speaker.organization} 
              country = {speaker.Country}
              imgsource={`https://cms.inclusiveafrica.org/assets/${speaker.photo.id}:`} />
            </div>
          ))}
        </div>
         }
        tab2Content={
          <div className="container grid sm:grid-cols-2 xl:grid-cols-4 mx-auto gap-6 my-0 py-16" >
              {speakers.filter(speaker => speaker.key_note).map((speaker: Speaker) => (
                <div key={speaker.id}>
                  <Speaker  
                  name={speaker.first_name+" " +speaker.second_name}
                  role ={speaker.role}
                  organization={speaker.organization}
                  country = {speaker.Country}
                  imgsource={`https://cms.inclusiveafrica.org/assets/${speaker.photo.id}:`} />
                </div>
              ))}
            </div>
        }
         />   
      </Layout>
    </>
  )
}