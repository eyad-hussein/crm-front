import CustomerSection from "@/components/customers-section/customers-section";
import { getCustomersBasedOnStatus, searchForCustomers } from "@/actions";
import { Suspense } from "react";
import { logger } from "@/lib/logger";
export default async function ContactsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    searchFilters?: string;
  };
}) {
  const response = await (searchParams?.query
    ? searchForCustomers(
        "contacts",
        searchParams.query,
        searchParams.searchFilters
      )
    : getCustomersBasedOnStatus("contacts"));

  return (
    <Suspense fallback={<div>Still loading</div>}>
      <CustomerSection
        status='contacts'
        initialCustomers={response}
        searchParams={searchParams}
        title='Contacts'
      />
    </Suspense>
  );
}
