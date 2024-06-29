import CustomerSection from "@/components/customers-section/customers-section";
import { getCustomersBasedOnStatus, searchForCustomers } from "@/actions";
import { Suspense } from "react";
import { logger } from "@/lib/logger";
export default async function ClosuresPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    searchFilters?: string;
  };
}) {
  const response = await (searchParams?.query
    ? searchForCustomers(
        "closures",
        searchParams.query,
        searchParams.searchFilters
      )
    : getCustomersBasedOnStatus("closures"));

  return (
    <Suspense fallback={<div>Still loading</div>}>
      <CustomerSection
        status='closures'
        initialCustomers={response}
        searchParams={searchParams}
        title='Closures'
      />
    </Suspense>
  );
}
