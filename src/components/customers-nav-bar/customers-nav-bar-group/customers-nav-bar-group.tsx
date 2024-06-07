import CustomersNavBarItem from "../customers-nav-bar-item/customers-nav-bar-item";
import dashboardIcon from "../../../../public/assets/images/icons/dashboard.png";
import userProfileIcon from "../../../../public/assets/images/icons/profile-user.png";

const CustomersNavBarItems = [
  {
    href: "/customers/dashboard",
    icon: dashboardIcon,
    name: "Dashboard",
    endpoint: "dashboard",
  },
  {
    href: "/customers/prospects",
    icon: userProfileIcon,
    name: "Prospects",
    endpoint: "prospects",
  },
  {
    href: "/customers/contacts",
    icon: userProfileIcon,
    name: "Contacts",
    endpoint: "contacts",
  },
  {
    href: "/customers/follow-ups",
    icon: userProfileIcon,
    name: "Follow Ups",
    endpoint: "follow-ups",
  },
  {
    href: "/customers/proposals",
    icon: userProfileIcon,
    name: "Proposals",
    endpoint: "proposals",
  },
  {
    href: "/customers/closures",
    icon: userProfileIcon,
    name: "Closures",
    endpoint: "closures",
  },
];

interface CustomersNavBarGroupProps {
  status: string;
}

export default function CustomersNavBarGroup({
  status,
}: CustomersNavBarGroupProps) {
  return (
    <div className='flex flex-col'>
      {CustomersNavBarItems.map((item, index) => (
        <CustomersNavBarItem
          key={index + item.name}
          href={item.href}
          icon={item.icon}
          name={item.name}
          active={status === item.endpoint}
        />
      ))}
      {/* <CustomersNavBarItem
        href='/customers/dashboard'
        icon={dashboardIcon}
        name='Dashboard'
      />

      <CustomersNavBarItem
        href='/customers/prospects'
        icon={userProfileIcon}
        name='Prospects'
      />

      <CustomersNavBarItem
        href='/customers/contacts'
        icon={userProfileIcon}
        name='Contacts'
      />

      <CustomersNavBarItem
        href='/customers/follow-ups'
        icon={userProfileIcon}
        name='Follow Ups'
      />
      <CustomersNavBarItem
        href='/customers/proposals'
        icon={userProfileIcon}
        name='Proposals'
      />
      <CustomersNavBarItem
        href='/customers/closures'
        icon={userProfileIcon}
        name='Closures'
      /> */}
    </div>
  );
}
