import IUser from "./user";

export default interface INote {
  id: number;
  activity_id: number;
  user: IUser | null;
}
