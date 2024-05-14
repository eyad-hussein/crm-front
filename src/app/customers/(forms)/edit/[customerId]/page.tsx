"use clinet";
import { CustomerStateType } from "@/enums/customer-state-type";
import { LeadSourceType } from "@/enums/lead-source-type";
import {
  getUsers,
  getCountries,
  getAccounts,
  putCustomer,
  getCustomer,
} from "@/actions";
import { ICustomer } from "@/types";

interface EditFormPageProps {
  params: {
    customerId: string;
  };
}

export default async function EditFormPage({ params }: EditFormPageProps) {
  const [users, countries, accounts] = await Promise.all([
    getUsers(),
    getCountries(),
    getAccounts(),
  ]);

  const customer = await getCustomer(params.customerId);

  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <form
      className='max-w-md mx-auto mt-10 bg-black py-5 px-7'
      action={putCustomer.bind(null, params.customerId)}>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='text'
          name='first_name'
          id='first_name'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='first_name'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          {customer.first_name}
        </label>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='text'
          name='last_name'
          id='last_name'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='last_name'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          {customer.last_name}
        </label>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='text'
          name='user_name'
          id='user_name'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='user_name'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          {customer.user_name}
        </label>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='text'
          name='title'
          id='title'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='title'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          {customer.title}
        </label>
      </div>

      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='email'
          name='email'
          id='email'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='email'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          {customer.email}
        </label>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='number'
          name='prority'
          id='prority'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='prority'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          {customer.priority}
        </label>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='text'
          name='description'
          id='description'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='description'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          {customer.description}
        </label>
      </div>

      <label htmlFor='state'>Choose a state:</label>
      <select name='state' id='state'>
        <option value={customer.state}>{customer.state}</option>
        {Object.values(CustomerStateType).map(
          (state) =>
            state != customer.state && (
              <option key={state} value={state}>
                {state}
              </option>
            )
        )}
      </select>

      <label htmlFor='lead_source'>Choose a lead source:</label>
      <select name='lead_source' id='lead_source'>
        <option value={customer.lead_source}>{customer.lead_source}</option>
        {Object.values(LeadSourceType).map(
          (leadSource) =>
            customer.lead_source != leadSource && (
              <option key={leadSource} value={leadSource}>
                {leadSource}
              </option>
            )
        )}
      </select>

      <label htmlFor='user_id'>Choose an assigneee:</label>
      <select name='user_id' id='user_id'>
        <option value={customer.id}>
          {(customer.user.first_name ?? "") + (customer.user.last_name ?? "")}
        </option>
        {users?.map(
          (user) =>
            user.id != customer.user.id && (
              <option key={user.id} value={user.id}>
                {user.first_name + " " + user.last_name}
              </option>
            )
        )}
      </select>

      <label htmlFor='country_id'>Choose an country:</label>
      <select name='country_id' id='country_id'>
        <option value={customer.country.id}>
          {customer.country.country_name}
        </option>
        {countries?.map(
          (country) =>
            country.id != customer.country.id && (
              <option key={country.id} value={country.id}>
                {country.country_name}
              </option>
            )
        )}
      </select>

      <label htmlFor='account_id'>Choose an country:</label>
      <select name='account_id' id='account_id'>
        <option value={customer.account.id}>
          {customer.account.account_name}
        </option>
        {accounts?.map(
          (account) =>
            account.id != customer.account.id && (
              <option key={account.id} value={account.id}>
                {account.account_name}
              </option>
            )
        )}
      </select>

      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        Submit
      </button>
    </form>
  );
}
