import IUser from "./user";

export default interface IMeeting {
  id: number;
  meeting_date: string;
  activity_id: number;
  user: IUser | null;
}
