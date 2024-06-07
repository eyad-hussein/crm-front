import CustomerDetails from "@/components/customer-details/customer-details";
import CustomerProfileHeader from "@/components/customer-profile-header/customer-profile-header";
import { getActivities, getCustomer } from "@/actions";
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
    const [customer, activities] = await Promise.all([
      getCustomer(params.customerId),
      getActivities(params.customerId),
    ]);

    if (!customer) {
      throw new Error("Customer not found");
    }
    return (
      <section className='flex flex-col relative'>
        <div className='absolute top-0 right-0'>
          <CancelButtonSmall />
        </div>
        <CustomerProfileHeader customer={customer} />
        <HorizontalDivider />
        <CustomerDetails activities={activities} customer={customer} />
      </section>
    );
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
}
