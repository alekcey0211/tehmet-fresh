import { getJsonSync } from "../shared/file.ts";

export const getBestMonthManager = () => {
  const { fio } = getJsonSync("./db/best-month-manager.json") as {
    fio: string;
  };

  return {
    fio,
    img: `/img/employee/${fio.toLowerCase().split(" ").join("-")}.jpg`,
  };
};
