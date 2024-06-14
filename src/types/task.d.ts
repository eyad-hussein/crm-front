import IUser from "./user";

export default interface ITask {
  id: number;
  priority: string;
  due_date: string;
  activity_id: number;
  user: IUser | null;
}
