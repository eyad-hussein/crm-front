import CustomerDetails from "@/components/customer-details/customer-details";
import CustomerProfileHeader from "@/components/customer-profile-header/customer-profile-header";
import { getCustomer } from "@/actions";

interface CustomerProfileProps {
  params: {
    customerId: string;
  };
}

export default async function CustomerProfilePage({
  params,
}: CustomerProfileProps) {
  const customer = await getCustomer(params.customerId);
  return (
    <section className='flex flex-col'>
      <CustomerProfileHeader customer={customer} />
      <CustomerDetails customer={customer} />
    </section>
  );
}
