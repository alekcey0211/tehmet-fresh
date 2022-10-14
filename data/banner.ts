import { getJsonSync } from "../shared/file.ts";

type Banner = {
  bestPurchase: string;
  topSlider: {
    img: string;
    link: string;
  }[];
  bottomSlider: {
    img: string;
    link: string;
  }[];
};

export const getBanner = () => {
  const data = getJsonSync("./db/banner.json") as Banner;
  return data;
};
