import CustomerUserPortal from "../customer-user-portal/customer-user-portal";
import CustomerStatus from "../customer-status/customer-status";
import HorizontalDivider from "../horizontal-divider/horizontal-divider";
import RecentActivity from "../recent-activity/recent-activity";
import { IActivities, ICustomer } from "@/types";
import { CookiesProvider } from "next-client-cookies/server";

interface CustomerDetailsProps {
  customer: ICustomer;
  activities: IActivities | null;
}

export default function CustomerDetails({
  customer,
  activities,
}: CustomerDetailsProps) {
  return (
    <div className='w-full h-full mt-5 '>
      <h2>Customer Details</h2>
      <CustomerStatus
        customerId={customer.id}
        oldCustomerStatus={customer.status}
      />
      <HorizontalDivider />
      <div className='flex justify-between mt-8'>
        <CookiesProvider>
          <CustomerUserPortal
            customerId={customer.id}
            activities={activities}
          />
        </CookiesProvider>
        <RecentActivity />
      </div>
    </div>
  );
}
