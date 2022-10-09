import { icons } from "../../icons.tsx";

export const PeopleMain = () => {
  return (
    <section class="pt-2 md:pt-6 pb-8 md:pb-16 px-4 sm:px-10 bg-light-blue max-w-fullhd mx-auto">
      <h1 class="text-xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] font-light text-center mb-2 md:mb-5">
        Люди – главный актив нашей компании!
      </h1>
      <div class="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-10 justify-evenly">
        <div class="grid justify-items-center pb-4 md:pb-12 text-center rounded-[20px] bg-white grid-rows-[min-content_auto]">
          <div class="h-24 md:h-36 grid place-content-center grid-rows-[70px] md:grid-rows-none">
            <icons.ApproveUser />
          </div>
          <span class="font-light text-base sm:text-[26px] sm:leading-[40px] gradient-text px-2">
            Самое адекватное руководство
            <br />в Екатеринбурге
          </span>
        </div>
        <div class="grid justify-items-center pb-4 md:pb-12 text-center rounded-[20px] bg-white grid-rows-[min-content_auto]">
          <div class="h-24 md:h-36 grid place-content-center grid-rows-[70px] md:grid-rows-none">
            <icons.Calendar />
          </div>
          <span class="font-light text-base sm:text-[26px] sm:leading-[40px] gradient-text px-2">
            Вся зарплата "белая"
            <br />и вовремя выплаченная
          </span>
        </div>
        <div class="grid justify-items-center pb-4 md:pb-12 text-center rounded-[20px] bg-white grid-rows-[min-content_auto]">
          <div class="h-24 md:h-36 grid place-content-center grid-rows-[70px] md:grid-rows-none">
            <icons.Mortarboard />
          </div>
          <span class="font-light text-base sm:text-[26px] sm:leading-[40px] gradient-text px-2">
            Постоянно проводим обучение персонала
          </span>
        </div>
        <div class="grid justify-items-center pb-4 md:pb-12 text-center rounded-[20px] bg-white grid-rows-[min-content_auto]">
          <div class="h-24 md:h-36 grid place-content-center grid-rows-[70px] md:grid-rows-none">
            <icons.HappySmileHappy />
          </div>
          <span class="font-light text-base sm:text-[26px] sm:leading-[40px] gradient-text px-2">
            Позитивный коллектив, нацеленный
            <br />
            на общий результат
          </span>
        </div>
      </div>
    </section>
  );
};
