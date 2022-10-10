import { transformTelLink } from "../shared/link.ts";

export type Vacancy = {
  title: string;
  link: string;
  isArchive: boolean;
  contactPhone: string;
  contactPhoneLink: string;
  contactEmail: string;
};

const data = [
  {
    title: "Бухгалтер",
    link: "buhgalter",
    isArchive: true,
    contactPhone: "+7 (343) 288-26-88 (доб.116)",
    contactEmail: "personal@tehmet.su",
  },
  {
    title: "Менеджер",
    link: "menedzher",
    isArchive: false,
    contactPhone: "+7 (343) 288-26-88 (доб.116)",
    contactEmail: "personal@tehmet.su",
  },
  {
    title: "Оператор ПК",
    link: "operator-pk",
    isArchive: false,
    contactPhone: "+7 (343) 288-26-88 (доб.116)",
    contactEmail: "personal@tehmet.su",
  },
  {
    title: "Менеджер по снабжению",
    link: "menedzher-po-snabzheniyu",
    isArchive: false,
    contactPhone: "+7 (343) 288-26-88 (доб.116)",
    contactEmail: "personal@tehmet.su",
  },
];

export const getVacancies = () => {
  return data.map((x) => ({
    ...x,
    contactPhoneLink: transformTelLink(x.contactPhone),
  })) as Vacancy[];
};
