import { ActivityType } from "@/enums";

export default interface IActivity {
  id: number;
  customer_id: number;
  activity_type: ActivityType;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
