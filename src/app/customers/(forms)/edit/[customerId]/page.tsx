import { logger } from "@/lib/logger";
import {
  getUsers,
  getCountries,
  getIndustries,
  getCustomer,
  getExtensions,
  getServices,
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

  const [users, countries, industries, extensions, services] =
    await Promise.all([
      getUsers(),
      getCountries(),
      getIndustries(),
      getExtensions(),
      getServices(),
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
        services: services,
        initialCities: cities,
        initialStates: states,
      }}
      customer={customer}
    />
  );
}
