import CatalogSearch from "../islands/CatalogSearch.tsx";
import { getContacts } from "../data/contacts.ts";
import { Button } from "./button.tsx";
import { icons } from "./icons.tsx";
import { Image } from "./image.tsx";

export function HeaderCompact() {
  return (
    <header class="pt-3 md:pt-10 pb-2 md:pb-4 z-40 px-4 md:px-10 sticky top-0 bg-white header-nav-shadow lg:!shadow-none lg:relative">
      <div class="max-w-fullhd mx-auto grid gap-2">
        <div class="grid lg:gap-y-4 lg:grid-cols-2">
          <div class="flex-1 grid gap-2">
            <div class="grid -xs:grid-cols-[1fr_auto] grid-cols-[202px_auto] sm:grid-cols-[340px_auto] lg:grid-cols-none gap-x-3 justify-between items-start">
              <a href="/">
                <Image
                  {...{
                    src: "/logo-text.png",
                    alt: "Оборудование для газопроводов и нефтепроводов, материалы для сварочных работ - Техмет",
                    imgClassName: "block",
                    baseFormat: "png",
                    isLazy: false,
                  }}
                />
              </a>
              <div class="grid lg:hidden gap-1 md:gap-3">
                <div class="grid max-w-[140px] sm:max-w-[228px] md:w-[228px]">
                  <Button
                    view="gradient"
                    text="Обратная связь"
                    dialogId="form-effb7861-5ab1-469e-8091-fca64e21430b"
                  />
                </div>
                <div class="grid max-w-[140px] sm:max-w-[228px] md:w-[228px]">
                  <Button
                    view="gradient"
                    text="Заказать звонок"
                    dialogId="a74b73421fe794532bd3f7cb4f430e750"
                  />
                </div>
              </div>
            </div>
            <div class="flex gap-3">
              <button
                class="lg:hidden shrink-0"
                data-dialog-for="form-3b57f227-2967-466b-baf7-51d758ec184b"
              >
                <icons.MenuHamburger />
              </button>
              <div class="grid w-full lg:max-w-[674px]">
                <CatalogSearch />
              </div>
            </div>
          </div>
          <div class="flex flex-col xl:flex-row justify-between items-start flex-1 max-w-[700px] gap-x-4 justify-self-end">
            <button class="hidden lg:flex items-center gap-2 flex-shrink-0 h-10">
              {/* <icons.Eye />
					<span class="text-sm text-grey leading-none">
						версия для слабовидящих
					</span> */}
            </button>
            <div class="hidden lg:flex flex-col h-full items-start">
              {getContacts({ isPage: true }).map((item) => (
                <div class="flex items-center gap-x-2 text-[24px]">
                  <icons.LocationGradient />
                  <span class="gradient-text">{item.city}</span>
                  <a
                    class="gradient-text whitespace-nowrap"
                    href={item.telLink}
                  >
                    {item.phone}
                  </a>
                </div>
              ))}
              <div class="flex-1"></div>
              <div class="grid items-center h-[60px] w-[226px]">
                <Button
                  view="gradient"
                  text="Обратная связь"
                  dialogId="form-effb7861-5ab1-469e-8091-fca64e21430b"
                  className="h-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
