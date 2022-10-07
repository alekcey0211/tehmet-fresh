import { transformTelLink } from "./link.ts";

const data = [
  {
    title: "Головной офис",
    city: "Екатеринбург",
    phone: "+7 (343) 288-26-88",
    address: "620085, г. Екатеринбург, Аптекарская, 47, помещение 22",
    workMode: "пн-пт с 9.00 до 18.00",
    email: "info@tehmet.su",
    coords: [56.76714, 60.605847],
  },
  {
    title: "Склад в Екатеринбурге",
    city: "Екатеринбург",
    phone: "+7 (343) 288-26-88 доб. 115",
    address: "620085, г. Екатеринбург, Колхозников 59А/2, склад № 11",
    workMode: "пн-пт с 9.00 до 17.30",
    email: "info@tehmet.su",
    coords: [56.750759, 60.610482],
    contactPageOnly: true,
  },
  {
    title: "Филиал в Новом Уренгое",
    city: "Н.Уренгой",
    phone: "+7 (3494) 91-77-14",
    address: "629305, г. Новый Уренгой, Таежная, 204/8А",
    workMode: "пн-пт с 9.00 до 17.00",
    email: "info@tehmet.su",
    coords: [66.078771, 76.603683],
  },
  {
    title: "Филиал в Сургуте",
    city: "Сургут",
    phone: "+7 (3462) 37-15-71",
    address: "628407, г. Сургут, Инженерная д.15",
    workMode: "пн-пт с 9.00 до 18.00",
    email: "info@tehmet.su",
    coords: [61.246375, 73.492683],
  },
];

export const contacts = ({ isPage = false }: { isPage?: boolean } = {}) => {
  let items = data.map(({ address, coords, phone, ...r }) => ({
    ...r,
    address: address
      .split(", ")
      .map((y) => y.replace(/\s/, "&nbsp;"))
      .join(", "),
    coords: coords.join(","),
    phone,
    telLink: `tel:${transformTelLink(phone)}`,
  }));

  if (isPage) {
    items = [...items.filter((item) => !item.contactPageOnly)];
  }

  return items;
};
