import { useEffect, useState } from "react";

type TabProps = {
  tabList: string[];
  onTabSwith: any;
  selectedTab?: number;
  className?: string;
  labelledby?: string;
  label?: string;
  highlited?: number | undefined;
};

export default function Tabs({
  tabList,
  selectedTab = 0,
  className = "",
  labelledby = "",
  label = "",
  onTabSwith,
  highlited,
}: TabProps) {
  const [activeTab, setActiveTab] = useState(selectedTab);

  const updateActiveTab = (activeKey: number) => {
    setActiveTab(activeKey);
    onTabSwith(activeKey);
  };

  const switchTab = (e: any, currentTab: number) => {
    if (e.key === "ArrowRight") {
      currentTab++;
      const activeTab = currentTab >= tabList.length ? 0 : currentTab;
      document.getElementById(`tab-${activeTab}`)?.focus();
      updateActiveTab(activeTab);
      onTabSwith(activeTab);
    } else if (e.key === "ArrowLeft") {
      currentTab--;
      const activeTab = currentTab < 0 ? tabList.length - 1 : currentTab;
      document.getElementById(`tab-${activeTab}`)?.focus();
      updateActiveTab(activeTab);
    }
  };

  useEffect(() => {
    setActiveTab(selectedTab);
  }, [selectedTab]);

  return (
    <>
      <ul
        className={className}
        role={"tablist"}
        aria-labelledby={labelledby}
        aria-label={label}
      >
        {tabList.map((tab: string, key: number) => {
          return (
            <li
              role={"tab"}
              aria-selected={key === activeTab}
              aria-controls="tabPanel"
              tabIndex={key === activeTab ? 0 : -1}
              id={`tab-${key}`}
              key={key}
              className={`relative px-8 pb-1 hover:cursor-pointer ${
                key === activeTab ? "border-b-5 border-secondary-2" : ""
              }`}
              onKeyDown={(e) => switchTab(e, key)}
              onClick={() => updateActiveTab(key)}
            >
              {tab}
              {key === highlited && (
                <span className="text-sucess text-9xl inline-flex h-3 w-3 overflow-hidden bg-sucess rounded-full top-0 right-4 absolute">
                  .
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
