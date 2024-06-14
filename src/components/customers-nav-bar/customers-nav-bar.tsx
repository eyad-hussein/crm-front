import Image from "next/image";
import CustomersNavBarGroup from "./customers-nav-bar-group/customers-nav-bar-group";
import UserProfile from "../shared/user-profile/user-profile";
import alphaLogoBig from "@/public/assets/images/logos/alpha-creative-logo-blue.png";
import profilePic from "@/public/assets/images/images/IMG_0003.jpg";

export default function CustomersNavBar() {
  return (
    <nav className='flex flex-col justify-between bg-slate-50 w-[12%]'>
      <div className='flex justify-center items-stretch w-full min-h-40 px-8'>
        <Image
          src={alphaLogoBig}
          alt='alpha craetive logo'
          className='object-contain w'
        />
      </div>

      <CustomersNavBarGroup />

      <UserProfile icon={profilePic} name='Eyad' email='eyad@gmail.com' />
    </nav>
  );
}
