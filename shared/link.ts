export const transformTelLink = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s/g, "")
    .replace("добавочный", ",")
    .replace("доб.", ",")
    .replace("доб", ",")
    .replace(/[+()-]/g, "");
