import { getUsers } from "@/actions";
import Users from "@/components/users/users";

export default async function UsersPage() {
  const initialUsers = await getUsers();
  return <Users initialUsers={initialUsers ?? []} />;
}
