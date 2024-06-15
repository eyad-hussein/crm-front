import { StaticImageData } from "next/image";
import Link from "next/link";

interface UsersNavBarIconLinkProps {
  href: string;
  icon: StaticImageData;
}

export default function UsersNavBarIconLink({
  icon,
  href,
}: UsersNavBarIconLinkProps) {
  return (
    <Link href={href} className='w-6 h-6'>
      <img src={icon.src} alt='icon' className='max-h-full' />
    </Link>
  );
}
