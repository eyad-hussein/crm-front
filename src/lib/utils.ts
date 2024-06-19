import moment from "moment";

export const parseDate = (
  date: string | Date,
  includeTime: boolean = false
): string => {
  if (includeTime) return moment(date).format("MMMM Do YYYY, h:mm a");
  return moment(date).format("MMMM Do YYYY");
};
