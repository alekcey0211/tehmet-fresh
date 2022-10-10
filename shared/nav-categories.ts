import { Category } from "../data/categories.ts";

export const getNavCategories = (categories?: Category[]) => {
  return (
    categories?.filter(
      ({ parent_id, url }) =>
        parent_id === "0" &&
        Boolean(url) &&
        url !== "rasprodazha" &&
        url !== "ofitsialnyj-diler-esab"
    ) ?? []
  );
};
