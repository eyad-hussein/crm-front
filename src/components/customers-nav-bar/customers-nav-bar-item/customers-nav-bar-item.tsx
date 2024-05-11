import { StaticImageData } from "next/image";
import CustomersNavBarLink from "../customers-nav-bar-link/customers-nav-bar-link";

interface CustomersNavBarItemProps {
  href: string;
  icon: StaticImageData;
  name: string;
}

export default function CustomersNavBarItem({
  href,
  icon,
  name,
}: CustomersNavBarItemProps) {
  return (
    <li className='w-full list-none py-5 px-10'>
      <CustomersNavBarLink name={name} icon={icon} href={href} />
    </li>
  );
}
