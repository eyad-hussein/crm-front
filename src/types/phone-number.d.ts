import { PhoneNumberType } from "@/enums/phone-number-type";

export default interface IPhoneNumber {
  id: number;
  phone_number: string | null;
  extension: string | null;
  type_of_number: PhoneNumberType | null;
  created_at: Date;
  updated_at: Date;
}
