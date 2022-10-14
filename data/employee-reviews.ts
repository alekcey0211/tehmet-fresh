import { getJsonSync } from "../shared/file.ts";

export const getEmployeeReviews = () => {
  const data = getJsonSync("./db/employee-reviews.json") as {
    fio: string;
    review: string;
  }[];
  return data;
};
