import moment from "moment";

export const convertToCamelCase = (str: string): string => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

export const convertSnakeToPascalWithSpaces = (
  snakeCaseString: string
): string => {
  const words = snakeCaseString.split("_");
  const pascalWithSpaces = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return pascalWithSpaces;
};

export const parseDate = (
  date: string | Date,
  includeTime: boolean = false
): string => {
  if (includeTime) return moment(date).format("MMMM Do YYYY, h:mm a");
  return moment(date).format("MMMM Do YYYY");
};
