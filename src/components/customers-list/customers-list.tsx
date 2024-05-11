import ICustomer from "@/types/customer";
import ICustomerState from "@/types/customer-state";

interface CustomersListProps {
  customers: ICustomerState[] | null;
}

export default function CustomersList({ customers }: CustomersListProps) {
  return (
    <table className='table-fixed'>
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
                <td>g</td>
                <td>g</td>
                <td>g</td>
                <td>g</td>
                <td>g</td>
                <td>g</td>
                <td>{customerData.title}</td>
                {/* <td>{customerData.customer_phone_numbers[0]}</td> */}
                <td>g</td>
                <td>{customerData.email}</td>
                <td>g</td>
                <td>g</td>
                <td>{customerData.description}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
