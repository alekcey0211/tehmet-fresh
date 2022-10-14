import { stringToDate } from "../shared/date.ts";
import { getJsonSync } from "../shared/file.ts";

type Video = {
  id: string;
  title: string;
  date: string;
  dateString: string;
};

export const getVideo = () => {
  const data = getJsonSync("./db/video.json") as Video[];

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
