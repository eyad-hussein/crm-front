import axios from "axios";

import CustomerSection from "@/components/customers-section/customers-section";
import IReserve from "@/types/reserve";

export default async function Reserve() {
  try {
    const response = await axios.get<IReserve[]>(
      "http://localhost:5000/customers/reserves"
    );
    return <CustomerSection customers={response.data} title='Reserves' />;
  } catch (error) {
    console.error(error);
    return <div>Failed to load reserves</div>;
  }
}
