import ImageCard from "@/components/Cardutilities/Speaker";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layout";
import { Fetcher } from '@/utils/fetcher';
import { GraphQLClient, gql } from 'graphql-request'
import React, { Suspense, useEffect, useState } from 'react'
import Speaker from "@/components/Cardutilities/Speaker";

interface SpeakersData {
  conference_speakers: Speaker[];
}

type Speaker = {
  id: string;
  first_name: string;
  last_name: string;
  organization: string;
  role:string;
  photo:{
    id: string, 
  }
};

const endpoint = 'https://cms.inclusiveafrica.org/graphql';
const token = '3NVo0u59bpr2K8h1O7bNraNpsW8b';
const headers = {
  authorization: `Bearer ${token}`,
};
const query = `query 
{
	conference_speakers
	{
		id
		first_name
		second_name
		organization
		role
		photo
		{
			id
			
		}
	}
	
}`;

export async function fetchData(): Promise<Speaker[]> {
  const client = new GraphQLClient(endpoint, { headers });
  const data: SpeakersData = await client.request(query);
  return data.conference_speakers;
}
export default function Speakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  useEffect(() => {
    async function getData() {
      const fetchedspeakers = await fetchData();
      setSpeakers(fetchedspeakers);
    }
    getData();
  }, []);

  return (
    <>
      <Layout>
        <div>
          <div className="bg-primary  mb-4 pb-5">

            <button className="text-white mx-10 text-xl">
              <ArrowLeftIcon
                className="mx-4 h-5 w-5 inline-flex stroke-[2.5] text-white"
                stroke="currentColor"
              />
              Go back</button>
            <h1 className="text-center mt-6 mb-5 text-white text-6xl pb-5">
              <span className="border-b-4 border-secondary">Speakers</span>
            </h1>
            <p className="text-center text-white mx-7">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              <br></br>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
        
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mb-6 ml-8 ml-8 gap-2 px-5 mt-12 pt-10">
            {speakers.map((speaker: Speaker) => (
              <div key={speaker.id} className="mx-5 ">
                <Speaker name={speaker.first_name} imgsource={`https://cms.inclusiveafrica.org/assets/${speaker.photo.id}:`} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}