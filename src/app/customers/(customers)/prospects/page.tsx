import CustomerSection from "@/components/customers-section/customers-section";
import { getCustomersBasedOnStatus, searchForCustomers } from "@/actions";
import { Suspense } from "react";

export default async function ProspectsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const response = await (searchParams?.query
    ? searchForCustomers("prospects", searchParams.query)
    : getCustomersBasedOnStatus("prospects"));

  return (
    <Suspense fallback={<div>Still loading</div>}>
      <CustomerSection
        status='prospects'
        initialCustomers={response}
        query={searchParams?.query}
        title='Prospects'
      />
    </Suspense>
  );
}
