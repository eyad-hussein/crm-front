import { IUser } from "@/types";

export default function PersonalInformation({ user }: { user: IUser }) {
  return (
    <div>
      <h1 className='text-3xl my-5'>Personal Information</h1>

      <div className='flex flex-col items-start'>
        <div className='flex justify-between'>
          <span>Name:</span>
          <span>{`${user.first_name} ${user.last_name}`}</span>
        </div>
        <div className='flex justify-between'>
          <span>Gender:</span>
          <span>{user.gender}</span>
        </div>
        <div className='flex justify-between'>
          <span>Reporting To:</span>
          <span>
            {user.manager !== null
              ? `${user.manager?.first_name} ${user.manager?.last_name}`
              : "No One"}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>Department:</span>
          <span>{user.department.department_name}</span>
        </div>
      </div>
    </div>
  );
}
