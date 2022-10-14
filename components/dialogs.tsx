import CategoriesNavDialog from "../islands/CategoriesNavDialog.tsx";
import { Button } from "./button.tsx";
import { icons } from "./icons.tsx";
import { useContext } from "preact/hooks";
import { Page } from "../context/page-context.tsx";
import { getContacts } from "../data/contacts.ts";

export function Dialogs() {
  const { url } = useContext(Page);
  const contacts = []//getContacts({ isPage: true });
  
  return (
    <>
      <dialog
        id="a74b73421fe794532bd3f7cb4f430e750"
        class="form-dialog p-0 rounded-2xl w-[878px] max-w-[90vw]"
      >
        <form class="relative py-4 px-4 sm:py-10 sm:px-10 md:pt-[100px] md:pr-[100px] md:pb-[70px] md:pl-[70px]">
          <button
            type="button"
            data-close
            class="absolute top-0 right-0 md:top-10 md:right-10 rounded-2xl grid place-content-center w-10 h-10 sm:w-16 sm:h-16"
          >
            <icons.X stroke="#fff" strokeWidth={1} width={40} height={40} />
          </button>
          <span class="block mb-4 sm:mb-10 md:mb-16 text-2xl sm:text-4xl md:text-5xl text-center text-white">
            Свяжитесь с ТЕХМЕТ
          </span>

          <input type="hidden" name="target" value="callback" />
          <input
            type="hidden"
            name="theme"
            value="Заказ звонка с сайта Техмет"
          />
          <input type="hidden" name="GHO6K2" />
          <input type="hidden" name="NsOiD5T" value="xLcJ6ZFPQ" />
          <input type="hidden" name="isOrder" value="0" />
          <div class="mb-4 sm:mb-16">
            <label class="grid gap-1 sm:gap-2 mb-4 sm:mb-12">
              <span class="text-sm sm:text-xl text-white">
                Имя <sup>*</sup>
              </span>
              <input
                name="fio"
                type="text"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="grid gap-1 sm:gap-2 mb-4 sm:mb-12">
              <span class="text-sm sm:text-xl text-white">
                e-mail <sup>*</sup>
              </span>
              <input
                name="contactFF"
                type="e-mail"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="grid gap-1 sm:gap-2 mb-4">
              <span class="text-sm sm:text-xl text-white">
                Телефон <sup>*</sup>
              </span>
              <input
                name="phone"
                type="tel"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="inline-flex">
              <input
                type="checkbox"
                required
                name="agreement"
                class="checkbox opacity-0 cursor-pointer absolute z-10"
              />
              <div class="form-check-input flex-shrink-0 mt-2"></div>
              <span class="text-white cursor-pointer select-none text-xs sm:text-lg">
                Нажимая на кнопку, я даю согласие на обработку персональных
                данных, согласно&nbsp;
                <a
                  href="https://tehmet.su/politika-o-zaschite-personalnyh-dannyh"
                  class="underline"
                >
                  политике о защите персональных данных
                </a>
                .
              </span>
            </label>
          </div>
          <div
            class="grid justify-center text-white grid-cols-[228px] h-10 sm:h-14"
            data-button-container
          >
            <Button text="Заказать звонок" view="blue" />
          </div>
          <p class="m-0 text-center hidden text-white text-xl" data-success>
            Спасибо за заявку!
          </p>
        </form>
      </dialog>
      <dialog
        id="form-31e08410-add4-4eeb-be6d-9375bc7cf349"
        class="form-dialog p-0 rounded-2xl w-[878px] max-w-[90vw]"
      >
        <form class="relative py-4 px-4 sm:py-10 sm:px-10 md:pt-[100px] md:pr-[100px] md:pb-[70px] md:pl-[70px]">
          <button
            type="button"
            data-close
            class="absolute top-0 right-0 md:top-10 md:right-10 rounded-2xl grid place-content-center w-10 h-10 sm:w-16 sm:h-16"
          >
            <icons.X stroke="#fff" strokeWidth={1} width={40} height={40} />
          </button>
          <span class="block mb-4 sm:mb-10 md:mb-16 text-2xl sm:text-4xl md:text-5xl text-center text-white">
            Свяжитесь с ТЕХМЕТ
          </span>

          <input type="hidden" name="target" value="callback" />
          <input
            type="hidden"
            name="theme"
            value="Заказ звонка с сайта Техмет"
          />
          <input type="hidden" name="GHO6K2" />
          <input type="hidden" name="NsOiD5T" value="xLcJ6ZFPQ" />
          <input type="hidden" name="isOrder" value="1" />
          <div class="mb-4 sm:mb-16">
            <label class="grid gap-1 sm:gap-2 mb-4 sm:mb-12">
              <span class="text-sm sm:text-xl text-white">
                Имя <sup>*</sup>
              </span>
              <input
                name="fio"
                type="text"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="grid gap-1 sm:gap-2 mb-4 sm:mb-12">
              <span class="text-sm sm:text-xl text-white">
                e-mail <sup>*</sup>
              </span>
              <input
                name="contactFF"
                type="e-mail"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="grid gap-1 sm:gap-2 mb-4">
              <span class="text-sm sm:text-xl text-white">
                Телефон <sup>*</sup>
              </span>
              <input
                name="phone"
                type="tel"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="inline-flex">
              <input
                type="checkbox"
                required
                name="agreement"
                class="checkbox opacity-0 cursor-pointer absolute z-10"
              />
              <div class="form-check-input flex-shrink-0 mt-2"></div>
              <span class="text-white cursor-pointer select-none text-xs sm:text-lg">
                Нажимая на кнопку, я даю согласие на обработку персональных
                данных, согласно&nbsp;
                <a
                  href="https://tehmet.su/politika-o-zaschite-personalnyh-dannyh"
                  class="underline"
                >
                  политике о защите персональных данных
                </a>
                .
              </span>
            </label>
          </div>
          <div
            class="grid justify-center text-white grid-cols-[228px] h-10 sm:h-14"
            data-button-container
          >
            <Button text="Заказать звонок" view="blue" />
          </div>
          <p class="m-0 text-center hidden text-white text-xl" data-success>
            Спасибо за заявку!
          </p>
        </form>
      </dialog>
      <dialog
        id="form-effb7861-5ab1-469e-8091-fca64e21430b"
        class="form-dialog p-0 rounded-2xl w-[878px] max-w-[90vw]"
      >
        <form class="relative py-4 px-4 sm:py-10 sm:px-10 md:pt-[100px] md:pr-[100px] md:pb-[70px] md:pl-[70px]">
          <button
            type="button"
            data-close
            class="absolute top-0 right-0 md:top-10 md:right-10 rounded-2xl grid place-content-center w-10 h-10 sm:w-16 sm:h-16"
          >
            <icons.X stroke="#fff" strokeWidth={1} width={40} height={40} />
          </button>
          <span class="block mb-4 sm:mb-10 md:mb-16 text-2xl sm:text-4xl md:text-5xl text-center text-white">
            Обратная связь
          </span>

          <input
            type="hidden"
            name="theme"
            value="Заполнена форма обратной связи на tehmet.site"
          />
          <input type="hidden" name="GHO6K2" />
          <input type="hidden" name="NsOiD5T" value="xLcJ6ZFPQ" />
          <div class="mb-4 sm:mb-16">
            <label class="grid gap-1 sm:gap-2 mb-4 sm:mb-12">
              <span class="text-sm sm:text-xl text-white">
                Имя <sup>*</sup>
              </span>
              <input
                name="nameFF"
                type="text"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="grid gap-1 sm:gap-2 mb-4 sm:mb-12">
              <span class="text-sm sm:text-xl text-white">
                e-mail <sup>*</sup>
              </span>
              <input
                name="contactFF"
                type="e-mail"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="grid gap-1 sm:gap-2 mb-4">
              <span class="text-sm sm:text-xl text-white">
                Телефон <sup>*</sup>
              </span>
              <input
                name="phoneFF"
                type="tel"
                required
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              />
            </label>
            <label class="inline-flex">
              <input
                type="checkbox"
                required
                name="agreement"
                class="checkbox opacity-0 cursor-pointer absolute z-10"
              />
              <div class="form-check-input flex-shrink-0 mt-2"></div>
              <span class="text-white cursor-pointer select-none text-xs sm:text-lg">
                Нажимая на кнопку, я даю согласие на обработку персональных
                данных, согласно&nbsp;
                <a
                  href="https://tehmet.su/politika-o-zaschite-personalnyh-dannyh"
                  class="underline"
                >
                  политике о защите персональных данных
                </a>
                .
              </span>
            </label>
            <div class="border-b-[1px] border-[#DADADA] my-6"></div>
            <div class="grid md:flex gap-1 sm:gap-4 md:gap-12 mb-4 sm:mb-12">
              <div class="flex items-center">
                <input
                  id="radio-64be4770-64b6-48f5-8e6d-ed0d568ec085"
                  type="radio"
                  value="Заявка"
                  checked
                  name="type"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="radio-64be4770-64b6-48f5-8e6d-ed0d568ec085"
                  class="ml-4 text-base sm:text-xl font-light text-white"
                >
                  Заявка
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="radio-affe729c-5e7d-4fe4-81fb-6d6a1c260bff"
                  type="radio"
                  value="Благодарность"
                  name="type"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="radio-affe729c-5e7d-4fe4-81fb-6d6a1c260bff"
                  class="ml-4 text-base sm:text-xl font-light text-white"
                >
                  Благодарность
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="radio-4558d395-1bc8-468b-a0b1-bc2b0dd73d53"
                  type="radio"
                  value="Претензия"
                  name="type"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="radio-4558d395-1bc8-468b-a0b1-bc2b0dd73d53"
                  class="ml-4 text-base sm:text-xl font-light text-white"
                >
                  Претензия
                </label>
              </div>
            </div>
            <label class="grid gap-1 sm:gap-2 mb-4">
              <span class="text-sm sm:text-xl text-white">Комментарий</span>
              <textarea
                name="messageFF"
                rows={5}
                class="text-base sm:text-xl py-1 sm:py-4 px-4 sm:px-8 rounded-2xl bg-white"
              ></textarea>
            </label>
          </div>
          <div
            class="grid justify-center text-white grid-cols-[228px] h-10 sm:h-14"
            data-button-container
          >
            <Button text="Отправить" view="blue" />
          </div>
          <p class="m-0 text-center hidden text-white text-xl" data-success>
            Спасибо! Вы помогаете нам стать лучше!
          </p>
        </form>
      </dialog>
      {/* <CategoriesNavDialog pathname={url.pathname} contacts={contacts} /> */}
    </>
  );
}
