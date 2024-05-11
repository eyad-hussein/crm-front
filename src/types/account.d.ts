import { IndustryType } from "@/enums/industry-type";

export default interface IAccount {
  id: number;
  account_name: string | null;
  industry: IndustryType | null;
  created_at: Date;
  updated_at: Date;
}
