import ICustomerState from "@/types/customer-state";
import CustomersList from "../customers-list/customers-list";
import CustomerSectionHeader from "./customer-section-header/customer-section-header";
import CustomerSectionNav from "./customer-section-nav/customer-section-nav";

interface CustomerSectionProps {
  title: string;
  customers: ICustomerState[] | null;
}

export default function CustomerSection({
  title,
  customers,
}: CustomerSectionProps) {
  return (
    <section className='flex flex-col'>
      <CustomerSectionHeader title={title} />
      <CustomerSectionNav />
      <CustomersList customers={customers} />
    </section>
  );
}
