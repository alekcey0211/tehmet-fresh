import { getJsonSync } from "../shared/file.ts";
import { transformTelLink } from "../shared/link.ts";

export type Contact = {
  title: string;
  city: string;
  phone: string;
  address: string;
  workMode: string;
  email: string;
  coords: number[];
  contactPageOnly: boolean;
  telLink: string;
};

export const getContacts = ({ isPage = false }: { isPage?: boolean } = {}) => {
  const data = getJsonSync("./db/contacts.json") as Contact[];

  let items = data.map(({ address, coords, phone, ...r }) => ({
    ...r,
    address: address
      .split(", ")
      .map((y) => y.replace(/\s/, "&nbsp;"))
      .join(", "),
    coords,
    phone,
    telLink: `tel:${transformTelLink(phone)}`,
  }));

  if (isPage) {
    items = [...items.filter((item) => !item.contactPageOnly)];
  }

  return items;
};
