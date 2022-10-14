import { getJsonSync } from "../shared/file.ts";

export const getPartners = () => {
  const data = getJsonSync("./db/partners.json") as {
    src: string;
    alt: string;
  }[];
  return data;
};
