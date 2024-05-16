import { IndustryType } from "@/enums/industry-type";

export default interface IAccount {
  id: number;
  account_name: string | null;
  industry: IndustryType | null;
  website: string | null;
  number_of_employees: number | null;
  created_at: Date;
  updated_at: Date;
}
