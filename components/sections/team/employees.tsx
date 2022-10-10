import { getEmployee } from "../../../data/employee.ts";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Employees = () => {
  return (
    <section class="pb-4 md:pb-16 px-4 md:px-10 pt-4 lg:pt-16">
      <div class="max-w-fullhd mx-auto">
        <div class="grid xl:grid-cols-2 gap-3">
          {getEmployee().map((item, index, { length }) => (
            <>
              <div class="px-2 sm:px-4 md:px-10 py-2 sm:py-4 md:py-10 grid gap-x-3 md:gap-x-8 grid-cols-[70px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[200px_1fr] bg-light-blue">
                <div>
                  <Image
                    {...{
                      src: "/img/employee/" + item.img,
                      alt: "Фото сотрудника " + item.fio,
                      imgClassName: "w-full",
                    }}
                  />
                </div>
                <div class="flex flex-col justify-end gap-1 sm:gap-2 md:gap-8 md:pt-6">
                  <div class="grid md:gap-2">
                    <span class="text-base leading-none sm:text-xl md:text-3xl uppercase">
                      {item.lastName}
                    </span>
                    <span class="text-base leading-none sm:text-xl md:text-3xl">
                      {item.io}
                    </span>
                  </div>
                  <span class="text-xs sm:text-base md:text-xl">
                    {item.post}
                  </span>
                  <ul class="grid gap-1 text-xs sm:text-xl font-light text-blue1 mt-auto">
                    {item.phone && (
                      <li class="grid grid-cols-[max-content_1fr] sm:gap-2">
                        <div class="grid items-center h-4 sm:h-7 w-6 grid-rows-1">
                          <icons.Phone />
                        </div>
                        <span>
                          Телефон:
                          <a
                            class="whitespace-nowrap"
                            href={`tel:${item.phoneLink}`}
                          >
                            {item.phone}
                          </a>
                        </span>
                      </li>
                    )}
                    {item.email && (
                      <li class="grid grid-cols-[max-content_1fr] sm:gap-2">
                        <div class="grid items-center h-4 sm:h-7 w-6 grid-rows-1">
                          <icons.DocumentTransfer />
                        </div>
                        <span>
                          e-mail:
                          <a
                            class="whitespace-nowrap"
                            href={`mailto:${item.email}`}
                          >
                            {item.email}
                          </a>
                        </span>
                      </li>
                    )}
                    {item.whatsapp && (
                      <li class="grid grid-cols-[max-content_1fr] sm:gap-2">
                        <div class="grid items-center h-4 sm:h-7 w-6 grid-rows-1">
                          <icons.Tablet />
                        </div>
                        <span>
                          Mоб./Whats App:
                          <a
                            class="whitespace-nowrap"
                            href={`https://wa.me/${item.whatsappLink}?text=""`}
                          >
                            {item.whatsapp}
                          </a>
                        </span>
                      </li>
                    )}
                    {item.icq && (
                      <li class="grid grid-cols-[max-content_1fr] sm:gap-2">
                        <div class="grid items-center h-4 sm:h-7 w-6 grid-rows-1">
                          <icons.Tablet />
                        </div>
                        <span>
                          ICQ:
                          <a
                            class="whitespace-nowrap"
                            href={`icq:${item.icqLink}`}
                          >
                            {item.icq}
                          </a>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              {(index === 0 || index === length - 1) && (
                <div
                  class={`bg-light-blue pt-10 md:pt-20 xl:pt-8 px-2 sm:px-8 xl:px-10 pb-20 md:pb-60 xl:pb-40 relative overflow-hidden grid place-content-center ${
                    index === 0 && "row-start-1 xl:row-start-auto"
                  }`}
                >
                  <span class="font-light text-lg sm:text-xl md:text-3xl text-center">
                    {index === 0 && "«Люди – главный актив нашей компании!»"}
                    {index === length - 1 && "«Мы любим то, что делаем»"}
                  </span>
                  <div class="grid absolute bottom-0 right-0 w-20 md:w-40 isolate">
                    <div
                      class="bg-white col-start-1 row-start-1"
                      style="clip-path: polygon(100% 100%, 0% 100%, 100% 0)"
                    ></div>
                    <div class="col-start-1 row-start-1 z-10">
                      <icons.LogoColor />
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        <div class="mt-4 md:mt-8 lg:mt-20 flex justify-end">
          <div class="hidden lg:block">
            <icons.TitleSeparator />
          </div>
        </div>
      </div>
    </section>
  );
};
