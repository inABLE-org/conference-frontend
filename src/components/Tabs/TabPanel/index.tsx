type TabPanelProps = {
  activeTab?: number;
  className?: string;
  children?: React.ReactNode;
};

export default function TabPanel({
  activeTab = 0,
  className,
  children,
}: TabPanelProps) {
  return (
    <>
      <div
        id="tabPanel"
        role={"tabpanel"}
        className={className}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        {children}
      </div>
    </>
  );
}
