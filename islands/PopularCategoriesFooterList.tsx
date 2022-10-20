import { useState, useEffect } from "preact/hooks";
import { Spin } from "../components/spin.tsx";
import { fetchCategoriesPopular } from "../data/categories-popular.ts";
import { Category } from "../routes/data/categories.ts";

export default function PopularCategoriesFooterList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategoriesPopular().then((categories) => {
      setData(categories);
      setIsLoading(false);
    });
  }, []);

  return (
    <ul class="grid gap-1 sm:gap-2 text-[10px] sm:text-[18px] font-light text-dark-blue">
      {isLoading ? (
        <Spin />
      ) : (
        <>
          {data.map((category) => (
            <li class="whitespace-nowrap">
              <a href={`/catalog/${category.url}`}>{category.name}</a>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
