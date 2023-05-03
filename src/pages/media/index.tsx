import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Tabs from "@/components/Tabs";
import TabPanel from "@/components/Tabs/TabPanel";
import { useRouter } from "next/router";
import PressList from "@/components/PressList";
import NewsLinks from "@/components/NewsLinks";
import Album from "@/components/Album";

export type DirectusFile = {
  id: string;
  title: string;
  type: string;
};

export default function Agenda() {
  const router = useRouter();
  const { media, album = "", year = "" } = router.query;
  let default_tab = Number(media);

  const default_album = {
    album: String(album),
    year: String(year),
  };

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (
      typeof default_tab === "number" &&
      default_tab >= 0 &&
      default_tab <= 2
    ) {
      setActiveTab(default_tab);
    }
  }, [default_tab]);

  return (
    <>
      <Layout pageTitle="Media">
        <div className="bg-gradient-to-b from-primary to-primary-1 pt-10 pb-4 text-white">
          <div className="container">
            <div className="mb-12">
              <PageTitle title="Media" />
            </div>
            <Tabs
              tabList={["Press Releases", "News Links", "Photo Album"]}
              className="text-center flex flex-col lg:flex-row mx-auto space-x-9 space-y-9 lg:space-y-0 justify-center text-xl"
              onTabSwith={setActiveTab}
              selectedTab={activeTab}
            />
          </div>
        </div>
        <TabPanel className="container pt-24 pb-28" activeTab={activeTab}>
          {activeTab === 0 && <PressList />}
          {activeTab === 1 && <NewsLinks />}
          {activeTab === 2 && <Album {...default_album} />}
        </TabPanel>
      </Layout>
    </>
  );
}
