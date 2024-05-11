import IPhoneNumber from "./phone-number";
import { CustomerStateType } from "@/enums/customer-state-type";

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
  account_id: number;
  user_id: number | null;
  customer_phone_numbers: IPhoneNumber[];
  created_at: Date;
  updated_at: Date;
}
