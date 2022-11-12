import GeographySalesDropdown from "../../../islands/GeographySalesDropdown.tsx";
import { getCities } from "../../../data/cities.ts";
import { getContacts } from "../../../data/contacts.ts";
import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const GeographySales = () => {
  const cities = getCities();
  const contacts = getContacts({ isPage: true });

  return (
    <section class="py-4 lg:py-20 relative z-40">
      <div class="max-w-fullhd mx-auto">
        <div class="relative mb-2 lg:mb-16">
          <div class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px]">
            ГЕОГРАФИЯ ПРОДАЖ
          </div>
          <div class="hidden lg:block absolute bottom-0 right-0">
            <icons.TitleSeparator />
          </div>
        </div>
      </div>
      <div class="px-4 sm:px-8 lg:px-10">
        <div class="max-w-fullhd mx-auto grid">
          <div class="lg:bg-light-blue lg:pt-8 xl:pt-12 lg:pb-7 lg:pr-16 xl:pr-24 lg:pl-16 xl:pl-32 rounded-2xl grid gap-x-12 gap-y-4 mb-4 lg:mb-12 justify-items-start lg:justify-between w-full max-w-hero mx-auto box-border">
            <span class="col-start-1 text-xs sm:text-xl text-dark-blue">
              На сегодняшний день в нашем активе три действующих склада:&nbsp;
              <br class="hidden sm:block" />в Екатеринбурге, Сургуте и Новом
              Уренгое.
            </span>
            <div class="col-start-1">
              <div class="grid lg:w-[281px] text-white">
                <Button
                  href="/delivery"
                  text="Условия доставки"
                  view="gradient"
                />
              </div>
            </div>
            <div class="lg:col-start-2 lg:row-start-1 lg:row-end-3 grid gap-2 lg:gap-3 place-content-center lg:place-content-end">
              {contacts.map((item) => (
                <div class="flex items-center gap-1 sm:gap-2 text-xs sm:text-[18px] ">
                  <div class="shrink-0 hidden sm:block text-dark-blue">
                    <icons.Location />
                  </div>
                  <div class="shrink-0 sm:hidden">
                    <icons.LocationGradientMini />
                  </div>

                  <span class="gradient-text sm:text-dark-blue">
                    {item.city}
                  </span>
                  <a
                    class="whitespace-nowrap gradient-text sm:text-dark-blue"
                    href={item.telLink}
                  >
                    {item.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div class="flex justify-center">
            <span class="underline text-blue1 text-lg md:text-3xl hidden lg:block p-3">
              «Техмет-Урал» обеспечивает дистрибуцию во все регионы&nbsp;России:
            </span>
            <GeographySalesDropdown
              containerClassName="relative lg:hidden"
              listClassName="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-[100px] font-light text-blue1 text-base md:text-lg md:leading-[35px] max-w-[817px] mx-auto"
              cities={cities}
            />
          </div>
          <div class="lg:hidden row-start-1 w-fit mx-auto sm:mr-0">
            <span class="text-3xl sm:text-4xl leading-none gradient-text">
              более
            </span>
            <span class="text-4xl sm:text-5xl leading-none gradient-text whitespace-nowrap">
              1 000 000
            </span>
            <span class="text-3xl sm:text-4xl leading-none gradient-text">
              км
            </span>
            <span class="block text-sm sm:text-lg leading-none text-dark-blue">
              пути доставленного товара по всей России
            </span>
          </div>
          <div class="grid gap-8 xl:grid-cols-[638px_1fr] row-start-2 lg:row-auto">
            <Image
              {...{
                src: "/img/content/97b3dba279a54f2ca28326d274e021eb.jpg",
                alt: "a map showing the offices and the geography of sales",
                imgClassName: "block w-full",
              }}
            />
            <ul class="hidden lg:block columns-4 xl:columns-3 2xl:columns-4 font-light text-blue1 text-lg">
              {cities.map((city) => (
                <li class="whitespace-nowrap">{city}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
