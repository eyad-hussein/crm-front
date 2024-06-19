import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCallback } from "react";

import { parseDate } from "@/lib/utils";

import { ICustomerStatus } from "@/types";
import EditButton from "../buttons/edit-button/edit-button";
import {
  deleteCustomer,
  getCustomersBasedOnStatus,
  searchForCustomers,
} from "@/actions";
interface CustomersListProps {
  initialCustomers: ICustomerStatus[] | null;
  status: string;
  searchParams?: {
    query?: string;
    searchFilters?: string;
  };
}

export default function CustomersList({
  initialCustomers,
  status,
  searchParams,
}: CustomersListProps) {
  const router = useRouter();

  const [selected, setSelected] = useState<number[]>([]);
  const [customers, setCustomers] = useState<ICustomerStatus[] | null>(
    initialCustomers
  );
  const [isDelete, setIsDelete] = useState<boolean>(false);

  useEffect(() => {
    setCustomers(initialCustomers);
  }, [initialCustomers]);

  const fetchCustomers = useCallback(async () => {
    if (searchParams?.query) {
      setCustomers(
        await searchForCustomers(
          status,
          searchParams.query,
          searchParams.searchFilters
        )
      );
    } else {
      setCustomers(await getCustomersBasedOnStatus(status));
    }
  }, [status, searchParams]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers, isDelete]);

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
    <div className='overflow-x-scroll pb-10 text-left'>
      {selected.length > 0 && (
        <button onClick={handleOnClickOnDelete}>Delete</button>
      )}
      <table className='w-[120%]'>
        <thead>
          <tr className=''>
            <th></th>
            <th>Name</th>
            <th>Follow-Up</th>
            <th>Industry</th>
            <th>Country</th>
            <th>Lead Source</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Service</th>
            <th>Assignee</th>
            <th>Discription</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer: ICustomerStatus) => {
              const { customer: customerData } = customer;
              return (
                <tr key={customer.id} className='mb-10 '>
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
                    {`${customerData.name}`}
                    <EditButton customerId={customerData.id} />
                  </td>

                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {parseDate(customerData.follow_up_date ?? "")}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.industry.industry_name}
                  </td>
                  <td
                    onClick={() =>
                      handleOnClick(customerData.id, customerData.status)
                    }>
                    {customerData.addresses &&
                      customerData.addresses[0].country.country_name}
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
                    {customerData.customer_phone_numbers.length &&
                      customerData.customer_phone_numbers[0].phone_number}
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
                    className='break-words max-w-96 '
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
