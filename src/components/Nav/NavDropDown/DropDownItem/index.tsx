type DropDownItemProps = {
  name: string;
  href: string;
  className?: string
};

export default function DropDownItem({ name, href, className="" }: DropDownItemProps) {
  return (
    <>
      <li role="menuitem" className={className}>
        <a href={href} className="text-primary block px-4 py-2">
          {name}
        </a>
      </li>
    </>
  );
}
