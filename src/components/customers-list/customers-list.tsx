import ICustomer from "@/types/customer";
import ICustomerState from "@/types/customer-state";

interface CustomersListProps {
  customers: ICustomerState[] | null;
}

export default function CustomersList({ customers }: CustomersListProps) {
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
                  <td>{`${customerData.first_name} ${customerData.last_name}`}</td>
                  <td>Stage</td>
                  <td>{customerData.follow_up_date?.toString()}</td>
                  <td>{customerData.account.industry}</td>
                  <td>{customerData.account.account_name}</td>
                  <td>{customerData.country?.country_name}</td>
                  <td>{customerData.lead_source}</td>
                  <td>{customerData.title}</td>
                  <td>
                    {customerData.customer_phone_numbers.length &&
                      customerData.customer_phone_numbers[0]}
                  </td>
                  <td>{customerData.email}</td>
                  <td>
                    {customerData.services.length &&
                      customerData.services[0].service_name}
                  </td>
                  <td>{`${customerData.user.first_name} ${customerData.user.last_name}`}</td>
                  <td>{customerData.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
