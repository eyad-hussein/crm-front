import axios from "axios";

import CustomerSection from "@/components/customers-section/customers-section";
import { IProspect } from "@/types";

export default async function Prospect() {
  try {
    const response = await axios.get<IProspect[]>(
      "http://localhost:5000/customers/prospects"
    );
    return <CustomerSection customers={response.data} title='Prospects' />;
  } catch (error) {
    console.error(error);
    return <div>Failed to load prospects</div>;
  }
}
