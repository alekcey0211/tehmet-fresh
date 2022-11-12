import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Advantages = () => {
  return (
    <section class="max-w-fullhd mx-auto pt-4 sm:pt-8 md:pt-20 2xl:pt-10 pb-8 sm:pb-12 md:pb-14 relative overflow-hidden">
      <div class="absolute inset-0 -z-20 bg-grey2"></div>
      <div class="absolute inset-0 -right-24 md:right-0 -z-10">
        <Image
          {...{
            src: "/img/content/db9a67eaecfa45e7b5667670f7fed79e.jpg",
            alt: "gears in hand with the company logo",
            imgClassName: "block w-full h-full object-cover",
          }}
        />
      </div>
      <div class="relative mb-8 lg:mb-16">
        <div class="font-light text-2xl sm:text-4xl lg:text-5xl lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] text-white">
          НАШИ ПРЕИМУЩЕСТВА
        </div>
        <div class="hidden lg:block absolute bottom-0 right-0">
          <icons.TitleSeparator />
        </div>
      </div>
      <div class="grid gap-6 sm:gap-10 md:gap-14 mb-7 sm:mb-12 md:mb-14 px-4 sm:px-8 md:px-10">
        <div class="text-white font-light">
          <h2 class="text-lg sm:text-3xl md:text-4xl lg:text-5xl mb-2">
            Проверенные поставщики
          </h2>
          <p class="text-xs sm:text-base md:text-[22px] md:leading-[40px]">
            Комплектация под заказ любой сложности
            <br />
            Товары на складе
          </p>
        </div>
        <div class="text-white font-light">
          <h2 class="text-lg sm:text-3xl md:text-4xl lg:text-5xl mb-2">
            Быстрая доставка
          </h2>
          <p class="text-xs sm:text-base md:text-[22px] md:leading-[40px]">
            Доставка товаров со склада в срок
            <br />
            Имеется свой автотранспорт
          </p>
        </div>
        <div class="text-white font-light">
          <h2 class="text-lg sm:text-3xl md:text-4xl lg:text-5xl mb-2">
            Качественные товары
          </h2>
          <p class="text-xs sm:text-base md:text-[22px] md:leading-[40px]">
            Комплектуем объекты ГАЗПРОМ, <br />
            РОСНЕФТЬ, НОВАТЕК, ТРАНСНЕФТЬ, НЕФТИСА
          </p>
        </div>
      </div>
      <div class="grid place-items-center gap-4">
        <div class="grid md:w-[267px] md:h-[58px] text-white 2xl:bg-[rgba(0,0,0,0.5)] rounded-md sm:rounded-lg">
          <Button
            text="Заказать звонок"
            view="white"
            dialogId="a74b73421fe794532bd3f7cb4f430e750"
          />
        </div>
        <div class="hidden md:grid place-content-center">
          <div class="border-solid border-blue border-t-[26px] border-x-[17px] border-transparent border-b-0"></div>
        </div>
      </div>
    </section>
  );
};
