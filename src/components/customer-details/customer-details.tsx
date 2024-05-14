import CustomerUserPortal from "../customer-user-portal/customer-user-portal";
import CustomerState from "../customer-state/customer-state";
import HorizontalDivider from "../horizontal-divider/horizontal-divider";
import RecentActivity from "../recent-activity/recent-activity";
import { ICustomer } from "@/types";

interface CustomerDetailsProps {
  customer: ICustomer | null;
}

export default function CustomerDetails({ customer }: CustomerDetailsProps) {
  return (
    <div className='w-full h-full'>
      <h2>Customer Details</h2>
      <CustomerState customerState={customer?.state} />
      <HorizontalDivider />
      <div className='flex justify-between mt-8'>
        <CustomerUserPortal />
        <RecentActivity />
      </div>
    </div>
  );
}
