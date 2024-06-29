import CustomerSection from "@/components/customers-section/customers-section";
import { getCustomersBasedOnStatus, searchForCustomers } from "@/actions";
import { Suspense } from "react";
import { logger } from "@/lib/logger";
export default async function ProspectsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    searchFilters?: string;
  };
}) {
  const response = await (searchParams?.query
    ? searchForCustomers(
        "prospects",
        searchParams.query,
        searchParams.searchFilters
      )
    : getCustomersBasedOnStatus("prospects"));

  return (
    <Suspense fallback={<div>Still loading</div>}>
      <CustomerSection
        status='prospects'
        initialCustomers={response}
        searchParams={searchParams}
        title='Prospects'
      />
    </Suspense>
  );
}
