import Image from "next/image";
import profilePicture from "../../../public/assets/images/images/IMG_0003.jpg";
import HorizontalDivider from "../horizontal-divider/horizontal-divider";
import { ICustomer } from "@/types";

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
      <div className='flex justify-start items-center h-1/2'>
        <div className='max-w-10 h-full rounded-full overflow-clip'>
          <Image src={profilePicture} alt='back' />
        </div>

        <div>
          <h1>{customer.first_name + customer.last_name}</h1>
          <div>
            <span>{customer.country.country_name}</span>{" "}
            <span>
              {customer.customer_phone_numbers?.length &&
                customer.customer_phone_numbers[0].phone_number}
            </span>
          </div>
        </div>
      </div>

      <HorizontalDivider />
      <div className='grid grid-cols-7 divide-x'>
        <div>
          <span>Job Title</span>
          <span className='block'>{customer.title}</span>
        </div>
        <div>
          <span>Email</span>
          <span className='block'>{customer.email}</span>
        </div>
        <div>
          <span>Company</span>
          <span className='block'>{customer.account.account_name}</span>
        </div>
        <div>
          <span>Industry</span>
          <span className='block'>{customer.account.industry}</span>
        </div>
        <div>
          <span>Created On</span>
          <span className='block'>{customer.createdAt.toString()}</span>
        </div>
        <div>
          <span>Tags</span>
          <span className='block'>Tags</span>
        </div>
        <div>
          <span>Update By</span>
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
