import { CustomerUserPortalTabType } from "@/enums";
import Link from "next/link";

interface CustomerUserPortalNavBarProps {
  setCurrentTab: (tab: CustomerUserPortalTabType) => void;
}

export default function CustomerUserPortalNavBar({
  setCurrentTab,
}: CustomerUserPortalNavBarProps) {
  return (
    <nav className='flex justify-between items-center text-center'>
      <Link className='flex-1' href={"/"}>
        Activity Timeline
      </Link>
      <Link className='flex-1' href={"/"}>
        Notes
      </Link>
      <Link className='flex-1' href={"/"}>
        Tasks
      </Link>
      <Link className='flex-1' href={"/"}>
        Meetings
      </Link>
      <Link className='flex-1' href={"/"}>
        Deaks
      </Link>
    </nav>
  );
}
