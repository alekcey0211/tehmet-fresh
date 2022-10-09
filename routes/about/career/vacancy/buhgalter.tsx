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

export default function Buhgalter(ctx: PageProps<Data>) {
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
                Опыт работы с первичной документацией от года (желательно в
                сфере оптовой торговли)
              </li>
              <li>Знание 1С обязательно</li>
              <li>Знание бухгалтерского и налогового законодательства</li>
              <li>
                Аналитический склад ума, желание вникнуть и разобраться в своей
                работе
              </li>
              <li>
                Структурно подходить к своей работе, расставлять приоритеты
              </li>
              <li>
                Обязателен позитивный настрой по жизни, как и у всего нашего
                коллектива
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
              <li>Современное, оборудованное рабочее место</li>
              <li>Официальное трудоустройство, белая ЗП</li>
              <li>График работы с 09-00 до 18-00</li>
              <li>Адрес работы: г.Екатеринбург, ул.Колхозников, 59а</li>
              <li>
                Позитивный коллектив целеустремленных людей, знающих свое дело и
                выполняющих его ответственно, коллектив без сплетен и интриг
              </li>
              <li>
                На нашем сайте вы можете посмотреть информацию про наш коллектив
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
