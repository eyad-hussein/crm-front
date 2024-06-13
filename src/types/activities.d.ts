import IActivity from "./activity";

export default interface IActivities {
  meetings: IActivity[] | [];
  notes: IActivity[] | [];
  tasks: IActivity[] | [];
}
