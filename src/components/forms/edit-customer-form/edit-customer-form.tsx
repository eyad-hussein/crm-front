"use client";
import { logger } from "@/lib/logger";

import moment from "moment";

import { CustomerStatusType } from "@/enums";
import { LeadSourceType } from "@/enums/lead-source-type";
import {
  getCitiesByStateId,
  getStatesByCountryId,
  patchCustomer,
} from "@/actions";
import { FormEvent, useState } from "react";
import CancelButtonBig from "@/components/buttons/cancel-button/cancel-button-big";
import FormLabel from "@/components/form-elements/form-label/form-label";
import FormSelect from "@/components/form-elements/form-select/form-select";
import FormInput from "@/components/form-elements/form-input/form-input";
import {
  ICity,
  ICountry,
  ICustomer,
  IExtension,
  IIndustry,
  IPackage,
  IState,
  IUser,
} from "@/types";

interface EditCustomerFormProps {
  customer: ICustomer;
  data: {
    users: IUser[] | null;
    countries: ICountry[] | null;
    industries: IIndustry[] | null;
    extensions: IExtension[] | null;
    packages: IPackage[] | null;
    initialCities: ICity[] | null;
    initialStates: IState[] | null;
  };
}

export default function EditCustomerForm({
  customer,
  data: {
    users,
    countries,
    industries,
    extensions,
    packages,
    initialCities,
    initialStates,
  },
}: EditCustomerFormProps) {
  const [cities, setCities] = useState<ICity[] | null>(initialCities);
  const [states, setStates] = useState<IState[] | null>(initialStates);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleCountryChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    logger.info("Handling country change");
    const countryId = e.target.value;
    const states = await getStatesByCountryId(countryId);
    setStates(states);
    setCities([]);
  };

  const handleStateChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    logger.info("Handling state change");
    const stateId = e.target.value;
    const cities = await getCitiesByStateId(stateId);
    setCities(cities);
  };

  const handleOnSubmit = async (e: FormEvent) => {
    logger.info("Handling submit new customer form");

    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const res = await patchCustomer(customer, formData);

    setIsSubmit((prev) => true);
    if (res) {
      setIsEdited((prev) => true);
    } else {
      setIsEdited((prev) => false);
    }
  };

  return (
    <div>
      <h1 className='mb-6 text-3xl'>Edit Customer</h1>
      <form className='w-full flex justify-between' onSubmit={handleOnSubmit}>
        <div className='w-1/2 mr-12'>
          <div className='flex flex-wrap -mx-3 mb-3'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <FormLabel className='mb-2' htmlFor='name' content='Name' />
              <FormInput
                name='name'
                type='text'
                placeholder='Jane'
                defaultValue={customer.name}
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <FormLabel className='mb-2' htmlFor='email' content='Email' />
              <FormInput
                name='email'
                type='text'
                placeholder='example@gmail.com'
                defaultValue={customer.email}
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <FormLabel className='mb-2' htmlFor='website' content='Website' />
              <FormInput
                name='website'
                type='url'
                placeholder='https://example.com'
                defaultValue={customer.website}
              />
            </div>
          </div>

          <div className='w-full mb-6'>
            <FormLabel className='mb-2' htmlFor='priority' content='Priority' />
            <FormSelect
              name='priority'
              defaultValue={customer.priority.toString()}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </FormSelect>
          </div>

          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='industry_id'
              content='Industry'
            />
            <FormSelect
              name='industry_id'
              defaultValue={customer.industry_id.toString()}>
              {industries?.map((industry) => {
                return (
                  <option key={industry.id} value={industry.id}>
                    {industry.industry_name[0].toUpperCase() +
                      industry.industry_name.slice(1)}
                  </option>
                );
              })}
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
                defaultValue={customer.description}
                rows={5}
                className='resize-y appearance-none block w-full text-black border border-gray-500 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-gray-500'
                id='description'
                placeholder='Write your thoughts here...'
              />
            </div>
          </div>
          <div className='w-full mb-3'>
            <FormLabel className='mb-2' htmlFor='user_id' content='Assignee' />
            <FormSelect
              name='user_id'
              defaultValue={customer.user_id.toString()}>
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
            <FormLabel
              className='mb-2'
              htmlFor='pacakge_id'
              content='Packages'
            />
            <FormSelect
              name='package_id'
              defaultValue={customer.package_id?.toString()}>
              {packages?.map((p) => {
                return (
                  <option key={p.id} value={p.id}>
                    {p.package_name}
                  </option>
                );
              })}
            </FormSelect>
          </div>
        </div>

        <div className='w-1/2 ml-12'>
          <div className='flex mb-3'>
            <div className='w-1/4'>
              <FormLabel
                className='mb-2'
                htmlFor='extension_id'
                content='Extension'
              />
              <FormSelect
                name='extension_id'
                defaultValue={
                  customer.customer_phone_numbers[0].extension_id ?? ""
                }>
                {extensions?.map((extension) => (
                  <option key={extension.id} value={extension.id}>
                    {extension.extension}
                  </option>
                ))}
              </FormSelect>
            </div>
            <div className='w-full px-3 mb-6 md:mb-0'>
              <FormLabel
                className='mb-2'
                htmlFor='customer_phone_numbers'
                content='Phone Number'
              />
              <FormInput
                defaultValue={
                  customer.customer_phone_numbers[0].phone_number ?? ""
                }
                name='customer_phone_numbers'
                type='text'
                placeholder='011256254'
              />
            </div>
          </div>

          <div className='w-full mb-9'>
            <FormLabel
              className='mb-2'
              htmlFor='country_id'
              content='Country'
            />
            <FormSelect
              name='country_id'
              onChange={handleCountryChange}
              defaultValue={
                customer.addresses?.length > 0
                  ? customer.addresses[0].country_id.toString()
                  : ""
              }>
              <option value='none'>Choose</option>
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
              <FormSelect
                name='city_id'
                defaultValue={
                  customer.addresses?.length > 0
                    ? customer.addresses[0].city_id.toString()
                    : ""
                }>
                <option value='none'>Choose</option>

                {cities?.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city_name}
                  </option>
                ))}
              </FormSelect>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <FormLabel className='mb-2' htmlFor='state_id' content='State' />
              <FormSelect
                name='state_id'
                onChange={handleStateChange}
                defaultValue={
                  customer.addresses?.length > 0
                    ? customer.addresses[0].state_id.toString()
                    : ""
                }>
                <option value='none'>Choose</option>
                {states?.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.state_name}
                  </option>
                ))}
              </FormSelect>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <FormLabel className='mb-2' htmlFor='postal_code' content='Zip' />
              <FormInput
                name='postal_code'
                type='text'
                placeholder='90210'
                defaultValue={
                  customer.addresses.length > 0
                    ? customer.addresses[0].postal_code
                    : ""
                }
              />
            </div>
          </div>

          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='address_line_1'
              content='Address Line 1'
            />
            <FormInput
              name='address_line_1'
              type='text'
              placeholder='90210'
              defaultValue={
                customer.addresses.length > 0
                  ? customer.addresses[0].address_line_1
                  : ""
              }
            />
          </div>
          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='address_line_2'
              content='Address Line 2'
            />
            <FormInput
              name='address_line_2'
              type='text'
              placeholder='90210'
              defaultValue={
                customer.addresses.length > 0
                  ? customer.addresses[0].address_line_2
                  : ""
              }
            />
          </div>

          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='lead_source'
              content='Lead Source'
            />
            <FormSelect name='lead_source' defaultValue={customer.lead_source}>
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
            <FormSelect name='status' defaultValue={customer.status}>
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

          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='follow_up_date'
              content='Follow Up Date'
            />
            <input
              type='date'
              name='follow_up_date'
              id='follow_up_date'
              className='outline-none w-full'
              defaultValue={moment(customer.follow_up_date).format(
                "YYYY-MM-DD"
              )}
            />
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

      {isSubmit &&
        (isEdited ? (
          <div className='text-green-400'>Customer edited successfully</div>
        ) : (
          <div className='text-red-400'>Customer was not edited created</div>
        ))}
    </div>
  );
}
