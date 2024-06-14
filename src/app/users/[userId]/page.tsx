import profilePicture from "@/public/assets/images/images/IMG_0003.jpg";
import { getUserById } from "@/actions";
import Image from "next/image";
import UserProfile from "@/components/user-profile/user-profile";

export default async function UserProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUserById(params.userId);

  return <UserProfile user={user} />;
}
