import { contacts } from "../../../shared/contacts.ts";
import { Button } from "../../button.tsx";
import { icons } from "../../icons.tsx";
import { Image } from "../../image.tsx";

export const Contacts = () => {
  return (
    <section class="pt-20 max-w-fullhd mx-auto">
      <div class="grid gap-y-12 xl:grid-cols-[507px_507px] min-h-[365px] justify-center xl:justify-between max-w-[1180px] px-10 mx-auto box-content">
        <div class="relative max-w-[320px] sm:max-w-[507px]">
          <div
            class="bg-light-blue py-4 sm:py-12 px-12 sm:px-28 h-full text-center text-base sm:text-[22px] sm:leading-[30px] grid gap-4 place-items-center text-dark-blue"
            style="clip-path: url(#form-01)"
          >
            <span>
              Узнать подробнее об условиях доставки можно у нашего менеджера.
            </span>
            <span>
              Нажмите “Заказать звонок” и мы свяжемся с Вами в ближайшее время
            </span>
            <Button
              view="gradient"
              text="Заказать звонок"
              dialogId="a74b73421fe794532bd3f7cb4f430e750"
            />
          </div>
          <div class="absolute -top-6 sm:-top-6 -right-6 sm:-right-16 w-20 sm:w-32">
            <Image
              {...{
                src: "/img/content/5ea876e1-0ca1-4431-b6f1-c135829bb7c1.png",
                alt: "technical support icon",
                imgClassName: "block w-full",
                baseFormat: "png",
              }}
            />
          </div>
        </div>
        <div
          class="bg-light-blue py-4 px-8 sm:p-12 text-center grid gap-3 place-items-center max-w-[320px] sm:max-w-[507px]"
          style="clip-path: url(#form-01)"
        >
          <Image
            {...{
              src: "/img/content/44278a2b-061d-4f3e-a7e6-b64926cee04b.png",
              alt: "phone not being used icon",
              imgClassName: "block w-[86px]",
              baseFormat: "png",
            }}
          />
          <span class="text-base sm:text-[22px] text-dark-blue mb-2">
            Или свяжитесь с нам по телефону
          </span>
          <div class="grid gap-1 sm:gap-3">
            {contacts({ isPage: true }).map((item) => (
              <div class="flex items-center gap-2 text-xs sm:text-[22px] sm:leading-[29px] text-dark-blue">
                <div class="shrink-0 hidden sm:block">
                  <icons.LocationGradient />
                </div>
                <div class="shrink-0 sm:hidden">
                  <icons.LocationGradientMini />
                </div>
                <span class="gradient-text">{item.city}</span>
                <a class="whitespace-nowrap gradient-text" href={item.telLink}>
                  {item.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="mt-4 sm:mt-8 lg:mt-20 flex justify-end mb-4 sm:mb-8 lg:mb-20">
        <icons.TitleSeparator />
      </div>
    </section>
  );
};
