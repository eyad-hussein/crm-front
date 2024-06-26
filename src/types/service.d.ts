import { ServiceType } from "@/enums/service-type";

export default interface IService {
  id: number;
  service_name: ServiceType;
  service_cost: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
