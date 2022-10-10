import { Product } from "../data/products.ts";
import { Button } from "./button.tsx";

export const CatalogItem = ({
  item,
  layout,
}: {
  item: Product;
  layout: "grid" | "list";
}) => {
  return (
    <div
      class={
        layout === "list"
          ? "border-[1px] border-[#DADADA] bg-white grid sm:grid-cols-[266px_auto] grid-rows-[200px_auto] sm:grid-rows-[200px]"
          : "border-[1px] border-[#DADADA] bg-white grid grid-rows-[200px_auto] sm:grid-rows-[266px_auto]"
      }
    >
      <div class="shadow-md! relative p-5 grid grid-rows-1">
        <img
          src={item.image}
          alt={item.name}
          class="object-contain w-full h-full"
          loading="lazy"
        />
        <a
          href={`/products/${item.url}/`}
          class="absolute inset-0"
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
      <div class="py-2 px-4 flex flex-col">
        <span class="text-xs text-grey">{`Код товара: ${
          item.articleNumber ?? ""
        }`}</span>
        <a
          href={`/products/${item.url}/`}
          class="block gradient-text font-light text-base my-2"
        >
          {item.name}
        </a>
        <div class="flex-grow" />
        <span class="text-xs sm:text-sm text-blue font-light">
          {item.isExists ? "В наличии" : "Нет в наличии"}
        </span>
        {/* <span class="text-xl md:text-3xl text-blue1 font-medium" x-text="`${formatNumber(item.price)} р.`"></span> */}
        <div class="grid grid-rows-1 h-8 md:h-12 w-28 md:w-40 mt-3">
          <Button
            view="gradient"
            text="Заказать"
            onClick={() => {
              const dialog = document.getElementById(
                "form-31e08410-add4-4eeb-be6d-9375bc7cf349"
              ) as HTMLDialogElement | undefined;
              dialog?.showModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};
