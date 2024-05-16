import { ICustomerStatus } from "@/types";
import CustomersList from "../customers-list/customers-list";
import CustomerSectionHeader from "./customer-section-header/customer-section-header";
import CustomerSectionNav from "./customer-section-nav/customer-section-nav";

interface CustomerSectionProps {
  title: string;
  customers: ICustomerStatus[] | null;
  status: string;
}

export default function CustomerSection({
  status,
  title,
  customers,
}: CustomerSectionProps) {
  return (
    <section className='flex flex-col w-full'>
      <CustomerSectionHeader title={title} />
      <CustomerSectionNav />
      <CustomersList status={status} initialCustomers={customers} />
    </section>
  );
}
