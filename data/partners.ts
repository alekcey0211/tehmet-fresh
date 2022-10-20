import { getJsonSync } from "../shared/file.ts";

export const getPartners = () => {
  const data = getJsonSync("./db/partners.json") as {
    src: string;
    name: string;
    alt: string;
  }[];
  return data.map(x => ({...x, alt: `логотип компании ${x.name}`}));
};
