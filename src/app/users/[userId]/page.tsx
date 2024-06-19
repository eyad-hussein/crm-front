import { getUserById } from "@/actions";
import UserProfile from "@/components/users/user-profile/user-profile";

export default async function UserProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUserById(params.userId);

  return <UserProfile user={user} />;
}
