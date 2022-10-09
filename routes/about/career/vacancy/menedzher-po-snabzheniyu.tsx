// ---
// tags: vacancy
// title: Менеджер по снабжению
// metaTitle: "Менеджер по снабжению - Техмет"
// metaDescription: Группа Компаний Техмет - ведущий поставщик в России в области комплексных поставок продукции для монтажа нефтегазопроводов Цель компании создавать уверенность у потребителей в бесперебойности производства
// layout: base2.njk
// permalink: /about/career/vacancy/{{title | slug}}/
// contactPhone: +7 (343) 288-26-88 (доб.116)
// contactEmail: personal@tehmet.su
// ---

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

export default function menedzherPoSnabzheniyu(ctx: PageProps<Data>) {
  const { title, contactEmail, contactPhone, contactPhoneLink } =
    ctx.data.vacancy;

  return (
    <LayoutCompact pageData={ctx} title={title}>
      <>
        <section class="grid gap-y-4 md:gap-y-8 py-4 sm:pt-10 md:pt-16 max-w-fullhd mx-auto">
          <div class="relative">
            <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase">
              {{ title }}
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
                Опыт работы от 1 года (в снабжении, либо в оптовых продажах)
              </li>
              <li>Желательно знание строительной номенклатуры</li>
              <li>
                Позитивный настрой по жизни (обязательное требование, просьба
                людей, которые постоянно недовольны жизнью и людьми вокруг - не
                откликаться)
              </li>
              <li>
                Высокая скорость мышления и хорошая работоспособность, умение
                работать в режиме многозадачности
              </li>
              <li>Много внимания</li>
              <li>
                Это предложение для тех, кто любит интенсивную работу с высокой
                загруженностью и интенсивностью
              </li>
            </ul>
          </div>
          <div class="px-4 md:px-10">
            <h2 class="font-light text-lg sm:text-xl lg:text-3xl text-dark-blue mb-2 md:mb-4">
              Обязанности:
            </h2>
            <ul class="font-light text-base md:text-lg grid list-disc list-inside">
              <li>
                Контроль и напоминание клиентам по оплате дебеторской
                задолженности
              </li>
              <li>
                Контроль поступления оригиналов документов от покупателей,
                поставщиков и перевозчиков
              </li>
              <li>Акты сверок с покупателями и работа в ЭДО</li>
              <li>Работа с номенклатурой в 1С</li>
              <li>
                Замена сотрудников на время отпусков на участках поступления и
                реализация товара
              </li>
              <li>Участие в подготовке документов для проверок ИФНС</li>
              <li>Выполнение поручений главного бухгалтера</li>
            </ul>
          </div>
          <div class="px-4 md:px-10">
            <h2 class="font-light text-lg sm:text-xl lg:text-3xl text-dark-blue mb-2 md:mb-4">
              Условия:
            </h2>
            <ul class="font-light text-base md:text-lg grid list-disc list-inside">
              <li>
                Четкая, оперативная поставка товаров в нужные сроки по
                минимальным ценам
              </li>
              <li>Быстрая обработка заявок менеджеров</li>
              <li>
                Работа с поставщиками с целью получения более выгодных условий
                работы для Компании
              </li>
            </ul>
          </div>
          <div class="px-4 md:px-10">
            <h2 class="font-light text-lg sm:text-xl lg:text-3xl text-dark-blue mb-2 md:mb-4">
              Взамен ты получишь:
            </h2>
            <ul class="font-light text-base md:text-lg grid list-disc list-inside">
              <li>
                Мотивацию, ориентированную на персональный результат (чем выше
                работоспособность, тем выше ЗП)
              </li>
              <li>
                Работу в стабильной компании, которая развивается и растет даже
                в сложных современных условиях
              </li>
              <li>
                Официальное трудоустройство, белая и своевременная ЗП без
                задержек
              </li>
              <li>Обучение, которое позволит эффективнее работать</li>
              <li>
                Позитивный коллектив целеустремленных людей, знающих свое дело и
                выполняющих его ответственно, коллектив без конфликтов и интриг
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
