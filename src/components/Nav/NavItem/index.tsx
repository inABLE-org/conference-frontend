export type NavItemProps = {
  name: string;
  href: string;
  className?: string;
};

export default function NavItem({ name, href, className }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className={`flex lg:inline-flex my-5 lg:my-0 ${className}`}
      >
        {name}
      </a>
    </li>
  );
}
