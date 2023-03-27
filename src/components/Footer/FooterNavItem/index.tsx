import { NavItemProps } from "@/components/Nav/NavItem";

export default function FooterNavItem({ name, href, className }: NavItemProps) {
  return (
    <li className="my-3">
      <a href={href} className={`hover:underline ${className}`}>
        {name}
      </a>
    </li>
  );
}
