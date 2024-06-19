"use client";
import { useRouter } from "next/navigation";
import { IUser } from "@/types";

interface UsersListProps {
  users: IUser[] | [];
}

export default function UsersList({ users }: UsersListProps) {
  const router = useRouter();
  const handleOnClick = (userId: number): void => {
    router.push(`/users/${userId}`);
  };
  return (
    <table className='w-11/12 text-left'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Title</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td
              onClick={() =>
                handleOnClick(user.id)
              }>{`${user.first_name} ${user.last_name}`}</td>
            <td onClick={() => handleOnClick(user.id)}>{user.email}</td>
            <td onClick={() => handleOnClick(user.id)}>{user.title}</td>
            <td onClick={() => handleOnClick(user.id)}>
              {user.department.department_name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
