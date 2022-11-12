import { getEmployeeReviews } from "../../../data/employee-reviews.ts";
import { icons } from "../../icons.tsx";

export const WhyEmployeeWork = () => {
  return (
    <section class="py-4 md:py-6 px-4 sm:px-10">
      <div class="max-w-fullhd mx-auto">
        <div class="text-lg sm:text-4xl text-blue1 lg:leading-[80px] font-light text-center mb-4 md:mb-8">
          Почему наши сотрудники работают в компании «ТЕХМЕТ»?
        </div>
        <div class="grid 2xl:grid-cols-2 gap-6 mb-8 md:mb-16">
          {getEmployeeReviews().map((item, index) => (
            <div
              class={`grid lg:grid-cols-[270px_1fr] 2xl:grid-cols-1 grid-rows-[auto_1fr] content-start gap-2 md:gap-4 py-3 md:py-6 px-4 md:px-8 whitespace-pre-line ${
                index % 2 === 0 ? "bg-light-blue" : "bg-light-grey"
              }`}
            >
              <span class="text-blue text-lg md:text-xl mt-2 2xl:whitespace-normal">
                {item.fio}
              </span>
              <span class="bg-white p-4 text-base md:text-xl leading-relaxed md:leading-loose">
                {item.review}
              </span>
            </div>
          ))}
        </div>
        <p class="text-blue1 text-xl mb-2 md:mb-6">
          По результатам проведенной специальной оценки условий труда на рабочих
          местах всем сотрудникам установлен 2 класс
        </p>
        {/* // TODO: Нужна ссылка на Сводная ведомость результатов проведения СОУТ */}
        <a href="#" class="flex gap-2 items-center text-blue text-xl">
          Сводная ведомость результатов проведения СОУТ
          <icons.Download />
        </a>
      </div>
    </section>
  );
};
