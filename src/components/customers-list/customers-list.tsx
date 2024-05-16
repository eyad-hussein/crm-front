"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";
import { ICustomerStatus } from "@/types";
import EditButton from "../buttons/edit-button/edit-button";
import { deleteCustomer, getCustomersBasedOnStatus } from "@/actions";
interface CustomersListProps {
  initialCustomers: ICustomerStatus[] | null;
  status: string;
}

export default function CustomersList({
  initialCustomers,
  status,
}: CustomersListProps) {
  const router = useRouter();

  const [selected, setSelected] = useState<number[]>([]);
  const [customers, setCustomers] = useState<ICustomerStatus[] | null>(
    initialCustomers
  );
  const [isDelete, setIsDelete] = useState<boolean>(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      setCustomers(await getCustomersBasedOnStatus(status));
    };

    fetchCustomers();
  }, [isDelete]);

  useEffect(() => {
    setCustomers(initialCustomers);
  }, [initialCustomers]);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.getAttribute("data-customer-id") || "");
    setSelected((prevSelected) => {
      if (e.target.checked) {
        return [...prevSelected, id];
      } else {
        return prevSelected.filter((selectedId) => selectedId !== id);
      }
    });
  };

  const handleOnClickOnDelete = async (): Promise<void> => {
    for (const id of selected) {
      await deleteCustomer(id);
    }
    setSelected([]);
    setIsDelete((prev) => !prev);
  };

  const handleOnClick = (customerId: number, customerStatus: string): void => {
    router.push(`/customers/${customerId}/${customerStatus}`);
  };

  return (
    <div className='overflow-x-scroll pb-10'>
      {selected.length > 0 && (
        <button onClick={handleOnClickOnDelete}>Delete</button>
      )}
      <table
        style={{
          width: "120%",
        }}>
        <thead>
          <tr className=''>
            <th></th>
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
                    <input
                      type='checkbox'
                      name='user_id'
                      id={`user_id_${customerData.id}`}
                      data-customer-id={customerData.id}
                      onChange={handleSelect}
                    />
                  </td>
                  <td>
                    {`${customerData.first_name} ${customerData.last_name}`}
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
