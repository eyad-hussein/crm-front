import IPhoneNumber from "./phone-number";
import { CustomerStateType } from "@/enums/customer-state-type";
import { LeadSourceType } from "@/enums/lead-source-type";
import IAccount from "./account";
import IUser from "./user";
import ICountry from "./country";
import IService from "./service";

export default interface ICustomer {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string | null;
  title: string;
  email: string;
  marketing_objective: string | null;
  package_selected: string | null;
  priority: number;
  description: string;
  follow_up_date: Date | null;
  state: CustomerStateType;
  lead_source: LeadSourceType;
  country_id: number;
  account_id: number;
  user_id: number;
  account: IAccount;
  user: IUser;
  customer_phone_numbers: IPhoneNumber[];
  country: ICountry;
  services: IService[];
  created_at: Date;
  updated_at: Date;
}
