import { Category } from "../routes/data/categories.ts";

export const getCategoryPath = ({
  category,
  categories,
}: {
  category: Category;
  categories: Category[];
}) => {
  const path: Category[] = [];
  const findPath = (category: Category) => {
    const parent = categories.find(({ id }) => id === category.parent_id);
    if (!parent) return;
    path.unshift(parent);
    if (parent.parent_id === "0") {
      return;
    }
    findPath(parent);
  };
  findPath(category);
  return path;
};
