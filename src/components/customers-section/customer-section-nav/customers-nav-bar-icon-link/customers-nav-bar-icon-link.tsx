import { StaticImageData } from "next/image";
import Link from "next/link";

interface CustomersNavBarIconLinkProps {
  href: string;
  icon: StaticImageData;
}

export default function CustomersNavBarIconLink({
  icon,
  href,
}: CustomersNavBarIconLinkProps) {
  return (
    <Link href={href} className='w-6 h-6 mr-4'>
      <img src={icon.src} alt='icon' className='max-h-full' />
    </Link>
  );
}
