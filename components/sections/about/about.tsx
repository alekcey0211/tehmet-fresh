import { icons } from "../../icons.tsx";

export const AboutTitle = () => {
  return (
    <section class="grid gap-y-2 sm:gap-y-4 md:gap-y-16 py-4 sm:py-10 md:py-16 max-w-fullhd mx-auto">
      <div class="relative">
        <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase">
          О КОМПАНИИ
        </h1>
        <div class="hidden lg:block absolute bottom-0 right-0">
          <icons.TitleSeparator />
        </div>
      </div>
      <div class="bg-light-blue rounded-2xl py-4 sm:py-8 pl-8 sm:pl-9 pr-20 md:pr-40 relative overflow-hidden mx-4 md:mx-10 sm:mb-14">
        <span class="text-base sm:text-xl md:text-2xl text-blue1 leading-normal md:leading-loose">
          «ТЕХМЕТ-УРАЛ» — ведущая компания в области комплексных поставок
          продукции для монтажа нефтепроводов. Молодая и энергичная команда
          профессионалов, которая обеспечивает сварочными материалами и
          оборудованием производственные и монтажные компании, успешно
          осуществляющая свою деятельность с 2009 года.
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
    </section>
  );
};
