import ICustomer from "./customer";

export default interface ICustomerStatus {
  id: number;
  customer_id: number;
  customer: ICustomer;
  created_at: Date;
  updated_at: Date;
}
