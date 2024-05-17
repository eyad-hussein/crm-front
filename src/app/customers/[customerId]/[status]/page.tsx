import CustomerDetails from "@/components/customer-details/customer-details";
import CustomerProfileHeader from "@/components/customer-profile-header/customer-profile-header";
import { getCustomer } from "@/actions";
import CancelButtonSmall from "@/components/buttons/cancel-button/cancel-button-small";
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
    const customer = await getCustomer(params.customerId);
    return (
      <section className='flex flex-col relative'>
        <div className='absolute top-0 right-0'>
          <CancelButtonSmall />
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
