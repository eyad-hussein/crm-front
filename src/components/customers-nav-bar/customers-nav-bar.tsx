import Image from "next/image";
import CustomersNavBarGroup from "./customers-nav-bar-group/customers-nav-bar-group";
import UserProfile from "../shared/user-profile/user-profile";
import alphaLogoBig from "@/public/assets/images/logos/alpha-creative-logo-blue.png";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { IUser } from "@/types";
import { logger } from "@/lib/logger";

export default function CustomersNavBar() {
  const user: IUser = retrieveCurrentLoggedInUserFromCookies(true);
  return (
    <nav className='flex flex-col justify-between bg-slate-50 max-w-[14%]'>
      <div className='flex justify-center items-stretch w-full min-h-40 px-8'>
        <Image
          src={alphaLogoBig}
          alt='alpha craetive logo'
          className='object-contain w'
        />
      </div>

      <CustomersNavBarGroup />

      <UserProfile
        name={`${user.first_name} ${user.last_name}`}
        email={user.email}
        currentUserId={user.id}
      />
    </nav>
  );
}
