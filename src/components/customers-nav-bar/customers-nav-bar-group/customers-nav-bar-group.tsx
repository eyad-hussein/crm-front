import CustomersNavBarItem from "../customers-nav-bar-item/customers-nav-bar-item";
import dashboardIcon from "../../../../public/assets/images/icons/dashboard.png";
import userProfileIcon from "../../../../public/assets/images/icons/profile-user.png";

export default function CustomersNavBarGroup() {
  return (
    <div className='flex flex-col'>
      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={dashboardIcon}
        name='Dashboard'
      />

      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Prospects'
      />

      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Contacts'
      />

      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Follow Ups'
      />
      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Proposals'
      />
      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Closures'
      />
    </div>
  );
}
