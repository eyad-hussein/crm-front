import { PhoneNumberType } from "@/enums/phone-number-type";

interface IPhoneNumber {
  id: number;
  phone_number: string | null;
  extension: string | null;
  type_of_number: PhoneNumberType | null;
  customer_id: number;
  created_at: Date;
  updated_at: Date;
}
