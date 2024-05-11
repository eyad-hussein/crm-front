export default interface IUser {
  id: number;
  first_name: string | null;
  last_name: string | null;
  user_name: string | null;
  password: string | null;
  title: string | null;
  email: string | null;
  manager_id: number | null;
  created_at: Date;
  updated_at: Date;
}
