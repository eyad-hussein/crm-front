import { FormEvent, useEffect } from "react";
import { LeadSourceType } from "@/enums";
import FilterMenuItem from "./filter-menu-item/filter-menu-item";
import FilterMenuSelect from "./filter-menu-item/filter-menu-select";
import { getCountries, getIndustries } from "@/actions";
import { ICountry, IIndustry } from "@/types";
import { useState } from "react";
import FlatButton from "../buttons/flat-button/flat-button";

interface FilterMenuProps {
  handleFilter: (formData: FormData) => void;
}

export default function FilterMenu({ handleFilter }: FilterMenuProps) {
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    handleFilter(formData);
  };

  const [countries, setCountries] = useState<ICountry[] | null>(null);
  const [industries, setIndustries] = useState<IIndustry[] | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountries();
      setCountries(countries);
    };

    const fetchIndustries = async () => {
      const industries = await getIndustries();
      setIndustries(industries);
    };

    fetchCountries();
    fetchIndustries();
  }, []);

  return (
    <form
      onSubmit={(e) => handleClick(e)}
      className='flex flex-col list-none bg-white border border-black w-[22rem] py-4 px-5'>
      <FilterMenuItem labelName='Name' name='name' />
      <FilterMenuItem labelName='Email' name='email' />
      <FilterMenuItem labelName='Assignee' name='user' />
      <FilterMenuSelect labelName='Lead Source' name='lead_source'>
        {Object.values(LeadSourceType).map((lead_source) => {
          return (
            <option key={lead_source} value={lead_source}>
              {lead_source}
            </option>
          );
        })}
      </FilterMenuSelect>
      <FilterMenuSelect labelName='Priority' name='priority'>
        <option value='0'>Choose</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </FilterMenuSelect>
      <FilterMenuSelect labelName='Country' name='country_id'>
        <option value='choose'>Choose</option>

        {countries?.map((country) => {
          return (
            <option key={country.id} value={country.id}>
              {country.country_name}
            </option>
          );
        })}
      </FilterMenuSelect>
      <FilterMenuSelect labelName='Industry' name='industry_id'>
        <option value='choose'>Choose</option>
        {industries?.map((industry) => {
          return (
            <option key={industry.id} value={industry.id}>
              {industry.industry_name}
            </option>
          );
        })}
      </FilterMenuSelect>
      <FlatButton
        type='button'
        buttonType='submit'
        classes='self-center mt-4'
        text='Filter Customers'
      />
    </form>
  );
}
