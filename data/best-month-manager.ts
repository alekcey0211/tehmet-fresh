const fio = "Данилова Виктория Сергеевна";

export const getBestMonthManager = () => {
  return {
    fio,
    img: `/img/employee/${fio.toLowerCase().split(" ").join("-")}.jpg`,
  };
};
