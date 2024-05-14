import CustomerDetails from "@/components/customer-details/customer-details";
import CustomerProfileHeader from "@/components/customer-profile-header/customer-profile-header";
import { getCustomer } from "@/actions";
import CancelButton from "@/components/buttons/cancel-button/cancel-button";
import HorizontalDivider from "@/components/horizontal-divider/horizontal-divider";
interface CustomerProfileProps {
  params: {
    customerId: string;
  };
}

export default async function CustomerProfilePage({
  params,
}: CustomerProfileProps) {
  try {
    console.log(params);
    const customer = await getCustomer(params.customerId);
    return (
      <section className='flex flex-col relative'>
        <div className='absolute top-0 right-0'>
          <CancelButton />
        </div>
        <CustomerProfileHeader customer={customer} />
        <HorizontalDivider />
        <CustomerDetails customer={customer} />
      </section>
    );
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
}
