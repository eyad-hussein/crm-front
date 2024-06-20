"use client";
import { logger } from "@/lib/logger";
import { CustomerStatusType } from "@/enums";
import { LeadSourceType } from "@/enums/lead-source-type";
import {
  getUsers,
  getCountries,
  getIndustries,
  createCustomer,
  getCitiesByStateId,
  getExtensions,
  getStatesByCountryId,
  getServices,
} from "@/actions";
import { useEffect, useState } from "react";
import CancelButtonBig from "@/components/buttons/cancel-button/cancel-button-big";
import FormLabel from "@/components/form-elements/form-label/form-label";
import FormSelect from "@/components/form-elements/form-select/form-select";
import FormInput from "@/components/form-elements/form-input/form-input";
import {
  ICity,
  ICountry,
  IExtension,
  IIndustry,
  IService,
  IState,
  IUser,
} from "@/types";

export default function CreateCustomerFormPage() {
  const [users, setUsers] = useState<IUser[] | null>([]);
  const [countries, setCountries] = useState<ICountry[] | null>([]);
  const [industries, setIndustries] = useState<IIndustry[] | null>([]);
  const [cities, setCities] = useState<ICity[] | null>([]);
  const [states, setStates] = useState<IState[] | null>([]);
  const [extensions, setExtensions] = useState<IExtension[] | null>([]);
  const [services, setServices] = useState<IService[] | null>([]);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const handleOnServiceClick = (id: number) => {
    setSelectedServices((selectedServices) => {
      if (selectedServices.includes(id)) {
        return selectedServices.filter((serviceId) => serviceId !== id);
      } else {
        return [...selectedServices, id];
      }
    });
  };

  useEffect(() => {
    const initialize = async () => {
      const [
        initialUsers,
        initialCountries,
        initialIndustries,
        initialExtensions,
        initialServices,
      ] = await Promise.all([
        getUsers(),
        getCountries(),
        getIndustries(),
        getExtensions(),
        getServices(),
      ]);
      setUsers(initialUsers);
      setCountries(initialCountries);
      setIndustries(initialIndustries);
      setExtensions(initialExtensions);
      setServices(initialServices);
    };

    logger.info("Initializing");
    initialize();
  }, []);

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

  return (
    <div>
      <h1 className='mb-6 text-3xl'>Add a New Customer</h1>
      <form
        className='w-full flex justify-between'
        action={createCustomer.bind(null, selectedServices)}>
        <div className='w-1/2 mr-12'>
          <div className='flex flex-wrap -mx-3 mb-3'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <FormLabel className='mb-2' htmlFor='name' content='Name' />
              <FormInput name='name' type='text' placeholder='Jane' />
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

          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='industry_id'
              content='Industry'
            />
            <FormSelect name='industry_id'>
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
                rows={5}
                className='resize-y appearance-none block w-full text-black border border-gray-500 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-gray-500'
                id='description'
                placeholder='Write your thoughts here...'
              />
            </div>
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
            <FormLabel className='mb-2' htmlFor='services' content='Services' />
            {services?.map((service) => (
              <label
                className='block'
                htmlFor={service.id.toString()}
                key={service.id}>
                <input
                  type='checkbox'
                  name={service.id.toString()}
                  id={service.id.toString()}
                  value={service.id}
                  onClick={() => handleOnServiceClick(service.id)}
                />
                {service.service_name}
              </label>
            ))}
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
              <FormSelect name='extension_id'>
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
            <FormSelect name='country_id' onChange={handleCountryChange}>
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
              <FormSelect name='city_id'>
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
              <FormSelect name='state_id' onChange={handleStateChange}>
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
              <FormInput name='postal_code' type='text' placeholder='90210' />
            </div>
          </div>

          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='address_line_1'
              content='Address Line 1'
            />
            <FormInput name='address_line_1' type='text' placeholder='90210' />
          </div>
          <div className='w-full mb-6'>
            <FormLabel
              className='mb-2'
              htmlFor='address_line_2'
              content='Address Line 2'
            />
            <FormInput name='address_line_2' type='text' placeholder='90210' />
          </div>

          <div className='w-full mb-6'>
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
    </div>
  );
}
