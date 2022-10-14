import { getJsonSync } from "../shared/file.ts";

export const getCities = () => {
  const data = getJsonSync("./db/cities.json");
  return data as string[];
};
