type GeneralInformationProps = {
  title: string;
  children: React.ReactNode;
};

export default function GeneralInformation({
  title,
  children,
}: GeneralInformationProps) {
  return (
    <div className="mb-12">
      <h2 className="font-semibold text-32px mb-4">{title}</h2>
      <div className="text-xl space-y-3">{children}</div>
    </div>
  );
}
