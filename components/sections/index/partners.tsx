import { partners } from "../../../shared/partners.ts";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";
import { PartnersSlider } from "../../partners-slider.tsx";

export const Partners = () => {
  return (
    <>
      <section class="hidden md:block py-4 sm:py-8 lg:py-20 bg-light-blue max-w-fullhd mx-auto">
        <div class="relative mb-2 lg:mb-16">
          <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase sm:mb-4 lg:mb-0">
            НАШИ ПАРТНЕРЫ
          </h1>
          <div class="hidden lg:block absolute bottom-0 right-0">
            <icons.TitleSeparator />
          </div>
        </div>
        <div class="grid grid-cols-4 place-items-center gap-x-6 gap-y-10 px-10">
          {partners().map((partner) => (
            <Image {...partner} imgClassName="block max-w-full" />
          ))}
        </div>
      </section>

      <section class="p-4 sm:p-8 md:hidden">
        <div class="max-w-fullhd mx-auto">
          <h1 class="text-dark-blue text-lg sm:text-4xl font-light gradient-text uppercase mb-2 text-right">
            Наши партнеры
          </h1>
          <p class="text-sm sm:text-lg font-light gradient-text mb-2 text-blue text-right">
            Популярные производители сварочного
            <br />
            оборудования в России и мире
          </p>
          <PartnersSlider />
        </div>
      </section>
    </>
  );
};
