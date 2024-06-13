import IUser from "./user";

export default interface INote {
  id: number;
  user_id: number;
  activity_id: number;
  user: IUser | null;
}
