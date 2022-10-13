import { Product } from "../../../data/products.ts";
import { formatNumber } from "../../../shared/number.ts";
import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";

export const ProductInfo = ({
  name,
  articleNumber,
  annotation,
  brand,
  description,
  image,
  price,
}: Product) => {
  return (
    <div class="px-4 md:px-10 lg:px-0">
      <h1 class="gradient-text flex text-2xl">{name}</h1>
      <span class="text-base text-blue1">{`Код товара: ${
        articleNumber ?? ""
      }`}</span>
      <div class="grid lg:grid-cols-[440px_344px] gap-5 mt-6">
        <div class="grid grid-rows-1 aspect-square border-[1px] border-blue p-5 max-h-48 sm:max-h-[9999px]">
          <img src={image} alt={name} class="object-contain w-full h-full" />
        </div>
        <div class="border-[1px] border-blue1 p-5 col-start-1 sm:col-start-2 col-span-2 sm:col-span-1">
          {/* // TODO: Реализовать кнопку "Добавить в смету" */}
          {/* <button class="flex items-center gap-1 md:gap-2 text-blue hover:text-blue1 mb-4 md:mb-8">
            Добавить в смету
            <icons.FileArrowDown />
          </button> */}
          <span class="text-xl md:text-3xl font-medium">
            {price ? `${formatNumber(price)} р.` : <>&nbsp;</>}
          </span>
          <div class="grid grid-rows-1 h-8 md:h-12 w-32 md:w-40 mt-3 mb-4 md:mb-8">
            <Button
              view="gradient"
              text="Заказать"
              dialogId="form-31e08410-add4-4eeb-be6d-9375bc7cf349"
            />
          </div>
          <div class="grid text-base md:text-lg text-blue underline gap-1 mb-4 md:mb-12">
            <span>Сургут на складе: &#8212;</span>
            <span>Н.Уренгой на складе: &#8212;</span>
            <span>Екатеринбург на складе: &#8212;</span>
          </div>
          <a
            class="text-dark-blue text-base md:text-lg flex items-center gap-1 md:gap-2"
            href="/delivery"
          >
            Условия доставки
            <icons.ArrowRight />
          </a>
        </div>
        {annotation && (
          <div
            class={`p-5 bg-light-blue col-span-2 lg:col-span-1 ${
              !brand && "lg:col-span-2"
            }`}
          >
            <span class="text-blue mb-2">Описание и характеристики</span>
            <p dangerouslySetInnerHTML={{ __html: annotation }} />
          </div>
        )}
        {brand && (
          <div
            class={`p-5 bg-[#DADADA] col-span-2 lg:col-span-1  ${
              !annotation && "lg:col-span-2"
            }`}
          >
            <span class="mr-2">Производитель:</span>
            <span class="gradient-text">{brand}</span>
          </div>
        )}
        {description && (
          <div
            class="c-prav col-span-2 border-[1px] border-blue1 p-5 overflow-hidden"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  );
};
