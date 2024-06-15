import CustomersNavBar from "@/components/customers-nav-bar/customers-nav-bar";
import UsersNavBar from "@/components/users/users-nav-bar/users-nav-bar";

export default function CustomersRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UsersNavBar />
      <section className='flex h-[calc(100vh-48px)]'>
        <CustomersNavBar />

        <div className='py-10 px-5 w-full'>{children}</div>
      </section>
    </>
  );
}
