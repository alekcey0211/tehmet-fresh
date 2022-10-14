import { getJsonSync } from "../shared/file.ts";
import { transformTelLink } from "../shared/link.ts";

export type Employee = {
  lastName: string;
  firstName: string;
  middleName: string;
  post: string;
  phone: string;
  email: string;
  whatsapp: string;
  icq: string;
  fio: string;
  io: string;
  whatsappLink: string;
  icqLink: string;
  phoneLink: string;
  img: string;
};

export const getEmployee = () => {
  const data = getJsonSync("./db/employee.json") as Employee[];

  return data.map((x) => ({
    ...x,
    fio: [x.lastName, x.firstName, x.middleName].filter(Boolean).join(" "),
    io: [x.firstName, x.middleName].filter(Boolean).join(" "),
    whatsappLink: transformTelLink(x.whatsapp),
    icqLink: transformTelLink(x.icq),
    phoneLink: transformTelLink(x.phone),
    img:
      [
        x.lastName?.toLowerCase(),
        x.firstName?.toLowerCase(),
        x.middleName?.toLowerCase(),
      ]
        .filter(Boolean)
        .join("-") + ".jpg",
  }));
};
