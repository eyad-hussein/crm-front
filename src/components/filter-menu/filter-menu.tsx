import { FormEvent } from "react";
import FormSelect from "../form-elements/form-select/form-select";
import { LeadSourceType, SalutationType } from "@/enums";

interface FilterMenuProps {
  handleFilter: (formData: FormData) => void;
}

export default function FilterMenu({ handleFilter }: FilterMenuProps) {
  const handleClick = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    handleFilter(formData);
  };
  return (
    <form
      onSubmit={(e) => handleClick(e)}
      className='flex flex-col list-none bg-primary w-80 py-4 px-5'>
      <div className='flex justify-between items-center mb-5'>
        <label htmlFor='first_name' className='text-xs'>
          First Name
        </label>
        <input type='text' name='first_name' id='first_name' />
      </div>
      <div className='flex justify-between items-center'>
        <label htmlFor='last_name' className='text-xs'>
          Last Name
        </label>
        <input type='text' name='last_name' id='last_name' />
      </div>
      <div className='flex justify-between items-center'>
        <label htmlFor='lead_source' className='text-xs'>
          Lead Source
        </label>
        <input type='text' name='lead_source' id='lead_source' />
      </div>

      <div className='flex justify-between items-center'>
        <label htmlFor='title' className='text-xs'>
          Title
        </label>
        <input type='text' name='title' id='title' />
      </div>
      <div className='flex justify-between items-center'>
        <label className='mb-2' htmlFor='lead_source' />
        Lead Source
        <label />
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
      <div className='flex justify-between items-center'>
        <label className='mb-2' htmlFor='salutations' />
        Salutation
        <label />
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
      <div className='flex justify-between items-center'>
        <label htmlFor='priority' className='text-xs'>
          Priority
        </label>
        <FormSelect name='priority'>
          <option value='0'>Choose</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </FormSelect>
      </div>
      <button type='submit'>Filter Customers</button>
    </form>
  );
}
