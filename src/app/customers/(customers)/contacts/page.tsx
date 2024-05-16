import axios from "axios";

import CustomerSection from "@/components/customers-section/customers-section";
import { IContact } from "@/types";
import { getCustomersBasedOnStatus, searchForCustomer } from "@/actions";
import { Suspense } from "react";

export default async function ContactsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  console.log("query, in page", searchParams?.query);

  let response;
  if (searchParams?.query) {
    response = await searchForCustomer(searchParams, "contact");
  } else {
    response = await getCustomersBasedOnStatus("contacts");
  }

  // response = await getCustomersBasedOnStatus("contacts");

  return (
    <Suspense fallback={<div>Still loading</div>}>
      <CustomerSection
        status='contacts'
        customers={response}
        title='Contacts'
      />
    </Suspense>
  );
}
