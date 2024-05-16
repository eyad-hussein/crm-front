import CustomersNavBar from "@/components/customers-nav-bar/customers-nav-bar";
import UsersNavBar from "@/components/users-nav-bar/users-nav-bar";

export default function CustomersRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const status: string = __dirname.split("/").pop() ?? "contacts";
  return (
    <>
      <UsersNavBar />
      <section className='flex h-[calc(100vh-48px)]'>
        <CustomersNavBar status={status} />

        <div className='py-10 px-5 w-full'>{children}</div>
      </section>
    </>
  );
}
