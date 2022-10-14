import { getJsonSync } from "../shared/file.ts";

type Defaulter = {
  companyName: string;
  city: string;
  related: string;
  comment: string;
};

export const getDefaulter = () => {
  const data = getJsonSync("./db/defaulter.json") as Defaulter[];

  return data;
};
