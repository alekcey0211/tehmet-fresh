import { icons } from "../components/icons.tsx";
import { Category, fetchCategories } from "../data/categories.ts";
import { useState, useEffect } from "preact/hooks";
import { getNavCategories } from "../shared/nav-categories.ts";
import { getContacts } from "../data/contacts.ts";
import { Button } from "../components/button.tsx";
import { Image } from "../components/image.tsx";
import { navItems } from "../shared/nav-items.ts";

export default function CategoriesNavDialog({
  pathname,
}: {
  pathname: string;
}) {
  const [data, setData] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    fetchCategories().then((categories) => {
      const navCategories = getNavCategories(categories);
      setData(navCategories);
    });
  }, []);

  return (
    <>
      <dialog
        id="form-3b57f227-2967-466b-baf7-51d758ec184b"
        class="nav-dialog p-0 !max-h-full !w-auto !h-auto !ml-0 !mt-0 !mb-0 top-0 bottom-0 right-16 sm:right-20"
      >
        <button
          type="button"
          data-close
          class="fixed top-3 right-3 rounded-2xl grid place-content-center w-10 h-10 sm:w-16 sm:h-16"
        >
          <icons.X stroke="#fff" strokeWidth={1} width={40} height={40} />
        </button>
        <div class="py-4 pl-8">
          <div class="mb-4 grid gap-1">
            {getContacts({ isPage: true }).map((item) => (
              <div class="flex items-center gap-x-1 text-xs sm:text-lg">
                <div class="flex-shrink-0">
                  <icons.LocationGradientMini />
                </div>
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
          <div class="grid justify-start gap-2 mb-6">
            <Button
              view="gradient"
              text="Обратная связь"
              dialogId="form-effb7861-5ab1-469e-8091-fca64e21430b"
            />
            <Button
              view="gradient"
              text="Заказать звонок"
              dialogId="a74b73421fe794532bd3f7cb4f430e750"
            />
          </div>
          <ul class="text-2xl sm:text-4xl font-light text-grey">
            {navItems.map((item) => {
              const isActive = pathname === item.link;
              if (item.link === "/catalog") {
                return (
                  <li class="grid items-center hover:text-dark-blue border-b-[1px] border-[#DADADA] sm:h-[60px]">
                    <button
                      class={`grid items-center h-full pr-4 nav-item-link text-2xl sm:text-4xl font-light text-grey text-left ${
                        isActive && "gradient-text"
                      }`}
                      data-dialog-for="form-e3c8b62a-da51-4332-8036-0e1abf5ebcce"
                      data-close-other="true"
                    >
                      {item.text}
                    </button>
                  </li>
                );
              }
              return (
                <>
                  <li class="grid items-center hover:text-dark-blue border-b-[1px] border-[#DADADA] sm:h-[60px]">
                    <a
                      href={item.link}
                      class={`grid items-center h-full pr-4 nav-item-link ${
                        isActive && "gradient-text"
                      }`}
                    >
                      {item.text}
                    </a>
                  </li>
                  {item.items?.map((child) => {
                    const isChildActive = pathname === item.link + child.link;
                    if (child.link === "") return null;
                    return (
                      <li class="grid items-center hover:text-dark-blue border-b-[1px] border-[#DADADA] sm:h-[60px]">
                        <a
                          href={item.link + child.link}
                          class={`grid items-center h-full pr-4 nav-item-link ${
                            isChildActive && "gradient-text"
                          } `}
                        >
                          {child.text}
                        </a>
                      </li>
                    );
                  })}
                </>
              );
            })}
          </ul>
        </div>
      </dialog>

      <dialog
        id="form-e3c8b62a-da51-4332-8036-0e1abf5ebcce"
        class="nav-dialog p-0 !max-h-full !w-auto !h-auto !ml-0 !mt-0 !mb-0 top-0 bottom-0 right-16 sm:right-20"
      >
        <button
          type="button"
          data-close
          class="fixed top-3 right-3 rounded-2xl grid place-content-center w-10 h-10 sm:w-16 sm:h-16"
        >
          <icons.X width={40} height={40} strokeWidth={1} stroke="#fff" />
        </button>
        <div class="min-h-[128px] bg-light-blue xs:pr-24 grid gap-4 relative pt-8 pl-4 pb-3">
          <div class="absolute bottom-0 right-0 w-20 grid">
            <icons.LogoGrey />
          </div>
          <h3 class="uppercase font-light text-xl text-blue1">
            {category?.name ?? "КАТАЛОГ"}
          </h3>
          {category && (
            <div class="flex justify-between flex-wrap gap-2 pr-24 xs:pr-0">
              <button
                class="font-light text-sm flex flex-wrap items-center gap-x-1 gap-y-2 text-dark-blue"
                onClick={() => {
                  setCategory(undefined);
                }}
              >
                <icons.ArrowLeft />
                Каталог
              </button>
              <a
                class="text-dark-blue underline font-light text-sm"
                href={`/catalog/${category.url}`}
              >
                Все товары этой категории
              </a>
            </div>
          )}
        </div>
        {!category && (
          <>
            <ul class="pl-4 pt-4 bg-white max-w-[440px] mb-4">
              {data.map((item) => (
                <li class="grid items-center border-b-[1px] border-b-[ADADA]">
                  <div class="grid items-center grid-cols-[1fr_auto] pr-1 ">
                    <button
                      class="grid items-center h-full pr-4 pt-3 nav-item-link text-lg font-light text-grey hover:text-dark-blue text-left"
                      onClick={() => {
                        setCategory(item);
                      }}
                    >
                      {item.name}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
        {category && (
          <div class="grid grid-rows-[200px_auto]">
            <Image
              {...{
                src: "/img/catalogs/" + category.url + ".jpg",
                alt: category.name,
                imgClassName: "object-contain object-left-top w-full h-full",
              }}
            />
            <ul class="pl-4 pt-2 bg-white max-w-[440px] mb-4">
              {category?.children.map((item) => (
                <li class="grid items-center text-lg font-light text-grey hover:text-dark-blue border-b-[1px] border-b-[ADADA]">
                  <div class="grid items-center grid-cols-[1fr_auto] pr-1 ">
                    <a
                      href={`/catalog/${item.url}`}
                      class="grid items-center h-full pr-4 pt-3 nav-item-link"
                    >
                      {item.name}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </dialog>
    </>
  );
}
