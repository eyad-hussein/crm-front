import { CustomerUserPortalTabType } from "@/enums";

interface CustomerUserPortalNavBarProps {
  setCurrentTab: (tab: CustomerUserPortalTabType) => void;
}

export default function CustomerUserPortalNavBar({
  setCurrentTab,
}: CustomerUserPortalNavBarProps) {
  return (
    <nav className='flex justify-between items-center text-center'>
      {Object.values(CustomerUserPortalTabType).map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className='w-full py-2 border-b border-slate-200'>
          {tab}
        </button>
      ))}
    </nav>
  );
}
