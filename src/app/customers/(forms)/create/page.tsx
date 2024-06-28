import CreateCustomerForm from "@/components/forms/create-customer-form/create-customer-form";
import {
  getExtensions,
  getCountries,
  getIndustries,
  getPackages,
  getUsers,
} from "@/actions";

export default async function CreateCustomerFormPage() {
  const [users, countries, industries, extensions, packages] =
    await Promise.all([
      getUsers(),
      getCountries(),
      getIndustries(),
      getExtensions(),
      getPackages(),
    ]);

  return (
    <CreateCustomerForm
      data={{
        users: users,
        countries: countries,
        industries: industries,
        extensions: extensions,
        packages: packages,
      }}
    />
  );
}
