import { ActivityType } from "@/enums";
import IMeeting from "./meeting";
import INote from "./note";
import ITask from "./task";
import IUser from "./user";

export default interface IActivity {
  id: number;
  customer_id: number;
  user_id: number;
  activity_type: ActivityType;
  title: string;
  description: string;
  meeting: IMeeting | null;
  note: INote | null;
  task: ITask | null;
  createdAt: string;
  updatedAt: string;
  user: IUser | null;
}
