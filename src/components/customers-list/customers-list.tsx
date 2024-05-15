"use client";
import { useRouter } from "next/navigation";
import { ICustomerStatus } from "@/types";
import EditButton from "../buttons/edit-button/edit-button";
interface CustomersListProps {
  customers: ICustomerStatus[] | null;
}

export default function CustomersList({ customers }: CustomersListProps) {
  const router = useRouter();

  const handleOnClick = (customerId: number, customerStatus: string): void => {
    router.push(`/customers/${customerId}/${customerStatus}`);
  };
  return (
    <div className='overflow-x-scroll pb-10'>
      <table
        style={{
          width: "120%",
        }}>
        <thead>
          <tr className=''>
            <th>Name</th>
            <th>Stage</th>
            <th>Follow-Up</th>
            <th>Industry</th>
            <th>Company</th>
            <th>Country</th>
            <th>Lead Source</th>
            <th>Job Title</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Category</th>
            <th>Assignee</th>
            <th>Discription</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer: ICustomerStatus) => {
              const { customer: customerData } = customer;
              return (
                <tr key={customer.id}>
                  <td>
                    {`${customerData.first_name} ${customerData.last_name}`}{" "}
                    <EditButton customerId={customerData.id} />
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    Stage
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.follow_up_date?.toString()}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.account.industry}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.account.account_name}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.country?.country_name}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.lead_source}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.title}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.customer_phone_number?.phone_number}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.email}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.services.length &&
                      customerData.services[0].service_name}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>{`${customerData.user.first_name} ${customerData.user.last_name}`}</td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.description}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
