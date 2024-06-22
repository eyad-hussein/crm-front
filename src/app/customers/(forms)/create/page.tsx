import CreateCustomerForm from "@/components/forms/create-customer-form/create-customer-form";
import {
  getExtensions,
  getCountries,
  getIndustries,
  getServices,
  getUsers,
} from "@/actions";

export default async function CreateCustomerFormPage() {
  const [users, countries, industries, extensions, services] =
    await Promise.all([
      getUsers(),
      getCountries(),
      getIndustries(),
      getExtensions(),
      getServices(),
    ]);

  return (
    <CreateCustomerForm
      data={{
        users: users,
        countries: countries,
        industries: industries,
        extensions: extensions,
        services: services,
      }}
    />
  );
}
