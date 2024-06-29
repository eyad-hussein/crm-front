import CustomerSection from "@/components/customers-section/customers-section";
import { getCustomersBasedOnStatus, searchForCustomers } from "@/actions";
import { Suspense } from "react";
import { logger } from "@/lib/logger";
export default async function ProposalsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    searchFilters?: string;
  };
}) {
  const response = await (searchParams?.query
    ? searchForCustomers(
        "proposals",
        searchParams.query,
        searchParams.searchFilters
      )
    : getCustomersBasedOnStatus("proposals"));

  return (
    <Suspense fallback={<div>Still loading</div>}>
      <CustomerSection
        status='proposals'
        initialCustomers={response}
        searchParams={searchParams}
        title='Proposals'
      />
    </Suspense>
  );
}
