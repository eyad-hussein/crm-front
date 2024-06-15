import InvertedButton from "@/components/buttons/inverted-button/inverted-button";
import TransparentButton from "@/components/buttons/transparent-button/transparent-button";
import HorizontalDivider from "@/components/horizontal-divider/horizontal-divider";
import SearchBar from "@/components/shared/search-bar/search-bar";
import addIcon from "@/public/assets/images/icons/add.png";
import filterIcon from "@/public/assets/images/icons/filter.png";
import userProfileIcon from "@/public/assets/images/icons/profile-user.png";
import { IUser } from "@/types";

interface UsersProps {
  users: IUser[] | [];
}
export default function Users({ users }: UsersProps) {
  return (
    <div className='flex justify-between py-5 px-12 h-screen'>
      <div className='flex flex-col items-start w-1/5 mr-10'>
        <div className='h-1/4 w-full'>
          <h1 className='text-4xl mb-2'>Teams</h1>

          <div className='mb-3'>
            <div className='-translate-x-2'>
              <TransparentButton text='New Team' src={addIcon.src} />
            </div>
            <div className='-translate-x-2'>
              <TransparentButton text='Filter Team' src={filterIcon.src} />
            </div>
          </div>
          <SearchBar />
          <HorizontalDivider classes='w-full my-4' />
        </div>

        <div className='flex items-center w-full px-4 py-2 bg-blue-50 border rounded-lg'>
          <img
            src={userProfileIcon.src}
            alt='user profile icon'
            className='w-5 h-5'
          />
          <span className='ml-3 text-gray-500'>All users</span>
          <span className='ml-auto text-gray-500'>1</span>
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <div className='h-1/5'>
          <h1 className='text-4xl mb-2'>All Users</h1>
          <nav className='flex justify-between items-center'>
            <div className='w-1/5'>
              <SearchBar />
            </div>
            <div className='flex items-center'>
              <div className='mr-4'>
                <InvertedButton src={userProfileIcon.src} text='Manage Teams' />
              </div>
              <InvertedButton src={userProfileIcon.src} text='Invite' />
            </div>
          </nav>
        </div>
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
              <tr>
                <td>{`${user.first_name} ${user.last_name}`}</td>
                <td>{user.email}</td>
                <td>{user.title}</td>
                <td>{user.department.department_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
