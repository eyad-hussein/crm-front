import profilePicture from "@/public/assets/images/images/IMG_0003.jpg";
import { IUser } from "@/types";
import Image from "next/image";
import UserProfileSections from "./user-profile-sections/user-profile-sections";

export default function UserProfile({ user }: { user: IUser | null }) {
  return (
    <div className='flex justify-center'>
      <div className='w-1/4'>
        <div className='flex flex-col items-center'>
          <div className='border border-primary rounded-full overflow-clip w-60 h-60'>
            <Image src={profilePicture} alt='profile picture' />
          </div>
          <h1 className='text-3xl text-center'>{`${user?.first_name} ${user?.last_name}`}</h1>
          <h2>{user?.email}</h2>
          <h2>{`${user?.user_phone_numbers[0].extension.extension} ${user?.user_phone_numbers[0].phone_number}`}</h2>
          <h2>{user?.title}</h2>
          <h2>{user?.username}</h2>
        </div>
      </div>

      <UserProfileSections user={user} />
    </div>
  );
}
