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
        name='Follow Ups'
      />

      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Reserves'
      />
      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Prospect'
      />
      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Clients'
      />
      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Proposals'
      />
      <CustomersNavBarItem
        href='/customers/dashboard'
        icon={userProfileIcon}
        name='Proposals'
      />
    </div>
  );
}
