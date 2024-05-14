"use client";
import { useRouter } from "next/navigation";
import ICustomerState from "@/types/customer-state";
import EditButton from "../buttons/edit-button/edit-button";
interface CustomersListProps {
  customers: ICustomerState[] | null;
}

export default function CustomersList({ customers }: CustomersListProps) {
  const router = useRouter();

  const handleOnClick = (customerId: number, customerState: string): void => {
    router.push(`/customers/${customerId}/${customerState}`);
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
            customers.map((customer: ICustomerState) => {
              const { customer: customerData } = customer;
              return (
                <tr key={customer.id}>
                  <td>
                    {`${customerData.first_name} ${customerData.last_name}`}{" "}
                    <EditButton customerId={customerData.id} />
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    Stage
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.follow_up_date?.toString()}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.account.industry}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.account.account_name}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.country?.country_name}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.lead_source}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.title}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.customer_phone_numbers?.length &&
                      customerData.customer_phone_numbers[0].phone_number}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.email}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>
                    {customerData.services.length &&
                      customerData.services[0].service_name}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
                    }>{`${customerData.user.first_name} ${customerData.user.last_name}`}</td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.state)
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
