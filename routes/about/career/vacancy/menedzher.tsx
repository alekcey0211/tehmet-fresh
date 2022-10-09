import { PageProps, Handlers } from "$fresh/server.ts";
import { icons } from "../../../../components/icons.tsx";
import { LayoutCompact } from "../../../../components/layout.tsx";
import { PageData } from "../../../../context/page-context.tsx";
import { vacancies, Vacancy } from "../../../../shared/vacancies.ts";

type Data = PageData & {
  vacancy: Vacancy;
};

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const vacancy = vacancies().find((x) => req.url.endsWith(x.link));

    if (!vacancy) return ctx.renderNotFound();
    if (vacancy.isArchive) return ctx.renderNotFound();

    return ctx.render({
      vacancy,
    });
  },
};

export default function Menedzher(ctx: PageProps<Data>) {
  const { title, contactEmail, contactPhone, contactPhoneLink } =
    ctx.data.vacancy;

  return (
    <LayoutCompact pageData={ctx} title={title}>
      <>
        <section class="grid gap-y-4 md:gap-y-8 py-4 sm:pt-10 md:pt-16 max-w-fullhd mx-auto">
          <div class="relative">
            <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase">
              {title}
            </h1>
            <div class="hidden lg:block absolute bottom-0 right-0">
              <icons.TitleSeparator />
            </div>
          </div>
          <div class="px-4 md:px-10">
            <h2 class="font-light text-lg sm:text-xl lg:text-3xl text-dark-blue mb-2 md:mb-4">
              Требования:
            </h2>
            <ul class="font-light text-base md:text-lg grid list-disc list-inside">
              <li>
                Опыт успешных продаж от года (рассмотрим кандидатов без опыта в
                продажах, если есть перечисленные ниже способности)
              </li>
              <li>
                Наличие достижений в работе или личной жизни, которые можно
                проверить
              </li>
              <li>
                Способность комфортно общаться по телефону, умение слышать
                клиента
              </li>
              <li>
                Реальное (не просто на словах) желание постоянно развиваться,
                расти профессионально и личностно
              </li>
            </ul>
          </div>
          <div class="px-4 md:px-10">
            <h2 class="font-light text-lg sm:text-xl lg:text-3xl text-dark-blue mb-2 md:mb-4">
              Обязанности:
            </h2>
            <ul class="font-light text-base md:text-lg grid list-disc list-inside">
              <li>Активный поиск и привлечение новых клиентов</li>
              <li>Продажи по телефону</li>
              <li>Работа с существующими клиентами</li>
              <li>Выполнение поставленных планов</li>
              <li>Работа с клиентом от заявки до отгрузки</li>
            </ul>
          </div>
          <div class="px-4 md:px-10">
            <h2 class="font-light text-lg sm:text-xl lg:text-3xl text-dark-blue mb-2 md:mb-4">
              Взамен ты получишь:
            </h2>
            <ul class="font-light text-base md:text-lg grid list-disc list-inside">
              <li>
                Оклад + процент от результата, полностью белая зарплата; в нашей
                компании реально можно зарабатывать и потолка нет!
              </li>
              <li>
                Постоянное обучение, которое точно сделает тебя эффективнее
              </li>
              <li>Все инструменты для оперативной работы</li>
              <li>
                Возможность работы среди таких же эффективных как и ты коллег, в
                доброжелательном и позитивном коллективе
              </li>
              <li>
                Четкую постановку задач от руководителя и помощь коллег,
                возможность продавать интересный товар
              </li>
            </ul>
          </div>
          <div class="px-4 md:px-10">
            <h2 class="font-light text-lg sm:text-xl lg:text-3xl text-dark-blue mb-2 md:mb-4">
              Контактная информация
            </h2>
            <div class="grid gap-2">
              <span class="text-lg md:text-2xl font-light">
                Глушкова Евгения
              </span>
              <a
                class="gradient-text text-base"
                href={`tel:${contactPhoneLink}`}
              >
                {contactPhone}
              </a>
              <a
                class="gradient-text text-base"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </section>
        <div class="mt-4 sm:mt-8 lg:mt-20 flex justify-end mb-4 sm:mb-8 lg:mb-20">
          <icons.TitleSeparator />
        </div>
      </>
    </LayoutCompact>
  );
}
