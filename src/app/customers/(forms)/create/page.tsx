import { CustomerStatusType, IndustryType, SalutationType } from "@/enums";
import { LeadSourceType } from "@/enums/lead-source-type";
import {
  getUsers,
  getCountries,
  getAccounts,
  createCustomer,
  getCities,
  getStates,
} from "@/actions";
import CancelButtonBig from "@/components/buttons/cancel-button/cancel-button-big";
import FormLabel from "@/components/form-elements/form-label/form-label";
import FormSelect from "@/components/form-elements/form-select/form-select";
import FormInput from "@/components/form-elements/form-input/form-input";

export default async function CreateCustomerFormPage() {
  const [users, countries, accounts, cities, states] = await Promise.all([
    getUsers(),
    getCountries(),
    getAccounts(),
    getCities(),
    getStates(),
  ]);

  return (
    <div>
      <h1 className='mb-6 text-3xl'>Add a new Customer</h1>
      <form className='w-full flex justify-between' action={createCustomer}>
        <div className='w-1/2 mr-12'>
          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='salutation'
              content='Salutation'
            />
            <FormSelect name='salutations'>
              {Object.values(SalutationType).map((salutation) => {
                return (
                  <option key={salutation} value={salutation}>
                    {salutation}
                  </option>
                );
              })}
            </FormSelect>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <FormLabel
                className='mb-2'
                htmlFor='first_name'
                content='First Name'
              />
              <FormInput name='first_name' type='text' placeholder='Jane' />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <FormLabel
                className='mb-2'
                htmlFor='last_name'
                content='Last Name'
              />
              <FormInput name='last_name' type='text' placeholder='Doe' />
            </div>
          </div>

          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='account_name'
              content='Company'
            />

            <FormInput name='account_name' type='text' placeholder='Company' />
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3 mb-6 md:mb-0'>
              <FormLabel className='mb-2' htmlFor='title' content='Title' />
              <FormInput name='title' type='text' placeholder='CEO' />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <FormLabel className='mb-2' htmlFor='website' content='Website' />
              <FormInput
                name='website'
                type='url'
                placeholder='https://example.com'
              />
            </div>
          </div>

          <div className='w-full mb-6'>
            <FormLabel className='mb-2' htmlFor='priority' content='Priority' />
            <FormSelect name='priority'>
              <option value='0'>Choose</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </FormSelect>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <FormLabel
                className='mb-2'
                htmlFor='description'
                content='Description'
              />
              <textarea
                name='description'
                rows={5}
                className='resize-y appearance-none block w-full text-black border border-gray-500 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-gray-500'
                id='description'
                placeholder='Write your thoughts here...'
              />
            </div>
          </div>
        </div>

        <div className='w-1/2 ml-12'>
          <div className='flex flex-wrap -mx-3 mb-3'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <FormLabel
                className='mb-2'
                htmlFor='customer_phone_number'
                content='Phone Number'
              />
              <FormInput
                name='customer_phone_number'
                type='text'
                placeholder='+20011256254'
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <FormLabel className='mb-2' htmlFor='email' content='Email' />
              <FormInput
                name='email'
                type='text'
                placeholder='example@gmail.com'
              />
            </div>
          </div>

          <div className='w-full mb-9'>
            <FormLabel
              className='mb-2'
              htmlFor='country_id'
              content='Country'
            />
            <FormSelect name='country_id'>
              {countries?.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.country_name}
                </option>
              ))}
            </FormSelect>
          </div>

          <div className='flex flex-wrap -mx-3 mb-3'>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <FormLabel className='mb-2' htmlFor='city_id' content='City' />
              <FormSelect name='city_id'>
                {cities?.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city_name}
                  </option>
                ))}
              </FormSelect>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <FormLabel className='mb-2' htmlFor='state_id' content='State' />
              <FormSelect name='state_id'>
                {states?.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.state_name}
                  </option>
                ))}
              </FormSelect>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <FormLabel className='mb-2' htmlFor='postal_code' content='Zip' />
              <FormInput name='postal_code' type='text' placeholder='90210' />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3 mb-6 md:mb-0'>
              <FormLabel
                className='mb-2'
                htmlFor='number_of_employees'
                content='No. Employees'
              />
              <FormInput
                name='number_of_employees'
                type='number'
                placeholder='50'
              />
            </div>
          </div>

          <div className='w-full mb-9'>
            <FormLabel
              className='mb-2'
              htmlFor='lead_source'
              content='Lead Source'
            />
            <FormSelect name='lead_source'>
              {Object.values(LeadSourceType).map((lead_source) => {
                return (
                  <option key={lead_source} value={lead_source}>
                    {lead_source}
                  </option>
                );
              })}
            </FormSelect>
          </div>

          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='status'
              content='Lead Status'
            />
            <FormSelect name='status'>
              {Object.values(CustomerStatusType).map((status) => {
                if (status === CustomerStatusType.FOLLOW_UP)
                  return (
                    <option
                      key={CustomerStatusType.FOLLOW_UP}
                      value={CustomerStatusType.FOLLOW_UP}>
                      Follow Up
                    </option>
                  );
                else {
                  return (
                    <option key={status} value={status}>
                      {status[0].toUpperCase() + status.slice(1)}
                    </option>
                  );
                }
              })}
            </FormSelect>
          </div>

          <div className='w-full mb-3'>
            <FormLabel className='mb-2' htmlFor='user_id' content='Assignee' />
            <FormSelect name='user_id'>
              {users?.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.first_name &&
                    user.last_name &&
                    `${
                      user.first_name[0].toUpperCase() +
                      user.first_name!.slice(1)
                    } ${
                      user.last_name[0].toUpperCase() + user.last_name.slice(1)
                    }`}
                </option>
              ))}
            </FormSelect>
          </div>

          <div className='w-full mb-6'>
            <FormLabel className='mb-2' htmlFor='industry' content='Industry' />
            <FormSelect name='industry'>
              {Object.values(IndustryType).map((industry) => {
                return (
                  <option key={industry} value={industry}>
                    {industry[0].toUpperCase() + industry.slice(1)}
                  </option>
                );
              })}
            </FormSelect>{" "}
          </div>

          <div className='w-full flex justify-between'>
            <div className='ml-auto mr-5'>
              <CancelButtonBig />
            </div>
            <button
              type='submit'
              className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}