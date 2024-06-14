import { PhoneNumberType } from "@/enums/phone-number-type";
import IExtension from "./extension";

export default interface IPhoneNumber {
  id: number;
  phone_number: string | null;
  extension_id: string | null;
  type_of_number: PhoneNumberType | null;
  created_at: Date;
  updated_at: Date;
  extension: IExtension;
}
