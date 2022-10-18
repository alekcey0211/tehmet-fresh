import { getJsonSync } from "../shared/file.ts";
import { transformTelLink } from "../shared/link.ts";

export type Vacancy = {
  title: string;
  link: string;
  isArchive: boolean;
  contactPhone: string;
  contactPhoneLink: string;
  contactEmail: string;
};

export const getVacancies = () => {
  const data = getJsonSync("./db/vacancies.json") as Vacancy[];
  return data.map((x) => ({
    ...x,
    contactPhoneLink: transformTelLink(x.contactPhone),
  }));
};
