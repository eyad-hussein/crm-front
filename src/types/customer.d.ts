import { CustomerStatusType } from "@/enums/customer-status-type";
import { LeadSourceType } from "@/enums/lead-source-type";
import IAccount from "./industry";
import IUser from "./user";
import ICountry from "./country";
import IService from "./service";
import IPhoneNumber from "./phone-number";
import ICity from "./city";
import IPostalCode from "./postal-code";

export default interface ICustomer {
  id: number;
  name: string;
  email: string;
  priority: number;
  description: string;
  follow_up_date: Date | null;
  status: CustomerStatusType;
  lead_source: LeadSourceType;
  postal_code: string;
  industry_id: number;
  user_id: number;
  createdAt: Date;
  updatedAt: Date;
}
