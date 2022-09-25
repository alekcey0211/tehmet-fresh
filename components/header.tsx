import { contacts } from "../shared/contacts.ts";
import { Button } from "./button.tsx";
import { icons } from "./icons.tsx";
import { Image } from "./image.tsx";

export function Header() {
  return (
    <header class="pt-3 md:pt-10 z-40 px-4 md:px-10 sticky top-0 bg-white header-nav-shadow lg:!shadow-none md:relative">
      <div class="max-w-fullhd mx-auto grid md:block -xs:grid-cols-[1fr_auto] grid-cols-[202px_auto] sm:grid-cols-[340px_auto] md:grid-cols-none gap-x-3 justify-between items-start">
        <div class="flex justify-between mb-2 md:mb-10 gap-2 lg:gap-0">
          <a href="/" class="max-w-[340px] lg:max-w-none">
            <span class="sr-only">Логотип компании</span>
            <Image
              {...{
                src: "img/logo-text.png",
                alt: "Оборудование для газопроводов и нефтепроводов, материалы для сварочных работ - Техмет",
                imgClassName: "block",
                baseFormat: "png",
                isLazy: false,
              }}
            />
          </a>
          <div class="hidden md:grid gap-1 lg:gap-0">
            {contacts({isPage: true}).map((item) => (
              <div class="flex items-center gap-2 text-xl lg:text-2xl">
                <icons.locationGradient />
                <span class="gradient-text">{item.city}</span>
                <a
                  class="gradient-text whitespace-nowrap"
                  href={`tel:${item.telLink}`}
                >
                  {item.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div class="grid gap-1 md:gap-3 mb-2 md:mb-4 lg:mb-20">
          <div class="md:flex justify-between items-center">
            <span class="hidden md:inline text-2xl lg:text-3xl text-grey">
              КОМЛЕКТАЦИЯ ОБЪЕКТОВ ЛЮБОЙ
            </span>
            <div class="grid max-w-[140px] sm:max-w-[228px] md:w-[228px]">
              <Button text="Обратная связь" view="gradient" dialogId="form-effb7861-5ab1-469e-8091-fca64e21430b" />
            </div>
          </div>
          <div class="md:flex justify-between items-center">
            <span class="hidden md:inline text-2xl lg:text-3xl text-grey">
              СЛОЖНОСТИ ПО ВСЕЙ РОССИИ
            </span>
            <div class="grid max-w-[140px] sm:max-w-[228px] md:w-[228px]">
              <Button text="Заказать звонок" view="gradient" dialogId="a74b73421fe794532bd3f7cb4f430e750" />
            </div>
          </div>
        </div>
        <div class="hidden md:flex justify-end mb-1">
          <button class="flex items-center gap-2">
            <icons.eye />
            <span class="text-sm text-grey2 leading-none">
              версия для слабовидящих
            </span>
          </button>
        </div>
        <div class="flex gap-3 justify-end mb-2 md:mb-8 col-span-2">
          <button
            class="lg:hidden shrink-0"
            data-dialog-for="form-3b57f227-2967-466b-baf7-51d758ec184b"
          >
            <span class="sr-only">Открыть меню</span>
            <icons.menuHamburger />
          </button>
          <div class="grid w-full lg:max-w-[674px]">
            {/* {% include "shared/catalog-search.njk" %} */}
          </div>
        </div>
        <div class="hidden md:flex absolute bottom-0 left-0 right-0 -z-10 justify-center pr-[130px]">
          <Image
            {...{
              src: "img/content/8e44cfdba3144a6cbbf4be610e3545d6.png",
              alt: "На картинке изображена часть глобуса с отображением завода на суше",
              imgClassName: "block",
              baseFormat: "png",
              isLazy: false,
              showBreakpoint: "md",
            }}
          />
        </div>
      </div>
    </header>
  );
}
