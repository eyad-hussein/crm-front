import { CustomerStatusType } from "@/enums/customer-status-type";
import { LeadSourceType } from "@/enums/lead-source-type";
import IAccount from "./industry";
import IUser from "./user";
import ICountry from "./country";
import IService from "./service";
import IPhoneNumber from "./phone-number";
import ICity from "./city";
import IPostalCode from "./postal-code";
import IActivity from "./activity";
import IAddress from "./address";
import IIndustry from "./industry";

export default interface ICustomer {
  id: number;
  name: string;
  email: string;
  priority: number;
  description: string;
  follow_up_date: Date | null;
  website: string;
  status: CustomerStatusType;
  lead_source: LeadSourceType;
  createdAt: Date;
  updatedAt: Date;
  industry_id: number;
  user_id: number;
  image_id: number | null;
  customer_phone_numbers: IPhoneNumber[];
  user: IUser;
  industry: IIndustry;
  services: IService[];
  activities: IActivity[];
  addresses: IAddress[] | [];
}
