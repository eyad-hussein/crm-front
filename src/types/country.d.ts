import { CountryType } from "@/enums/country-type";

export default interface ICountry {
  id: number;
  country_name: CountryType;
  createdAt: Date;
  updatedAt: Date;
}
