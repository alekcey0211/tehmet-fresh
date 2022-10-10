import { getContacts } from "../../../data/contacts.ts";
import { icons } from "../../icons.tsx";
import { Button } from "../../button.tsx";

export const Contacts = () => {
  return (
    <section class="pt-4 sm:pt-8 lg:pt-16 max-w-fullhd mx-auto">
      <div class="relative mb-2 lg:mb-16">
        <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase sm:mb-4 lg:mb-0">
          КОНТАКТЫ
        </h1>
        <div class="hidden lg:block absolute bottom-0 right-0">
          <icons.TitleSeparator />
        </div>
      </div>
      {getContacts().map((item) => (
        <>
          <h2 class="font-light text-xl sm:text-4xl md:text-5xl md:leading-[80px] ml-4 sm:ml-10 text-dark-blue">
            {item.title}
          </h2>
          <div class="px-4 md:px-10 pt-6 pb-8 md:pb-16 mb-10 font-light text-base md:text-xl md:leading-[35px] text-dark-blue bg-light-blue">
            <div class="grid grid-cols-[24px_1fr] gap-3">
              <div class="grid items-center h-7 md:h-9">
                <icons.Address />
              </div>
              <span
                dangerouslySetInnerHTML={{
                  __html: `Адрес: ${item.address}`,
                }}
              />
            </div>
            <div class="grid items-center grid-cols-[24px_1fr] gap-3">
              <div class="grid items-center h-[28px] md:h-[35px]">
                <icons.Phone />
              </div>
              <span>
                Телефон:
                <a class="whitespace-nowrap" href={`tel:${item.telLink}`}>
                  {item.phone}
                </a>
              </span>
            </div>
            <div class="grid items-center grid-cols-[24px_1fr] gap-3">
              <div class="grid items-center h-[28px] md:h-[35px]">
                <icons.DocumentTransfer />
              </div>
              <span>
                e-mail:
                <a class="whitespace-nowrap" href={`mailto:${item.email}`}>
                  {item.email}
                </a>
              </span>
            </div>
            <div class="grid items-center grid-cols-[24px_1fr] gap-3">
              <div class="grid items-center h-[35px]">
                <icons.Tablet />
              </div>
              <span>Режим работы: {item.workMode}</span>
            </div>
            <div
              class="w-full max-w-[832px] aspect-[5/3] mt-5 bg-light-grey"
              data-map
              data-coords={item.coords}
              data-title={item.title}
            ></div>
          </div>
        </>
      ))}

      <div
        class="bg-light-blue py-8 md:py-16 px-14 md:px-28 text-center text-lg md:text-[22px] md:leading-[30px] grid gap-4 place-items-center mx-auto max-w-[340px] md:max-w-[507px] text-dark-blue"
        style="clip-path: url(#form-01)"
      >
        <span>
          Свои предложения Вы можете отправить по почте
          <a class="gradient-text" href="mailto:snab@tehmet.su">
            snab@tehmet.su
          </a>
        </span>
        <span>или мы свяжемся с Вами по телефону</span>
        <Button
          view="gradient"
          text="Заказать звонок"
          dialogId="a74b73421fe794532bd3f7cb4f430e750"
        />
      </div>
      <div class="mt-4 sm:mt-8 lg:mt-20 flex justify-end mb-4 sm:mb-8 lg:mb-20">
        <icons.TitleSeparator />
      </div>
    </section>
  );
};
