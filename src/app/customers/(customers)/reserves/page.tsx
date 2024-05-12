import axios from "axios";

import CustomerSection from "@/components/customers-section/customers-section";
import IReserve from "@/types/reserve";

export default async function Reserve() {
  const response = await axios.get<IReserve[]>(
    "http://localhost:5000/customers/reserves"
  );

  console.log(response.data);

  return <CustomerSection customers={response.data} title='Reserves' />;
}
