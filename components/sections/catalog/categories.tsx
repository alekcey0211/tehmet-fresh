import { Category } from "../../../data/categories.ts";
import CatalogItem from "../../../islands/CatalogItem.tsx";
import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";

export const CatalogCategories = ({
  categories,
}: {
  categories: Category[];
}) => {
  return (
    <div class="grid gap-5 pr-4 md:pr-10 pb-8 md:pb-20 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 bg-light-blue">
      {categories.map((category) => (
        <CatalogItem {...category} />
      ))}
      <div class="grid gap-4 content-end justify-center">
        <div class="grid h-14 grid-cols-[262px_auto] items-center grid-rows-1 gap-8">
          <Button
            view="gradient"
            text="Скачать каталог"
            href="/files/katalognew.pdf"
            target="_blank"
          />
          <icons.GradientArrowRight />
        </div>
        <div class="grid h-14 grid-cols-[262px_auto] items-center grid-rows-1 gap-8">
          <Button
            view="gradient"
            text="Каталог ESAB"
            href="/files/svar_mat_esab_2017.pdf"
            target="_blank"
          />
          <icons.GradientArrowRight />
        </div>
      </div>
    </div>
  );
};
