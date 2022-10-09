import { icons } from "../../icons.tsx";

export const Defaulter = () => {
  return (
    <section class="py-4 sm:py-8 lg:py-16 max-w-fullhd mx-auto">
      <div class="relative mb-2 lg:mb-16">
        <h1 class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase sm:mb-4 lg:mb-0">
          НЕПЛАТЕЛЬЩИКИ
        </h1>
        <div class="hidden lg:block absolute bottom-0 right-0">
          <icons.TitleSeparator />
        </div>
      </div>
      <div class="bg-light-blue rounded-2xl py-4 md:py-8 pl-8 md:pl-10 pr-20 md:pr-40 relative overflow-hidden mx-4 md:mx-8 lg:mx-10 mb-4 md:mb-14 text-center">
        <span class="text-base md:text-xl lg:text-2xl text-blue1 leading-normal lg:leading-[50px]">
          Уважаемые коллеги!
          <br />
          Работать с добросовестными поставщиками и иметь порядочных клиентов -
          мечта любой компании.
          <br />
          Чтобы помочь Вам избежать проблемных ситуаций в работе, мы решили
          сделать
          <br />
          общедоступной базу неплательщиков.
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
      <div class="grid sm:grid-cols-[1fr_1fr] lg:grid-cols-[507px_507px] justify-between max-w-xs sm:max-w-[1180px] px-4 md:px-10 mx-auto box-content gap-y-8">
        <div
          class="bg-light-blue py-10 md:py-12 lg:py-16 px-10 md:px-16 lg:px-28 text-center text-base lg:text-[22px] lg:leading-[40px]"
          style="clip-path: url(#form-01)"
        >
          Данные проверены нашим опытом, поэтому при возникновении
          дополнительных вопросов - пишите на почту{" "}
          <a class="gradient-text" href="mailto:market@tehmet.su">
            market@tehmet.su
          </a>
        </div>
        <div
          class="bg-light-blue py-10 md:py-12 lg:py-16 px-10 md:px-16 lg:px-28 text-center text-base lg:text-[22px] lg:leading-[40px]"
          style="clip-path: url(#form-01)"
        >
          Если Вы ведете подобную базу и готовы поделиться информацией, будем
          рады сотрудничеству!
          <br />
          <br />
          Пусть страна знает своих антигероев!
        </div>
      </div>
    </section>
  );
};
