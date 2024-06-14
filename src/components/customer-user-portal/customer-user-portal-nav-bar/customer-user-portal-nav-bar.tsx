import { CustomerUserPortalTabType } from "@/enums";

interface CustomerUserPortalNavBarProps {
  currentTab: CustomerUserPortalTabType;
  setCurrentTab: (tab: CustomerUserPortalTabType) => void;
}

export default function CustomerUserPortalNavBar({
  currentTab,
  setCurrentTab,
}: CustomerUserPortalNavBarProps) {
  return (
    <nav className='flex justify-between items-center text-center'>
      {Object.values(CustomerUserPortalTabType).map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className={`w-full py-2 border-b border-slate-200 ${
            tab === currentTab ? "text-blue-500" : ""
          }`}>
          {tab}
        </button>
      ))}
    </nav>
  );
}
