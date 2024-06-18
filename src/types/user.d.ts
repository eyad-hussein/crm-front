import IDepartment from "./department";
import IPhoneNumber from "./phone-number";

export default interface IUser {
  id: number;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  password: string | null;
  title: string | null;
  email: string | null;
  gender: string | null;
  manager_id: number | null;
  department_id: number | null;
  created_at: Date;
  updated_at: Date;
  user_phone_numbers: IPhoneNumber[] | [];
  department: IDepartment;
  manager: IUser | null;
}
