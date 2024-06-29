import locationIcon from "@/public/assets/images/icons/location.png";
import telephoneIcon from "@/public/assets/images/icons/telephone.png";
import HorizontalDivider from "../horizontal-divider/horizontal-divider";
import { ICustomer } from "@/types";
import { parseDate } from "@/lib/parser";

interface CustomerProfileHeaderProps {
  customer: ICustomer | null;
}

export default function CustomerProfileHeader({
  customer,
}: CustomerProfileHeaderProps) {
  if (!customer) {
    return null;
  }
  return (
    <header className='flex flex-col w-full items-stretch h-[10%]'>
      <div className='flex justify-start items-center h-1/2 py-5'>
        <div className='ml-2'>
          <h1 className='text-xl font-bold'>{`${customer.name}`}</h1>

          <div className='flex justify-between items-center mt-1'>
            <span className='flex items-center mr-3 h-full'>
              <img
                className='h-3 w-3 mr-1'
                src={locationIcon.src}
                alt='location'
              />
              {customer.addresses[0].country.country_name}
            </span>
            <span className='flex items-center'>
              <img
                className='h-3 w-3 mr-1'
                src={telephoneIcon.src}
                alt='phone'
              />
              {customer.customer_phone_numbers[0].phone_number}
            </span>
          </div>
        </div>
      </div>

      <HorizontalDivider />
      <div className='grid grid-cols-5 divide-x py-5'>
        <div className='pl-5'>
          <span>Email</span>
          <span className='block'>{customer.email}</span>
        </div>
        <div className='pl-5'>
          <span>Industry</span>
          <span className='block'>{customer.industry.industry_name}</span>
        </div>

        <div className='pl-5'>
          <span>Created On</span>
          <span className='block'>{parseDate(customer.createdAt)}</span>
        </div>
        <div className='pl-5'>
          <span>Tags</span>
          <span className='block'>Tags</span>
        </div>
        <div className='pl-5'>
          <span>Created By</span>
          <span className='block'>
            {`${customer.user.first_name ?? ""} ${
              customer.user.last_name ?? ""
            }`}
          </span>
        </div>
      </div>
    </header>
  );
}
