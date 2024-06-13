import IUser from "./user";

export default interface IMeeting {
  id: number;
  meeting_date: string;
  user_id: number;
  activity_id: number;
  user: IUser | null;
}
