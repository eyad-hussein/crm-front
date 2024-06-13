import IUser from "./user";

export default interface ITask {
  id: number;
  priority: string;
  due_date: string;
  user_id: number;
  activity_id: number;
  user: IUser | null;
}
