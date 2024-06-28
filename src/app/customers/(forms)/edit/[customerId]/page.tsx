import { logger } from "@/lib/logger";
import {
  getUsers,
  getCountries,
  getIndustries,
  getCustomer,
  getExtensions,
  getPackages,
  getCitiesByStateId,
  getStatesByCountryId,
} from "@/actions";
import EditCustomerForm from "@/components/forms/edit-customer-form/edit-customer-form";

interface EditCustomerFormPageProps {
  params: {
    customerId: string;
  };
}

export default async function EditCustomerFormPage({
  params,
}: EditCustomerFormPageProps) {
  const customer = await getCustomer(params.customerId);

  if (!customer) {
    return <div>Customer not found</div>;
  }

  const [users, countries, industries, extensions, packages] =
    await Promise.all([
      getUsers(),
      getCountries(),
      getIndustries(),
      getExtensions(),
      getPackages(),
    ]);

  const [cities, states] =
    customer.addresses.length > 0
      ? await Promise.all([
          getCitiesByStateId(customer.addresses[0].state_id),
          getStatesByCountryId(customer.addresses[0].country_id),
        ])
      : [null, null];

  return (
    <EditCustomerForm
      data={{
        users: users,
        countries: countries,
        industries: industries,
        extensions: extensions,
        packages: packages,
        initialCities: cities,
        initialStates: states,
      }}
      customer={customer}
    />
  );
}
