import CustomerSection from "@/components/customers-section/customers-section";
import { getCustomersBasedOnStatus, searchForCustomer } from "@/actions";
import { Suspense } from "react";

export default async function ProspectsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  console.log("query, in page", searchParams?.query);

  const response = await (searchParams?.query
    ? searchForCustomer("prospects", searchParams.query)
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
