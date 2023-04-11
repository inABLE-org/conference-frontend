export type NavItemProps = {
  name: string;
  href: string;
  className?: string;
  current?: Boolean;
};

export default function NavItem({
  name,
  href,
  className,
  current,
}: NavItemProps) {
  return (
    <li
      className={`py-2 px-1 ${current ? "border-b-3 border-secondary-1" : ""}`}
    >
      <a
        href={href}
        className={`flex lg:inline-flex my-5 lg:my-0 ${className}`}
      >
        {name}
      </a>
    </li>
  );
}
