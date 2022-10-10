import { stringToDate } from "../shared/date.ts";

const data = [
  {
    id: "6r42ys60Zps",
    title: 'Веселые съемки в компании "Техмет"!',
    date: "07.08.2017",
  },
  {
    id: "H7rBYPxuzKA",
    title: "Видеопоздравление с 8 МАРТА!",
    date: "07.08.2017",
  },
  {
    id: "EgtFmyym940",
    title:
      "Поздравляем коллегу с Днем свадьбы! Первый дубль, как и всегда, веселый!",
    date: "07.08.2017",
  },
  {
    id: "bpRw5dFRMUE",
    title: "Второй дубль! Удалось поздравить коллегу с важным событием!",
    date: "07.08.2017",
  },
  {
    id: "oUPzS_HXFxk",
    title: "Награждение лучших сотрудников",
    date: "09.12.2018",
  },
  {
    id: "gR9iO4_DmKo",
    title: "Награждение лучших менеджеров",
    date: "09.12.2018",
  },
  {
    id: "KzJf1mPC5xQ",
    title: 'Аристократы-"техметовцы" пьют по утрам шампанское!',
    date: "03.03.2019",
  },
  {
    id: "m2u1y-WobFU",
    title: "Видео с фотосессии сотрудников",
    date: "18.04.2019",
  },
];

export const getVideo = () => {
  return data
    .map((x) => ({
      ...x,
      date: stringToDate(x.date, "dd.mm.yyyy", "."),
    }))
    .sort(({ date: dateA }, { date: dateB }) => Number(dateB) - Number(dateA))
    .map((x) => ({
      ...x,
      date: x.date.toISOString(),
      dateString: x.date.toLocaleDateString("ru"),
    }));
};
