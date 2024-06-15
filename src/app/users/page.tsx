import { getUsers } from "@/actions";
import Users from "@/components/users/users";

export default async function UsersPage() {
  const users = await getUsers();
  return <Users users={users ?? []} />;
}
