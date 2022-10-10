import { getBestMonthManager } from "../../../data/best-month-manager.ts";

export const BestManager = () => {
  const best = getBestMonthManager();
  return (
    <section class="py-4 md:py-10 px-4 md:px-8">
      <div class="max-w-hero mx-auto grid lg:grid-cols-[340px_1fr] gap-4 lg:gap-8 xl:gap-16">
        <div class="bg-white py-4 grid justify-items-center border-2 border-blue1">
          <img
            class="block min-w-full mb-3 md:mb-6 h-64 md:h-[383px] object-contain"
            src={best.img}
            alt={`ЛУЧШИЙ МЕНЕДЖЕР МЕСЯЦА - ${best.fio}`}
          />
          <span class="text-base md:text-lg md:leading-[18px] uppercase md:mb-3 text-blue1">
            ЛУЧШИЙ МЕНЕДЖЕР МЕСЯЦА
          </span>
          <span class="text-lg md:text-xl md:leading-[18px] text-dark-blue">
            {best.fio}
          </span>
        </div>
        <div class="bg-light-blue py-4 md:py-20 px-4 md:px-14 text-base leading-loose md:text-2xl md:leading-[45px]">
          {`ТЕХМЕТ- это молодая и энергичная команда профессионалов, которая обеспечивает сварочными материалами и оборудованием производственные и монтажные компании, успешно осуществляющая свою деятельность с 2009 года. 
				Спасибо каждому сотруднику за вклад в общее дело!<br>
				Поздравляем, ${best.fio ?? ""}! `}
        </div>
      </div>
    </section>
  );
};
