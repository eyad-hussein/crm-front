import ICity from "./city";
import ICountry from "./country";

export default interface IAddress {
  id: number;
  address_line_1: string;
  address_line_2: string;
  city_id: number;
  state_id: number;
  country_id: number;
  postal_code: string;
  customer_id: number;
  created_at: string;
  updated_at: string;

  city: ICity;
  country: ICountry;
  state: IState;
}
