import ICustomer from "./customer";

export default interface ICustomerState {
  id: number;
  customer_id: number;
  customer: ICustomer;
  created_at: Date;
  updated_at: Date;
}
