import GeographySalesDropdown from "../../../islands/GeographySalesDropdown.tsx";
import { contacts } from "../../../shared/contacts.ts";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const GeographySales = () => {
  return (
    <section class="p-4 md:p-10 relative z-40">
      <div class="max-w-fullhd mx-auto">
        <div class="grid gap-y-4 md:grid-cols-2 mb-8 sm:mb-10">
          <Image
            {...{
              src: "/img/content/97b3dba279a54f2ca28326d274e021eb.jpeg",
              alt: "a map showing the offices and the geography of sales",
              imgClassName:
                "block w-full max-h-[500px] object-contain object-left",
            }}
          />
          <div>
            <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-right text-dark-blue sm:mb-4 md:mb-12">
              ГЕОГРАФИЯ ПРОДАЖ
            </h1>
            <p class="text-xs sm:text-xl md:text-2xl sm:leading-10 mb-10 md:mb-20 text-right">
              На сегодняшний день в нашем активе <br class="hidden sm:block" />
              три действующих склада: <br class="hidden sm:block" />в
              Екатеринбурге, Сургуте и Новом Уренгое.
            </p>
            <div class="flex flex-wrap justify-center md:justify-end gap-x-6 2xl:gap-x-16 gap-y-8 ">
              {contacts({ isPage: true }).map((item) => (
                <div class="grid place-content-center gap-2">
                  <div class="flex items-center gap-2">
                    <div class="shrink-0 hidden sm:block text-dark-blue">
                      <icons.locationGradient />
                    </div>
                    <div class="shrink-0 sm:hidden">
                      <icons.locationGradientMini />
                    </div>
                    <span class="text-xs sm:text-[28px] sm:leading-[34px] gradient-text">
                      {item.city}
                    </span>
                  </div>
                  <a
                    class="text-xs sm:text-[22px] sm:leading-[26px] gradient-text whitespace-nowrap"
                    href={item.telLink}
                  >
                    {item.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <GeographySalesDropdown
            containerClassName="relative"
            listClassName="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-[100px] font-light text-blue1 text-base md:text-lg md:leading-[35px] mx-auto px-10"
          />
        </div>
      </div>
    </section>
  );
};
