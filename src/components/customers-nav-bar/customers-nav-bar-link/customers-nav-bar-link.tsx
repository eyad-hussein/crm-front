import Link from "next/link";
import { StaticImageData } from "next/image";

interface CustomersNavBarLinkProps {
  href: string;
  icon: StaticImageData;
  name: string;
}

export default function CustomersNavBarLink({
  href,
  icon,
  name,
}: CustomersNavBarLinkProps) {
  return (
    <Link href={href} className='flex justify-between items-center w-full'>
      <img src={icon.src} alt='icon' className='h-5 w-5 mr-5' />
      <span className='mr-auto'>{name}</span>
    </Link>
  );
}
