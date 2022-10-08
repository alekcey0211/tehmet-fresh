const fio = "Данилова Виктория Сергеевна";

export const bestMonthManager = () => {
  return {
    fio,
    img: `/img/employee/${fio.toLowerCase().split(" ").join("-")}.jpg`,
  };
};
