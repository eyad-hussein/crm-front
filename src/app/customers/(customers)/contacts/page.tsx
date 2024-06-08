import CustomerSection from "@/components/customers-section/customers-section";
import { getCustomersBasedOnStatus, searchForCustomer } from "@/actions";
import { Suspense } from "react";

export default async function ContactsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    searchFilters?: string;
  };
}) {
  const response = await (searchParams?.query
    ? searchForCustomer(
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
        query={searchParams?.query}
        title='Contacts'
      />
    </Suspense>
  );
}
