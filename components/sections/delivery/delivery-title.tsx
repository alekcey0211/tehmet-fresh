import { icons } from "../../icons.tsx";

export const DeliveryTitle = () => {
  return (
    <section class="py-4 sm:py-8 lg:py-16 max-w-fullhd mx-auto">
      <div class="relative mb-2 lg:mb-16">
        <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase sm:mb-4 lg:mb-0">
          ДОСТАВКА
        </h1>
        <div class="hidden lg:block absolute bottom-0 right-0">
          <icons.TitleSeparator />
        </div>
      </div>
      <p class="max-w-[1149px] ml-auto text-lg md:text-2xl md:leading-[50px] text-right mr-4 sm:mr-8 lg:mr-[85px] text-blue1">
        Компания "Техмет" сотрудничает с различными транспортно-экспедиционными
        компаниями, <br class="hidden xl:block" />
        что позволяет производить доставку продукции в кратчайшие сроки и по
        минимальным ценам.
      </p>
    </section>
  );
};
