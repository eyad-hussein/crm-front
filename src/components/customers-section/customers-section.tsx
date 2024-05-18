"use client";
import { ICustomerStatus } from "@/types";
import CustomersList from "../customers-list/customers-list";
import CustomerSectionHeader from "./customer-section-header/customer-section-header";
import CustomerSectionNav from "./customer-section-nav/customer-section-nav";
import { useState } from "react";
import { filterCustomers } from "@/actions";

interface CustomerSectionProps {
  title: string;
  initialCustomers: ICustomerStatus[] | null;
  status: string;
  query?: string;
}

export default function CustomerSection({
  status,
  title,
  initialCustomers,
  query,
}: CustomerSectionProps) {
  const [customers, setCustomers] = useState<ICustomerStatus[] | null>(
    initialCustomers
  );

  const handleFilter = async (formData: FormData) => {
    console.log("filtering customers, client side", formData);
    const customers = await filterCustomers(status, formData);

    if (customers) {
      setCustomers(customers);
    }
  };
  return (
    <section className='flex flex-col w-full'>
      <CustomerSectionHeader title={title} />
      <CustomerSectionNav handleFilter={handleFilter} />
      <CustomersList
        initialCustomers={customers}
        status={status}
        query={query}
      />
    </section>
  );
}
