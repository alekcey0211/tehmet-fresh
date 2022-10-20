import BrandsFooterList from "../islands/BrandsFooterList.tsx";
import { getContacts } from "../data/contacts.ts";
import { Button } from "./button.tsx";
import { icons } from "./icons.tsx";
import PopularCategoriesFooterList from "../islands/PopularCategoriesFooterList.tsx";

export const Footer = () => {
  return (
    <footer class="pt-5 pb-28">
      <div class="px-4 sm:px-8 lg:px-10">
        <div class="max-w-fullhd mx-auto">
          <div class="relative grid gap-y-10 lg:gap-y-16 gap-x-2 xl:gap-5 grid-cols-[1fr_auto] xl:grid-cols-[1fr_322px_326px] pb-20 lg:pb-[200px] mb-5 border-b-[1px] border-grey">
            <div class="col-span-2 xl:col-auto">
              <p class="mb-6 lg:mb-12 text-dark-blue text-xs sm:text-[22px]">
                Свяжитесь с нами
              </p>
              <ul class="grid gap-4 sm:gap-8 text-xs sm:text-[18px] font-light text-dark-blue">
                {getContacts({ isPage: true }).map((item) => (
                  <li class="grid gap-1">
                    <div class="grid items-center grid-cols-[max-content_1fr] gap-2">
                      <icons.Address />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `Адрес: ${item.address}`,
                        }}
                      />
                    </div>
                    <div class="grid items-center grid-cols-[max-content_1fr] gap-2">
                      <icons.Phone />
                      <span>
                        Телефон:
                        <a class="whitespace-nowrap" href={item.telLink}>
                          {item.phone}
                        </a>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p class="mb-4 lg:mb-12 text-dark-blue text-xs sm:text-[22px]">
                Производители и бренды:
              </p>
              <BrandsFooterList />
            </div>
            <div>
              <p class="mb-4 lg:mb-12 text-dark-blue text-xs sm:text-[22px]">
                Популярные категории:
              </p>
              <PopularCategoriesFooterList />
              {/* <ul class="grid gap-1 sm:gap-2 text-[10px] sm:text-[18px] font-light text-dark-blue">
                {getPopularCategories().map((category) => (
                  <li class="whitespace-nowrap">
                    <a href={`/catalog/${category.url}`}>{category.name}</a>
                  </li>
                ))}
              </ul> */}
            </div>
            <div class="absolute bottom-0 right-0 w-32 sm:w-48 lg:w-64 xl:w-[301px] grid">
              <icons.LogoGrey />
            </div>
          </div>
          <div class="flex flex-wrap gap-y-2 sm:gap-y-4 gap-x-10 items-center">
            <Button
              view="gradient"
              text="Подписаться на автоматические поставки"
              dialogId="form-effb7861-5ab1-469e-8091-fca64e21430b"
            />
            {/* // TODO: сделать pdf файл в /static/files и вставить на него ссылку */}
            <a href="#" class="font-light text-xs sm:text-lg text-grey2">
              Политика о защите персональных данных
            </a>
            {/* // TODO: нет понимания куда ведет эта ссылка */}
            {/* <a href="#" class="font-light text-xs sm:text-lg text-grey2">
              Подписаться на рассылки
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
