"use client";
import { logger } from "@/lib/logger";
import { ICustomerStatus } from "@/types";
import CustomersList from "../customers-list/customers-list";
import CustomerSectionHeader from "./customer-section-header/customer-section-header";
import CustomerSectionNav from "./customer-section-nav/customer-section-nav";
import { useState } from "react";
import { filterCustomers, sortCustomers } from "@/actions";

interface CustomerSectionProps {
  title: string;
  initialCustomers: ICustomerStatus[] | null;
  status: string;
  searchParams?: {
    query?: string;
    searchFilters?: string;
  };
}

export default function CustomerSection({
  status,
  title,
  initialCustomers,
  searchParams,
}: CustomerSectionProps) {
  const [customers, setCustomers] = useState<ICustomerStatus[] | null>(
    initialCustomers
  );

  const handleFilter = async (formData: FormData) => {
    logger.info({ formData }, "filtering customers, client side");
    const customers = await filterCustomers(status, formData);

    if (customers) {
      setCustomers(customers);
    }
  };

  const handleSort = async (formData: FormData) => {
    const sortedCustomers = await sortCustomers(customers, formData);

    if (sortedCustomers) {
      setCustomers(sortedCustomers);
    }
  };
  return (
    <section className='flex flex-col w-full h-full'>
      <CustomerSectionHeader title={title} />
      <CustomerSectionNav handlers={{ handleFilter, handleSort }} />
      <CustomersList
        initialCustomers={customers}
        status={status}
        searchParams={searchParams}
      />
    </section>
  );
}
