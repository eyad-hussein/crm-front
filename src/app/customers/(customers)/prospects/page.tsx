import axios from "axios";

import CustomerSection from "@/components/customers-section/customers-section";
import { IProspect } from "@/types";

export default async function ProspectsPage() {
  const response = await axios.get<IProspect[]>(
    `${process.env.BACKEND_API_URL}/customers/prospects`
  );
  return (
    <CustomerSection
      status='prospects'
      customers={response.data}
      title='Prospects'
    />
  );
}
