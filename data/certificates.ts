import { getJsonSync } from "../shared/file.ts";

type Certificate = {
  src: string;
  view: {
    jpg: string;
  };
  alt: string;
  width: string;
  height: string;
};

export const getCertificates = () => {
  const data = getJsonSync("./db/certificates.json") as Certificate[];

  return data;
};
