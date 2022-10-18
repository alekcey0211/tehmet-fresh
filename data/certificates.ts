import { getJsonSync } from "../shared/file.ts";

export type Certificate = {
  original: string;
  preview: string;
  alt?: string;
  width?: string;
  height?: string;
};

export const getCertificates = () => {
  const data = getJsonSync("./db/certificates.json") as Certificate[];

  return data;
};
