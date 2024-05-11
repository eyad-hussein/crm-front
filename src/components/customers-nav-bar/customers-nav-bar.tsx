import CustomersNavBarGroup from "./customers-nav-bar-group/customers-nav-bar-group";
import UserProfile from "../user-profile/user-profile";
import profilePic from "../../../public/assets/images/images/IMG_0003.jpg";

export default function CustomersNavBar() {
  return (
    <nav className='flex flex-col justify-between bg-slate-50 max-w-min'>
      <img
        src='/assets/images/logos/alpha-creative-logo-blue.jpg'
        alt='alpha craetive logo'
        className='min-w-52'
      />

      <CustomersNavBarGroup />

      <UserProfile icon={profilePic} name='Eyad' email='eyad@gmail.com' />
    </nav>
  );
}
