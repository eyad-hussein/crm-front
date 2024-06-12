import { StaticImageData } from "next/image";
import CustomersNavBarLink from "../customers-nav-bar-link/customers-nav-bar-link";

interface CustomersNavBarItemProps {
  href: string;
  icon: StaticImageData;
  name: string;
  active?: boolean;
}

export default function CustomersNavBarItem({
  href,
  icon,
  name,
  active = false,
}: CustomersNavBarItemProps) {
  let classes = "w-full list-none py-5 px-10";
  classes += active ? " text-primary-light" : "";
  return (
    <li className={classes}>
      <CustomersNavBarLink name={name} icon={icon} href={href} />
    </li>
  );
}
