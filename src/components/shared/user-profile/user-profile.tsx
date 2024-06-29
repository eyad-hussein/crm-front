"use client";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface UserProfileProps {
  name: string;
  email: string;
  currentUserId?: number;
  icon?: StaticImageData;
}

export default function UserProfile({
  name,
  email,
  currentUserId,
  icon,
}: UserProfileProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/users/${currentUserId}`)}
      className='flex justify-center items-center max-h-12 max-w-full mb-4 cursor-pointer'>
      <div className='flex flex-col ml-2'>
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}
