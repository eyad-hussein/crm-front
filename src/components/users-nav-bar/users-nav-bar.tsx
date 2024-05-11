import UsersNavBarGroup from "./users-nav-bar-group/users-nav-bar-group";

export default function UsersNavBar() {
  return (
    <nav className='flex justify-end w-full py-3 bg-slate-100'>
      <UsersNavBarGroup />
    </nav>
  );
}
