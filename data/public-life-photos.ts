import { getJsonSync } from "../shared/file.ts";

type PublicLifePhoto = {
  src: string;
  alt: string;
  cols?: number;
  rows?: number;
};

export const getPublicLifePhotos = () => {
  const data = getJsonSync("./db/public-life-photos.json") as PublicLifePhoto[];
  return data;
};
