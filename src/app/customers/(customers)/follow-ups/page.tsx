import CustomerSection from "@/components/customers-section/customers-section";
import { getCustomersBasedOnStatus, searchForCustomers } from "@/actions";
import { Suspense } from "react";
import { logger } from "@/lib/logger";
export default async function FollowUpsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    searchFilters?: string;
  };
}) {
  const response = await (searchParams?.query
    ? searchForCustomers(
        "follow-ups",
        searchParams.query,
        searchParams.searchFilters
      )
    : getCustomersBasedOnStatus("follow-ups"));

  return (
    <Suspense fallback={<div>Still loading</div>}>
      <CustomerSection
        status='follow-ups'
        initialCustomers={response}
        searchParams={searchParams}
        title='Follow Ups'
      />
    </Suspense>
  );
}
