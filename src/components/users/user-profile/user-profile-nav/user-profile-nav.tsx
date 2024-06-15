import { UserProfileNavItemType } from "@/enums";

interface UserProfileNavProps {
  currentTab: UserProfileNavItemType;
  setCurrentTab: (tab: UserProfileNavItemType) => void;
}

export default function UserProfileNav({
  currentTab,
  setCurrentTab,
}: UserProfileNavProps) {
  return (
    <nav className='flex justify-between items-center text-center'>
      {Object.values(UserProfileNavItemType).map((item, index) => (
        <button
          key={index}
          className={`w-full py-2 border-b border-slate-200 ${
            item === currentTab ? "text-primary" : ""
          }`}
          onClick={() => setCurrentTab(item)}>
          {item}
        </button>
      ))}
    </nav>
  );
}
