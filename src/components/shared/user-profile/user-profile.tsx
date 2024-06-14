import Avatar from "@/components/avatar/avatar";
import { StaticImageData } from "next/image";

interface UserProfileProps {
  name: string;
  email: string;
  icon: StaticImageData;
}

export default function UserProfile({ name, email, icon }: UserProfileProps) {
  return (
    <div className='flex justify-center items-center max-h-12 max-w-full mb-4'>
      <Avatar icon={icon} />

      <div className='flex flex-col'>
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}
